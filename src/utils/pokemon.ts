export const formatId = (id: number) => {
  return `#${id.toString().padStart(4, "0")}`;
};

export const formatAbout = (
  about: AboutPokemonResponse,
): { key: string; value: string }[] => {
  const formattedData: { key: string; value: string }[] = [];

  if (about.pokemon_v2_pokemon.length > 0) {
    const pokemon = about.pokemon_v2_pokemon[0];

    // Format types
    const types = pokemon.pokemon_v2_pokemontypes
      .map((type) => type.pokemon_v2_type.name)
      .join(", ");
    formattedData.push({ key: "types", value: types });

    // Format height (convert decimeters to meters)
    const heightInMeters = (pokemon.height / 10).toFixed(1);
    formattedData.push({ key: "height", value: `${heightInMeters}m` });

    // Format weight (convert hectograms to kilograms)
    const weightInKilograms = (pokemon.weight / 10).toFixed(1);
    formattedData.push({ key: "weight", value: `${weightInKilograms}kg` });

    // Format abilities
    const abilities = pokemon.pokemon_v2_pokemonabilities
      .map((ability) => ability.pokemon_v2_ability.name)
      .join(", ");
    formattedData.push({ key: "abilities", value: abilities });
  }

  return formattedData;
};

export const formatBaseStats = (
  baseStats: BaseStatsResponse,
): { key: string; value: number }[] => {
  if (!baseStats || !baseStats || !baseStats.pokemon_v2_pokemon.length) {
    return [];
  }

  const pokemonStats = baseStats.pokemon_v2_pokemon[0].pokemon_v2_pokemonstats;

  if (!pokemonStats || !pokemonStats.length) {
    return [];
  }

  return pokemonStats.map((stat) => ({
    key: stat.pokemon_v2_stat.name,
    value: stat.base_stat,
  }));
};

const formatTrigger = (from: FromEvolutions[]) => {
  for (let i = 0; i < from.length; i++) {
    const trigger = from[i];
    switch (trigger.pokemon_v2_evolutiontrigger.name) {
      case "level-up":
        if (trigger.min_level) {
          return {
            minLevel: trigger.min_level,
            type: "level-up",
          } as LevelUp;
        }
        continue;
      case "use-item":
        if (trigger.pokemon_v2_item?.name) {
          return {
            type: "use-item",
            itemName: trigger.pokemon_v2_item?.name,
            image:
              trigger.pokemon_v2_item?.pokemon_v2_itemsprites?.length &&
              trigger.pokemon_v2_item?.pokemon_v2_itemsprites[0]?.sprites
                ?.default,
          } as UseItem;
        }
        continue;
      case "trade":
        return {
          type: "trade",
        };
      case "other":
    }
  }

  return {
    type: "other",
  } as Other;
};

export const formatEvolutions = (response: EvolutionsResponse): Evolution[] => {
  const evolutionChains = response.pokemon_v2_evolutionchain;

  const evolutions = evolutionChains
    .flatMap((chain) => {
      return chain.pokemon_v2_pokemonspecies.flatMap((pokemon) => {
        if (pokemon.pokemon_v2_pokemonevolutions.length > 0) {
          return {
            fromId: pokemon.evolves_from_species_id,
            toId: pokemon.id,
            trigger: formatTrigger(pokemon.pokemon_v2_pokemonevolutions),
          } as Evolution;
        }
        return undefined;
      });
    })
    .filter((ev) => ev !== undefined)
    .sort((ev1, ev2) => {
      if (ev1!.fromId === ev2!.fromId) {
        return ev1!.toId - ev2!.toId;
      }
      return ev1!.fromId - ev2!.fromId;
    }) as Evolution[];

  return evolutions;
};
