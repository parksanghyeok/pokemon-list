import { SortEvolutionListType } from "../types";

export const replaceUrl = (url: string) => {
  return url.replace(/.v2|[^0-9]/g, '')
};

export const sortEvolutionList = (list: any) => {
  const data: SortEvolutionListType = {
    first: [],
    second: [],
    third: [],
  };

  if (list !== undefined) {
    data.first.push(list.species);
    if (list.evolves_to.length > 0) {
      for (const s of list.evolves_to) {
        data.second.push(s.species);
        for (const t of s.evolves_to) {
          data.third.push(t.species);
        }
      }
    }
  }

  return data;
};

export const widthClassName = (value: string) => {
  if (Number(value) >= 100) return '100%';
  else return `${value}%`;
};

export const changeStatText = (text: string) => {
  switch (text) {
    case 'hp':
      return '체력';
    case 'attack':
      return '공격';
    case 'defense':
      return '방어';
    case 'special-attack':
      return '특수공격';
    case 'special-defense':
      return '특수방어';
    case 'speed':
      return '스피드';
  }
};

export const StatColor = (text: string) => {
  switch (text) {
    case 'hp':
      return '#FF5959';
    case 'attack':
      return '#F5AC78';
    case 'defense':
      return '#FAE078';
    case 'special-attack':
      return '#9DB7F5';
    case 'special-defense':
      return '#A6DB8D';
    case 'speed':
      return '#FA92B2';
  }
};