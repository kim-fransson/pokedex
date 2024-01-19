import { Evolutions } from "@/components";
import { formatEvolutions, pokemonAPIFetcher } from "@/utils";
import { gql } from "graphql-request";
import { useMemo } from "react";
import useSWR from "swr";

export interface EvolutionsScreenProps {
  pokemonId: number;
}

const evolutionsQuery = gql`
  query evolutions($pokemonId: Int) {
    pokemon_v2_evolutionchain(
      where: { pokemon_v2_pokemonspecies: { id: { _eq: $pokemonId } } }
    ) {
      pokemon_v2_pokemonspecies {
        name
        id
        evolves_from_species_id
        pokemon_v2_pokemonevolutions {
          min_level
          pokemon_v2_item {
            name
            pokemon_v2_itemsprites {
              sprites
            }
          }
          pokemon_v2_evolutiontrigger {
            name
          }
        }
      }
    }
  }
`;

export const EvolutionsScreen = ({ pokemonId }: EvolutionsScreenProps) => {
  const { isLoading, data } = useSWR(
    [evolutionsQuery, { pokemonId }],
    pokemonAPIFetcher,
  );

  const memoizedData = useMemo(() => {
    if (data) {
      return formatEvolutions(data as EvolutionsResponse);
    }
  }, [data]);

  return (
    <Evolutions
      evolutions={memoizedData}
      isLoading={isLoading}
      pokemonId={pokemonId}
    />
  );
};
