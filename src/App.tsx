import PokedexLogo from "@icons/Pokedex-logo.svg?react";
import { Search, Select, PokemonListScreen, Option } from "./components";
import { useState } from "react";
import { getKey, getOrderBy } from "./utils";

// todo: handle 404 image
// todo: Add error boundary (react-router)
// todo: update empty list (check figma)
// todo: Handle different card heights? (long name)
export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [searchName, setSearchName] = useState("");
  const [orderBy, setOrderBy] = useState<OrderBy>({ id: "asc" });

  return (
    <div className="min-h-dvh px-16 py-8">
      <div className="max-w-7xl mx-auto grid gap-10">
        <PokedexLogo />
        <Search
          value={inputValue}
          onChange={setInputValue}
          onSubmit={setSearchName}
        />
        <Select
          selectedKey={getKey(orderBy)}
          onSelectionChange={(key) => {
            setOrderBy(getOrderBy(key as OrderByKeys));
          }}
          aria-label="order by"
        >
          <Option id="id_asc">Lowest Number First</Option>
          <Option id="id_desc">Highest Number First</Option>
          <Option id="name_asc">Alphabetically (A-Z)</Option>
          <Option id="name_desc">Alphabetically (Z-A)</Option>
        </Select>
        <PokemonListScreen searchName={searchName} orderBy={orderBy} />
      </div>
    </div>
  );
}
