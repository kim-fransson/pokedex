type Type =
  | "fire"
  | "grass"
  | "bug"
  | "water"
  | "normal"
  | "flying"
  | "rock"
  | "ground"
  | "fighting"
  | "ghost"
  | "poison"
  | "psychic"
  | "ice"
  | "dragon"
  | "electric"
  | "dark"
  | "fairy"
  | "steel";

type Pokemon = {
  id: number;
  name: string;
  types: Type[];
};

type ListPokemonResponse = {
  pokemon_v2_pokemon: Array<{
    id: number;
    name: string;
    pokemon_v2_pokemontypes: Array<{
      pokemon_v2_type: {
        name: Type;
      };
    }>;
  }>;
};

type OrderBy =
  | {
      name: "asc" | "desc";
    }
  | {
      id: "asc" | "desc";
    };

type OrderByKeys = "id_asc" | "id_desc" | "name_asc" | "name_desc";

type HeightFilter = "small" | "medium" | "large";
type WeightFilter = "small" | "medium" | "large";

type Filters = [Type[], HeightFilter[], WeightFilter[]];
