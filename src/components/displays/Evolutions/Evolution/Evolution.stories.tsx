import type { Meta, StoryObj } from "@storybook/react";
import { Evolution } from "./Evolution";

const meta: Meta<typeof Evolution> = {
  component: Evolution,
  parameters: {},
  args: {},
};
export default meta;

type Story = StoryObj<typeof Evolution>;

export const LevelUp: Story = {
  args: {
    evolution: {
      fromId: 1,
      toId: 2,
      trigger: {
        type: "level-up",
        minLevel: 16,
      },
    },
  },
};

export const Stone: Story = {
  args: {
    evolution: {
      fromId: 133,
      toId: 134,
      trigger: {
        type: "use-item",
        itemName: "water stone",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/water-stone.png",
      },
    },
  },
};

export const Item: Story = {
  args: {
    evolution: {
      fromId: 935,
      toId: 936,
      trigger: {
        type: "use-item",
        itemName: "auspicious armor",
      },
    },
  },
};

export const Trade: Story = {
  args: {
    evolution: {
      fromId: 93,
      toId: 94,
      trigger: {
        type: "trade",
      },
    },
  },
};

export const Other: Story = {
  args: {
    evolution: {
      fromId: 922,
      toId: 923,
      trigger: {
        type: "other",
      },
    },
  },
};
