import axios from "axios";

// 모든 포켓몬 조회
export const getPokemon = async ( pageParams: number ) => {
  try {
    const data = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${pageParams}&limit=20`);
    return { data, nextPage: pageParams + 20, isLast: pageParams > 1010};
  } catch (e) {
    // console.log(e);
  }
};

// 포켓몬 상세정보
export const getDetailPokemon = async (id: string) => {
  try {
    if (!id) return false;
    const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return data;
  } catch (e) {
    
  }
};

// 포켓몬 진화트리
export const getPokemonEvolution = async (id: string) => {
  try {
    const data = await axios.get(`https://pokeapi.co/api/v2/evolution-chain/${id}`);
    return data;
  } catch (e) {
    
  }
};

// 포켓몬 종 조회
export const getPokemonSpecies = async (id: string) => {
  try {
    const data = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
    return data;
  } catch (e) {

  }
};