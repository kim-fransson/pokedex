import type { Meta, StoryObj } from "@storybook/react";
import { EvolutionTrigger } from "./EvolutionTrigger";

const meta: Meta<typeof EvolutionTrigger> = {
  component: EvolutionTrigger,
  parameters: {},
  args: {},
};
export default meta;

type Story = StoryObj<typeof EvolutionTrigger>;

export const LevelUp: Story = {
  args: {
    trigger: {
      type: "level-up",
      minLevel: 16,
    },
  },
};

export const Stone: Story = {
  args: {
    trigger: {
      type: "use-item",
      itemName: "water stone",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/water-stone.png",
    },
  },
};

export const Item: Story = {
  args: {
    trigger: {
      type: "use-item",
      itemName: "auspicious armor",
    },
  },
};

export const Trade: Story = {
  args: {
    trigger: {
      type: "trade",
    },
  },
};

export const Other: Story = {
  args: {
    trigger: {
      type: "other",
    },
  },
};
