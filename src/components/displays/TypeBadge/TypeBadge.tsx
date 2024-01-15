import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const badge = cva(
  [
    "inline-flex py-2 px-3 justify-center items-center rounded-full gap-1 text-dark-gray capitalize",
  ],
  {
    variants: {
      type: {
        fire: ["bg-[#FF6464]"],
        bug: ["bg-[#C9FF84]"],
        water: ["bg-[#9FF3FF]"],
        flying: ["bg-gradient-to-b from-[#CBE9FF] to-[#2299EE]"],
        poison: ["bg-[#D89CFD]"],
        normal: ["bg-[#C6C6A7]"],
        rock: ["bg-[#CFC06F]"],
        ground: ["bg-[#FFBF72]"],
        fighting: ["bg-[#FF699F]"],
        ghost: ["bg-[#B592FF]"],
        psychic: ["bg-[#FF5E60]"],
        ice: ["bg-[#AEFFF4]"],
        dragon: ["bg-[#87C5FF]"],
        dark: ["bg-[#8F8F8F]"],
        fairy: ["bg-[#FFA2E3]"],
        electric: ["bg-[#FFFA86]"],
        steel: ["bg-[#A4FFE9]"],
        grass: ["bg-[#80E177]"],
      },
    },
  },
);

export type TypeBadgeProps = VariantProps<typeof badge> & {
  active?: boolean;
};
export const TypeBadge = (props: TypeBadgeProps) => {
  const { type, active = true } = props;

  if (!type) return null;

  return (
    <span
      className={twMerge(
        badge(props),
        !active && "bg-dark-gray/16",
        !active &&
          type === "flying" &&
          "bg-gradient from-dark-gray/16 to-dark-gray/16",
      )}
    >
      <img src={`/pokemon/type/${type}.svg`} />
      {props.type}
    </span>
  );
};
