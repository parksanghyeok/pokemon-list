import { PokemonSpeciesType } from "../../types";
import { replaceUrl } from "../../utils/dataFormat";
import { useRouter } from "next/router";

interface EvolutionListProps {
  list: PokemonSpeciesType[];
  type: string;
}

const EvolutionList = ({ list, type }: EvolutionListProps) => {
  const router = useRouter();
  return (
    <div className="flex flex-col">
      {list.map((item) => (
        <div
          className="flex items-center cursor-pointer"
          key={ item.name + replaceUrl(item.url) }
          onClick={() => router.push(`/detail/${ replaceUrl(item.url) }`)}
        >
          {type !== 'first' ? (<i className="inline-block w-[18px] h-[36px] mr-[5px] bg-contain bg-icon-next"/>) : (<></>)}
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ replaceUrl(item.url) }.png`}
            className="w-[210px] h-[210px]"
          />
        </div>
      ))}
    </div>
  )
};

export default EvolutionList;