import { useInfiniteQuery, useQuery } from "react-query";
import { QUERY_KEYS } from "../keys";
import { getDetailPokemon, getPokemon, getPokemonEvolution, getPokemonSpecies } from "../../api";

// 포켓몬 전체 조회
export const useGetPokemonList = () => {
  const data = useInfiniteQuery(
    [QUERY_KEYS.GET_POKEMON],
    ({ pageParam = 0 }) => getPokemon(pageParam),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.nextPage;
      }
    }
  );
  return data;
};

// 포켓몬 상세 정보
export const useGetDetailPokemon = (id: string) => {
  const data = useQuery(
    [QUERY_KEYS.GET_DETAIL_POKEMON, id],
    () => getDetailPokemon(id)
  );
  return data;
};

// 포켓몬 진화 트리
export const useGetPokemonEvolution = (id: string) => {
  const data = useQuery(
    [QUERY_KEYS.GET_POKEMON_EVOLUTION, id],
    () => getPokemonEvolution(id)
  );

  return data;
};

// 포켓몬 종 조회
export const useGetPokemonSpecies = (id: string) => {
  const data = useQuery(
    [QUERY_KEYS.GET_POKEMON_SPECIES, id],
    () => getPokemonSpecies(id)
  );

  return data;
};