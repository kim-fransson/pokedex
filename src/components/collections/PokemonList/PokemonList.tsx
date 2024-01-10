import { PokemonListItem } from "@/components";
import { ListBox, ListBoxItem } from "react-aria-components";

export interface PokemonListProps {
  pokemon: Pokemon[];
  isLoading?: boolean;
}

export const PokemonList = ({ pokemon, isLoading }: PokemonListProps) => {
  const renderEmptyState = () => {
    if (isLoading) {
      return (
        <>
          {Array.from({ length: 20 }).map((_, index) => (
            <PokemonListItem key={index} isLoading />
          ))}
        </>
      );
    }
  };

  return (
    <ListBox
      className="grid md:grid-cols-3 grid-cols-1 gap-x-8 gap-y-24 outline-none pt-24 pb-4 px-4"
      aria-label="view more details about a pokemon"
      orientation="horizontal"
      items={pokemon}
      selectionMode="single"
      renderEmptyState={renderEmptyState}
    >
      {(item) => (
        <ListBoxItem
          textValue={item.name}
          className="rounded-2xl cursor-pointer outline-none focus-visible:ring-4 ring-offset-2 ring-yellow"
          id={item.id}
        >
          <PokemonListItem pokemon={item} />
        </ListBoxItem>
      )}
    </ListBox>
  );
};
