import { TypeBadge } from "@/components";
import { formatId } from "@/utils";
import { cva } from "class-variance-authority";
import { motion } from "framer-motion";

import Pokeball from "@icons/pokeball.svg?react";
import { useIntersectionObserver } from "@uidotdev/usehooks";

const card = cva(
  ["p-6 outline-none rounded-2xl shadow-lg grid relative h-full"],
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

export interface PokemonListItemProps {
  pokemon?: Pokemon;
  isLoading?: boolean;
}

export const PokemonListItem = ({
  pokemon,
  isLoading = false,
}: PokemonListItemProps) => {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });

  if (!pokemon || isLoading) {
    return <Skeleton />;
  }

  const { name, types, id } = pokemon;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={card({ type: types[0] })}
      ref={ref}
    >
      {entry?.isIntersecting && (
        <img
          className="absolute top-24 -translate-y-full left-1/2 -translate-x-1/2"
          src={`${
            import.meta.env.VITE_POKEMON_OFFICIAL_ART_WORK_URL
          }/${id}.png`}
          alt={` `}
          width={180}
          height={134}
          loading="lazy"
        />
      )}
      <h2 className="mt-28 capitalize text-3xl font-bold text-white">{name}</h2>
      <h3 className="mt-2 text-lg font-bold text-white/80">{formatId(id)}</h3>
      <div className="relative z-10 mt-5 flex gap-2 flex-wrap">
        {types.map((type) => (
          <TypeBadge key={type} type={type} />
        ))}
      </div>
      <div className="absolute left-0 bottom-0 overflow-hidden">
        <Pokeball className="translate-y-8 -translate-x-4" />
      </div>
    </motion.div>
  );
};

const Skeleton = () => {
  return (
    <div className={card()}>
      <div className="shadow-lg h-[134px] w-[180px] skeleton absolute top-24 -translate-y-full left-1/2 -translate-x-1/2" />
      <div className="mt-28 h-8 rounded-full w-32 skeleton" />
      <div className="mt-2 rounded-full skeleton h-6 w-14" />
      <div className="mt-5 flex gap-2 flex-wrap">
        <div className="h-9 skeleton rounded-full w-16" />
        <div className="h-9 skeleton rounded-full w-24" />
      </div>
    </div>
  );
};
