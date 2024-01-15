import { PokemonList } from "@/components/collections/PokemonList/PokemonList";
import { types } from "@/data/types";
import { getHeightRange, getWeightRange, pokemonAPIFetcher } from "@/utils";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import { gql } from "graphql-request";
import { useEffect, useMemo, useState } from "react";
import { json } from "react-router-dom";
import useSWRInfinite from "swr/infinite";

const listPokemonQuery = gql`
  query listPokemon(
    $limit: Int!
    $offset: Int!
    $searchName: String = ""
    $orderBy: [pokemon_v2_pokemon_order_by!]
    $types: [String!] = []
    $minHeight: Int
    $maxHeight: Int
    $minWeight: Int
    $maxWeight: Int
  ) {
    pokemon_v2_pokemon(
      limit: $limit
      offset: $offset
      where: {
        name: { _iregex: $searchName }
        pokemon_v2_pokemontypes: { pokemon_v2_type: { name: { _in: $types } } }
        height: { _lte: $maxHeight, _gt: $minHeight }
        weight: { _lte: $maxWeight, _gt: $minWeight }
        is_default: { _eq: true }
      }
      order_by: $orderBy
    ) {
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

export interface PokemonListProps {
  searchName: string;
  orderBy: OrderBy;
  filters: Filters;
}

export const PokemonListScreen = ({
  searchName,
  orderBy,
  filters,
}: PokemonListProps) => {
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const [ref, entry] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });

  const { data, size, setSize, isLoading, error } = useSWRInfinite(
    (pageIndex) => getKey(pageIndex, searchName, orderBy, filters),
    pokemonAPIFetcher,
    {
      shouldRetryOnError: false,
      parallel: true,
      onError: () => setIsLoadingMore(false),
      onSuccess: () => setIsLoadingMore(false),
    },
  );

  if (error) {
    throw json({ status: error?.status });
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
      <PokemonList
        pokemon={memoizedPokemon}
        isLoading={isLoading || isLoadingMore}
      />
      <div ref={ref} className="absolute top-[70%] invisible" />
      {/* {isLoadingMore && (
        <div className="loading loading-spinner loading-lg scale-150 absolute -translate-x-1/2 left-1/2 bg-yellow bottom-2"></div>
      )} */}
    </div>
  );
};

const getKey = (
  pageIndex: number,
  searchQuery: string,
  orderBy: OrderBy,
  filters: Filters,
) => {
  const { min: minHeightInDecimeters, max: maxHeightInDecimeters } =
    getHeightRange(filters[1]);

  const { min: minWeightInHectograms, max: maxWeightInHectograms } =
    getWeightRange(filters[2]);

  return [
    listPokemonQuery,
    {
      limit: 20,
      offset: pageIndex * 20,
      searchName: searchQuery,
      orderBy: [orderBy],
      types: filters[0].length === 0 ? types : filters[0],
      minHeight: minHeightInDecimeters,
      maxHeight: maxHeightInDecimeters,
      minWeight: minWeightInHectograms,
      maxWeight: maxWeightInHectograms,
    },
  ];
};
