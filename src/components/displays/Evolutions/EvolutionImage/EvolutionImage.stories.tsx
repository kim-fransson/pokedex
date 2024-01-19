import type { Meta, StoryObj } from "@storybook/react";
import { EvolutionImage } from "./EvolutionImage";

const meta: Meta<typeof EvolutionImage> = {
  component: EvolutionImage,
  parameters: {},
  args: {},
};
export default meta;

type Story = StoryObj<typeof EvolutionImage>;

export const Playground: Story = {
  args: {
    pokemonId: 1,
  },
};
