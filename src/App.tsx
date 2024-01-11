import PokedexLogo from "@icons/Pokedex-logo.svg?react";
import { PokemonListScreen } from "./components/screens/PokemonListScreen/PokemonListScreen";
import { Search } from "./components";
import { useState } from "react";

// todo: handle 404 image
export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [searchName, setSearchName] = useState("");
  return (
    <div className="min-h-dvh px-16 py-8">
      <div className="max-w-7xl mx-auto grid gap-10">
        <PokedexLogo />
        <Search
          value={inputValue}
          onChange={setInputValue}
          onSubmit={setSearchName}
        />
        <PokemonListScreen searchName={searchName} />
      </div>
    </div>
  );
}
