import type { Meta, StoryObj } from "@storybook/react";
import { PokemonDetails } from "./PokemonDetails";

const meta: Meta<typeof PokemonDetails> = {
  component: PokemonDetails,
  args: {},
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof PokemonDetails>;

export const Grass: Story = {
  args: {
    pokemon: {
      id: 1,
      name: "bulbasaur",
      types: ["grass", "poison"],
    },
  },
};
