import { Variables, request } from "graphql-request";

export const pokemonAPIFetcher = async ([query, variables]: [
  string,
  Variables,
]) => {
  return request(import.meta.env.VITE_POKEMON_BASE_URL, query, variables);
};
