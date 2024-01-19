import { EvolutionsScreen } from "./EvolutionsScreen";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof EvolutionsScreen> = {
  component: EvolutionsScreen,
  args: {},
};
export default meta;

type Story = StoryObj<typeof EvolutionsScreen>;

export const Error: Story = {
  args: {
    pokemonId: 0,
  },
};

export const LevelUp: Story = {
  args: {
    pokemonId: 1,
  },
};

export const Stones: Story = {
  args: {
    pokemonId: 133,
  },
};

export const Items: Story = {
  args: {
    pokemonId: 935,
  },
};

export const NoEvolutions: Story = {
  args: {
    pokemonId: 718,
  },
};

export const Other: Story = {
  args: {
    pokemonId: 921,
  },
};

export const Trade: Story = {
  args: {
    pokemonId: 92,
  },
};
