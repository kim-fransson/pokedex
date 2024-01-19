import { TypeBadge } from "@/components";
import { DetailsTabs } from "@/components/navigation/DetailsTabs/DetailsTabs";
import { formatId } from "@/utils";
import { cva } from "class-variance-authority";

import PokemonBall from "@icons/pokeball.svg?react";

export interface PokemonDetailsProps {
  pokemon: Pokemon;
}

const card = cva(
  [
    "outline-none md:w-auto md:min-w-[725px] w-dvw rounded-2xl shadow-lg grid relative overflow-x-clip",
  ],
  {
    variants: {
      type: {
        fire: ["bg-[#EB6C6C]"],
        bug: ["bg-[#91AC22]"],
        water: ["bg-[#009ACB]"],
        flying: ["bg-gradient-to-b from-[#CBE9FF] to-[#2299EE]"],
        poison: ["bg-[#7E00CB]"],
        normal: ["bg-[#B6B6B6]"],
        rock: ["bg-[#857D57]"],
        ground: ["bg-[#A77437]"],
        fighting: ["bg-[#BA114E]"],
        ghost: ["bg-[#6B2BF1]"],
        psychic: ["bg-[#C4484A]"],
        ice: ["bg-[#3A9D90]"],
        dragon: ["bg-[#1268B8]"],
        dark: ["bg-[#373737]"],
        fairy: ["bg-[#C01A8D]"],
        electric: ["bg-[#B7B117]"],
        steel: ["bg-[#448F85]"],
        grass: ["bg-[#1EBA11]"],
      },
    },
  },
);

export const PokemonDetails = (props: PokemonDetailsProps) => {
  const { id, name, types } = props.pokemon;
  return (
    <div className={card({ type: types[0] })}>
      <div className="gap-5 pt-14 relative pb-12 flex items-center justify-center z-10">
        <img
          src={`${
            import.meta.env.VITE_POKEMON_OFFICIAL_ART_WORK_URL
          }/${id}.png`}
          alt={` `}
          width={180}
          height={180}
        />
        <div className="grid gap-4 items-center">
          <span className="text-white/80 font-bold">{formatId(id)}</span>
          <span className="capitalize md:text-5xl text-3xl font-bold text-white">
            {name}
          </span>
          <div className="flex gap-2 flex-wrap">
            {types.map((type) => (
              <TypeBadge key={type} type={type} />
            ))}
          </div>
        </div>
        <PokemonBall className="absolute -top-5 right-0 rotate-180 scale-150" />
        <PokemonBall className="absolute left-0 -bottom-5 scale-150" />
      </div>
      <DetailsTabs pokemonId={id} />
    </div>
  );
};
