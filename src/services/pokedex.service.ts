import type { IPokemon } from '@/interfaces/Pokemon.interface';

export const getPokemon = (query: string): Promise<IPokemon> => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${query}`).then((res) => {
    if (res.status === 200) {
      return res.json();
    } else {
      throw {
        url: res.url,
        error: res.status,
        message: 'Pokemon not found',
      };
    }
  });
};
