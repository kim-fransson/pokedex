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
        <div className="flex lg:flex-row flex-col lg:items-center items-start gap-4">
          <PokedexLogo />
          <div className="lg:ml-auto md:flex-row flex-col md:items-center gap-y-2 gap-x-4 flex">
            <BigDevSoonPill />
            <PokemonAPIPill />
          </div>
        </div>
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

const BigDevSoonPill = () => {
  return (
    <div className="flex items-center gap-2">
      <span className="select-none rounded-lg bg-[#672871] px-2 py-1 text-gray-100 font-medium">
        Designs from
      </span>
      <a
        className="font-medium hover:text-[#672871]"
        href="https://bigdevsoon.me/"
        target="_blank"
        title="BigDevSoon"
      >
        BigDevSoon.me
      </a>
    </div>
  );
};

const PokemonAPIPill = () => {
  return (
    <div className="flex items-center gap-2">
      <span className="select-none rounded-lg bg-[#ef5350] px-2 py-1 text-gray-100 font-medium">
        Powered by
      </span>
      <a
        className="font-medium hover:text-[#ef5350]"
        href="https://pokeapi.co/docs/graphql#betastatus"
        target="_blank"
        title="PokéApi"
      >
        PokéAPI.com (graphql beta)
      </a>
    </div>
  );
};
