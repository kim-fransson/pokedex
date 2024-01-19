import Pokeball from "@icons/full-pokeball.svg?react";

export interface EvolutionImageProps {
  pokemonId: number;
}

export const EvolutionImage = ({ pokemonId }: EvolutionImageProps) => {
  return (
    <div className="w-32 h-32 relative flex items-center justify-center">
      <img
        className="relative z-10"
        src={`${
          import.meta.env.VITE_POKEMON_OFFICIAL_ART_WORK_URL
        }/${pokemonId}.png`}
        alt={` `}
        height={115}
        width={115}
      />
      <Pokeball className="absolute inset-0" />
    </div>
  );
};
