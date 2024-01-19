import { PokemonListScreen } from "./PokemonListScreen";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PokemonListScreen> = {
  component: PokemonListScreen,
  parameters: {
    layout: "fullscreen",
  },
  args: {},
};
export default meta;

type Story = StoryObj<typeof PokemonListScreen>;

export const Playground: Story = {
  args: {},
};
