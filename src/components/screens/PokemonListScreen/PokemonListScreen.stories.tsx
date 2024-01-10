import { PokemonListScreen } from "./PokemonListScreen";
import type { Meta, StoryObj } from "@storybook/react";

import { listPokemonHandler } from "@mocks/handlers";

const meta: Meta<typeof PokemonListScreen> = {
  component: PokemonListScreen,
  parameters: {
    layout: "fullscreen",
    msw: {
      handlers: [listPokemonHandler],
    },
  },
  decorators: [],
  args: {},
};
export default meta;

type Story = StoryObj<typeof PokemonListScreen>;

export const Playground: Story = {
  args: {},
};
