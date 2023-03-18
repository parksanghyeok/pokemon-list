export interface SortEvolutionListType {
  first: PokemonSpeciesType[];
  second: PokemonSpeciesType[];
  third: PokemonSpeciesType[];
}

export interface PokemonSpeciesType {
  name: string;
  url: string;
}

export interface PokemonStatType {
  base_stat: string;
  effort: string;
  stat: {
    name: string;
    url: string;
  }
}