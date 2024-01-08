import { TypeBadge } from "@/components";
import { formatId } from "@/utils";
import { cva } from "class-variance-authority";

const card = cva(["p-6 rounded-2xl shadow-lg grid relative"], {
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
});

export interface PokemonListItemProps {
  pokemon: Pokemon;
}

export const PokemonListItem = (props: PokemonListItemProps) => {
  const { name, types, id } = props.pokemon;
  return (
    <div className="max-w-xs grid">
      <div className={card({ type: types[0] })}>
        <img
          src={`${
            import.meta.env.VITE_POKEMON_OFFICIAL_ART_WORK_URL
          }/${id}.png`}
          alt={`${name}`}
          width={180}
          height={134}
          className="absolute top-24 -translate-y-full left-1/2 -translate-x-1/2"
        />
        <h2 className="mt-28 capitalize text-3xl font-bold text-white">
          {name}
        </h2>
        <h3 className="mt-2 text-lg font-bold text-white/80">{formatId(id)}</h3>
        <div className="mt-5 flex gap-2 flex-wrap">
          {types.map((type) => (
            <TypeBadge key={type} type={type} />
          ))}
        </div>
      </div>
    </div>
  );
};
