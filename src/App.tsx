import PokedexLogo from "@icons/Pokedex-logo.svg?react";
import {
  Search,
  Select,
  PokemonListScreen,
  Option,
  FiltersTrigger,
} from "./components";
import { useEffect, useState } from "react";
import { getKey, getOrderBy } from "./utils";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [searchName, setSearchName] = useState("");
  const [filters, setFilters] = useState<Filters>([[], [], []]);
  const [orderBy, setOrderBy] = useState<OrderBy>({ id: "asc" });

  useEffect(() => {
    if (!inputValue) {
      setSearchName("");
    }
  }, [inputValue]);

  return (
    <div className="min-h-dvh lg:px-16 px-4 py-8">
      <div className="max-w-7xl mx-auto grid gap-10">
        <PokedexLogo />
        <Search
          value={inputValue}
          onChange={setInputValue}
          onSubmit={setSearchName}
        />
        <div className="flex justify-between">
          <Select
            aria-label="order by"
            selectedKey={getKey(orderBy)}
            onSelectionChange={(key) => {
              setOrderBy(getOrderBy(key as OrderByKeys));
            }}
          >
            <Option id="id_asc">Lowest Number First</Option>
            <Option id="id_desc">Highest Number First</Option>
            <Option id="name_asc">Alphabetically (A-Z)</Option>
            <Option id="name_desc">Alphabetically (Z-A)</Option>
          </Select>

          <FiltersTrigger
            defaultFilters={filters}
            onApplyFilters={setFilters}
          />
        </div>
        <PokemonListScreen
          searchName={searchName}
          orderBy={orderBy}
          filters={filters}
        />
      </div>
    </div>
  );
}
