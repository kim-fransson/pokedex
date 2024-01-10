import PokedexLogo from "@icons/Pokedex-logo.svg?react";
import { PokemonListScreen } from "./components/screens/PokemonListScreen/PokemonListScreen";

export default function App() {
  return (
    <div className="min-h-dvh px-16 py-8">
      <div className="max-w-7xl mx-auto">
        <PokedexLogo className="mb-10" />
        <PokemonListScreen />
      </div>
    </div>
  );
}
