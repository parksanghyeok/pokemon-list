import { useEffect } from "react";
import ListItem from "../components/list";
import { useGetPokemonList } from "../hooks/query";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { pokemonId } from "../atom";
import Loading from "../components/loading";
import { replaceUrl } from "../utils/dataFormat";
import SearchInput from "../components/searchInput";

const Home = () => {
  const { ref, inView } = useInView();
  const router = useRouter();
  const [pId, setPId] = useRecoilState(pokemonId);
  const { data, isFetching, isRefetching, isFetchingNextPage, fetchNextPage, hasNextPage, isLoading } = useGetPokemonList();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  const test = (url: string) => {
    const id = replaceUrl(url);
    setPId(id);
    router.push(`/detail/${ id }`);
  };

  return (
    <>
      {isLoading ? (
        <Loading/>
      ) : (<></>) }
      <div className="flex flex-col px-4 items-center justify-center w-full py-[10px]">
        <img className="w-[320px] h-[118px]" src="../main_logo.png"/>
        <SearchInput />
      </div>
      {data?.pages[0]?.data.data.results.length !== 0 ? (
        <div className="h-[calc(100vh_-_210px)] p-4 grid gap-4 overflow-y-auto">
          {
            data?.pages.map((pages) =>
              pages?.data?.data?.results?.map((list: any, index: number) => (
                <ListItem
                  id={ replaceUrl(list.url) }
                  name={ list.name }
                  key={ list.name }
                  onClick={() => test(list.url) }
                />
              ))
            )
          }
          <div>
            <button
              ref={ref}
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetchingNextPage}
            >
              { isFetchingNextPage ? null : hasNextPage ? null : null }
            </button>
          </div>
        </div>
      ) : <div></div>
      }
    </>
  )
}

export default Home;
