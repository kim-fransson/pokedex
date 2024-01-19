import { About } from "@/components";
import { formatAbout, pokemonAPIFetcher } from "@/utils";
import { gql } from "graphql-request";
import { useMemo } from "react";
import useSWR from "swr";
import useSWRImmutable from "swr/immutable";

export interface AboutScreenProps {
  pokemonId: number;
}

const aboutPokemonQuery = gql`
  query aboutPokemon($pokemonId: Int) {
    pokemon_v2_pokemon(where: { id: { _eq: $pokemonId } }) {
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      height
      weight
      pokemon_v2_pokemonabilities {
        pokemon_v2_ability {
          name
        }
      }
    }
  }
`;

export const AboutScreen = ({ pokemonId }: AboutScreenProps) => {
  const { isLoading, data } = useSWRImmutable(
    [aboutPokemonQuery, { pokemonId }],
    pokemonAPIFetcher,
    {
      shouldRetryOnError: false,
    },
  );

  const memoizedData = useMemo(() => {
    if (data) {
      return formatAbout(data as AboutPokemonResponse);
    }
  }, [data]);

  return <About data={memoizedData} isLoading={isLoading} />;
};
