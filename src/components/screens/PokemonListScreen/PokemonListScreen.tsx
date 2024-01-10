import { PokemonList } from "@/components/collections/PokemonList/PokemonList";
import { pokemonAPIFetcher } from "@/utils";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import { gql } from "graphql-request";
import { useEffect, useMemo, useState } from "react";
import useSWRInfinite from "swr/infinite";

const listPokemonQuery = gql`
  query listPokemon($limit: Int!, $offset: Int!) {
    pokemon_v2_pokemon(limit: $limit, offset: $offset) {
      id
      name
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
    }
  }
`;

export const PokemonListScreen = () => {
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const [ref, entry] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });

  const { data, size, setSize, isLoading, error } = useSWRInfinite(
    getKey,
    pokemonAPIFetcher,
    {
      shouldRetryOnError: false,
      parallel: true,
      onError: () => setIsLoadingMore(false),
      onSuccess: () => setIsLoadingMore(false),
    },
  );

  if (error) {
    throw new Error(error);
  }

  const responses = data as ListPokemonResponse[] | undefined;
  const memoizedPokemon = useMemo(() => {
    if (!responses) {
      return [];
    }

    return responses.flatMap((res) => {
      return res.pokemon_v2_pokemon.map((p) => ({
        name: p.name,
        id: p.id,
        types: p.pokemon_v2_pokemontypes.map((t) => t.pokemon_v2_type.name),
      })) as Pokemon[];
    });
  }, [responses]);

  useEffect(() => {
    if (entry?.isIntersecting && !isLoading && !isLoadingMore) {
      setSize(size + 1);
      setIsLoadingMore(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entry?.isIntersecting]);

  return (
    <div className="relative">
      <PokemonList pokemon={memoizedPokemon} isLoading={isLoading} />
      <div ref={ref} className="absolute top-[70%] invisible" />
      {isLoadingMore && (
        <div className="loading loading-spinner loading-lg scale-150 absolute -translate-x-1/2 left-1/2 bg-yellow bottom-2"></div>
      )}
    </div>
  );
};

const getKey = (pageIndex: number) => {
  return [listPokemonQuery, { limit: 20, offset: pageIndex * 20 }];
};
