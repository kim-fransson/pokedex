import { DetailsModal, PokemonListItem } from "@/components";
import { motion } from "framer-motion";
import { ListBox, ListBoxItem } from "react-aria-components";
import Empty from "@icons/empty.svg?react";
import { useEffect, useState } from "react";

export interface PokemonListProps {
  pokemon: Pokemon[];
  isLoading?: boolean;
}

export const PokemonList = ({ pokemon, isLoading }: PokemonListProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPokemonId, setSelectedPokemonId] = useState<number[]>([]);

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

    return (
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        className="col-span-full text-lg font-medium text-center flex flex-col items-center justify-center gap-4"
      >
        <Empty />
        No Pokémon detected - throw your Pokéball elsewhere and keep
        adventuring!
      </motion.span>
    );
  };

  useEffect(() => {
    if (selectedPokemonId[0]) {
      setIsOpen(true);
    }
  }, [selectedPokemonId]);

  return (
    <>
      <ListBox
        className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-x-8 gap-x-4 gap-y-24 outline-none pt-24 pb-4 md:px-4"
        aria-label="view more details about a pokemon"
        orientation="horizontal"
        items={pokemon}
        selectedKeys={selectedPokemonId}
        selectionMode="single"
        renderEmptyState={renderEmptyState}
        onSelectionChange={(selection) => {
          setSelectedPokemonId(Array.from(selection) as number[]);
        }}
      >
        {(item) => (
          <ListBoxItem
            textValue={item.name}
            className="rounded-2xl cursor-pointer outline-none focus-visible:ring-4 ring-offset-2 ring-dark-blue"
            id={item.id}
          >
            <PokemonListItem pokemon={item} />
          </ListBoxItem>
        )}
      </ListBox>
      <DetailsModal
        isOpen={isOpen}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedPokemonId([]);
          }
          setIsOpen(open);
        }}
        pokemon={pokemon.find((p) => p.id === selectedPokemonId[0]) as Pokemon}
      />
    </>
  );
};
