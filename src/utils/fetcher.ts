import { request } from "graphql-request";

export const pokemonAPIFetcher = async (query: string) => {
  return request(import.meta.env.VITE_POKEMON_BASE_URL, query);
};
