import { BaseStats } from "@/components";
import { formatBaseStats, pokemonAPIFetcher } from "@/utils";
import { gql } from "graphql-request";
import { useMemo } from "react";
import useSWR from "swr";

export interface BaseStatsScreenProps {
  pokemonId: number;
}

const baseStatsQuery = gql`
  query baseStatsPokemon($pokemonId: Int) {
    pokemon_v2_pokemon(where: { id: { _eq: $pokemonId } }) {
      pokemon_v2_pokemonstats {
        pokemon_v2_stat {
          name
        }
        base_stat
      }
    }
  }
`;

export const BaseStatsScreen = ({ pokemonId }: BaseStatsScreenProps) => {
  const { isLoading, data } = useSWR(
    [baseStatsQuery, { pokemonId }],
    pokemonAPIFetcher,
    {
      shouldRetryOnError: false,
    },
  );

  const memoizedData = useMemo(() => {
    if (data) {
      return formatBaseStats(data as BaseStatsResponse);
    }
  }, [data]);

  return <BaseStats data={memoizedData} isLoading={isLoading} />;
};
