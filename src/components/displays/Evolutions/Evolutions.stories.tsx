import type { Meta, StoryObj } from "@storybook/react";
import { Evolutions } from "./Evolutions";

const meta: Meta<typeof Evolutions> = {
  component: Evolutions,
  parameters: {},
  args: {},
};
export default meta;

type Story = StoryObj<typeof Evolutions>;

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const HasEvolutions: Story = {
  args: {
    evolutions: [
      { fromId: 1, toId: 2, trigger: { type: "level-up", minLevel: 16 } },
      { fromId: 2, toId: 3, trigger: { type: "level-up", minLevel: 32 } },
    ],
    pokemonId: 1,
  },
};

export const NoEvolutions: Story = {
  args: {
    evolutions: [],
    pokemonId: 718,
  },
};
