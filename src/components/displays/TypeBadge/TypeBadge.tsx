import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { useState } from "react";

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
        normal: ["bg-[#CBCBCB]"],
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

export type TypeBadgeProps = VariantProps<typeof badge>;
export const TypeBadge = (props: TypeBadgeProps) => {
  const { type } = props;
  const [isLoadingImage, setIsLoadingImage] = useState(true);

  if (!type) return null;

  return (
    <span className={badge(props)}>
      {isLoadingImage && <div className="h-4 w-4 rounded-full skeleton" />}
      <img
        onLoad={() => setIsLoadingImage(false)}
        src={`/pokemon/type/${type}.svg`}
        alt={`${type} type`}
      />
      {props.type}
    </span>
  );
};
