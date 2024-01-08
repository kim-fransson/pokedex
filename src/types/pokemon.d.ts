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
