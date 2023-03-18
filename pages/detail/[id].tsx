import { useRouter } from "next/router";
import { useGetDetailPokemon, useGetPokemonEvolution, useGetPokemonSpecies } from "../../hooks/query";
import { useRecoilState } from "recoil";
import { pokemonId } from "../../atom";
import { useEffect, useState } from "react";
import DetailList from "../../components/list/detailList";
import Loading from "../../components/loading";
import { replaceUrl, sortEvolutionList, widthClassName } from "../../utils/dataFormat";
import { PokemonStatType, SortEvolutionListType } from "../../types";
import EvolutionList from "../../components/list/evolutionList";
import StatList from "../../components/list/statList";

const PokemonDetail = () => {
  const router = useRouter();
  const [pId, setPId] = useRecoilState(pokemonId);
  const { data, isLoading } = useGetDetailPokemon(pId);
  const species = useGetPokemonSpecies(pId);
  const [eId, setEId] = useState('');
  const evolution = useGetPokemonEvolution(eId);
  const [evolutionList, setEvolutionList]  = useState<SortEvolutionListType>({ first: [], second: [], third: [] });

  useEffect(() => {
    const id: any = router.query.id;
    if (id !== pId) {
      setPId(id);
    }
  }, [router.query]);

  useEffect(() => {
    if (species.status === 'success') {
      const id = replaceUrl(species?.data?.data.evolution_chain.url || '');
      setEId(id);
    }
  }, [species]);

  useEffect(() => {
    if (evolution.status === 'success') {
      const list: SortEvolutionListType = sortEvolutionList(evolution.data?.data.chain);
      setEvolutionList(list);
    }
  }, [evolution.dataUpdatedAt]);

  return (
    <>
    {isLoading ?
      ( <Loading/> ) :
      (
        <>
          { data?.data ? (
            <>
              <div className="relative flex items-center justify-center px-5 w-full h-[50px] border-b border-[#cccccc]">
                <button
                  className="absolute w-[15px] h-[15px] left-[20px] rotate-45 border border-t-[0px] border-r-[0px] border-[#000]"
                  onClick={() => router.push('/')}
                />
                <div className="text-lg font-bold">
                  {
                    species?.data?.data.names.map((item: any) => {
                        if (item.language.name === 'ko') {
                          return (
                            <p key={item.name }>{ item.name }</p>
                          )
                        }
                      }
                    )
                  }
                </div>
              </div>
              <div className="w-full h-[calc(100vh_-_66px)] px-4 my-4 overflow-y-auto">
                {/* 포켓몬 기본정보 */}
                <div className="flex items-center w-full">
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ pId }.png`}
                    className="w-[250px] h-[250px]"
                  />
                  <div className="w-full h-fit p-4 grid grid-cols-4 border rounded-lg text-center shadow-[6px_4px_14px_5px_rgba(0,0,0,0.21)]">
                    <DetailList title={'타입'}>
                      {
                        data?.data?.types.map((item: any) => (
                          <div key={ item.type.name }>
                            {item.type.name}
                          </div>
                        ))
                      }
                    </DetailList>
                    <DetailList title={'키'}>
                      <p>{ data?.data.height / 10 } m</p>
                    </DetailList>
                    <DetailList title={'몸무게'}>
                      <p>{ data?.data.weight / 10 } kg</p>
                    </DetailList>
                    <DetailList title={'분류'}>
                      {
                        species?.data?.data.genera.map((item: any) => {
                            if (item.language.name === 'ko') {
                              return (
                                <div key={ item.genus }>{ item.genus }</div>
                              )
                            }
                          }
                        )
                      }
                    </DetailList>
                  </div>
                </div>
                {/* 포켓몬 기본 스탯 */}
                <div className="mt-[40px]">
                  <h4 className="flex items-center mb-[20px] text-[25px] font-bold">
                    <i className="w-[30px] h-[30px] bg-contain bg-icon-ball" />
                    <span className="ml-[8px]">기본 스탯</span>
                  </h4>

                  <div className="gap-x-8 gap-y-2 grid grid-cols-2">
                    {data?.data.stats.map((stat: PokemonStatType) => (
                        <StatList item={stat} width={ widthClassName(stat.base_stat) }/>
                      )
                    )}
                  </div>

                </div>
                {/* 포켓몬 진화트리 */}
                <div className="mt-[40px]">
                  <h4 className="flex items-center mb-[20px] text-[25px] font-bold">
                    <i className="w-[30px] h-[30px] bg-contain bg-icon-ball" />
                    <span className="ml-[8px]">진화</span>
                  </h4>
                  {evolutionList.second.length > 0 ?
                    (
                      <div className="flex justify-center w-full">
                        {evolutionList.first.length > 0 ? ( <EvolutionList list={ evolutionList.first } type={'first'}/> ) : (<></>)}
                        {evolutionList.second.length > 0 ? ( <EvolutionList list={ evolutionList.second } type={'second'}/> ) : (<></>)}
                        {evolutionList.third.length > 0 ? ( <EvolutionList list={ evolutionList.third } type={'third'}/> ) : (<></>)}
                      </div>
                    ) : (<div></div>)
                  }
                </div>
              </div>
            </>
          ) : (<div></div>)}
        </>
      )
    }
    </>
  )
}

export default PokemonDetail;