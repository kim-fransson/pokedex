import { motion } from "framer-motion";
import { Evolution } from "./Evolution/Evolution";
import { EvolutionImage } from "./EvolutionImage/EvolutionImage";
import Loading from "@icons/loader.svg?react";

export interface EvolutionsProps {
  isLoading?: boolean;
  evolutions?: Evolution[];
  pokemonId: number;
}

export const Evolutions = ({
  isLoading,
  evolutions,
  pokemonId,
}: EvolutionsProps) => {
  if (isLoading || !evolutions) {
    return (
      <div className="flex justify-center items-center h-full">
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ ease: "easeInOut", duration: 1.75, repeat: Infinity }}
        >
          <Loading />
        </motion.span>
      </div>
    );
  }

  if (evolutions.length === 0) {
    return (
      <div className="flex flex-col gap-4 justify-center items-center h-full">
        <EvolutionImage pokemonId={pokemonId} />
        <span className="text-xl font-bold text-dark-gray text-center">
          This Pokémon doesn't Evolve
        </span>
      </div>
    );
  }
  return (
    <div className="grid gap-10 items-center h-full">
      {evolutions.map((evolution) => (
        <Evolution
          key={`${evolution.fromId}-${evolution.toId}`}
          evolution={evolution}
        />
      ))}
    </div>
  );
};
