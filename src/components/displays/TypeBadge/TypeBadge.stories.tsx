import type { Meta, StoryObj } from "@storybook/react";
import { TypeBadge } from "./TypeBadge";

const meta: Meta<typeof TypeBadge> = {
  component: TypeBadge,
  parameters: {
    layout: "centered",
    msw: {},
  },
  decorators: [],
  args: {},
};
export default meta;

type Story = StoryObj<typeof TypeBadge>;

export const Fire: Story = {
  args: {
    type: "fire",
  },
};

export const FireInActive: Story = {
  args: {
    type: "fire",
    active: false,
  },
};

export const Bug: Story = {
  args: {
    type: "bug",
  },
};

export const Water: Story = {
  args: {
    type: "water",
  },
};

export const Flying: Story = {
  args: {
    type: "flying",
  },
};

export const Poison: Story = {
  args: {
    type: "poison",
  },
};

export const Normal: Story = {
  args: {
    type: "normal",
  },
};

export const Rock: Story = {
  args: {
    type: "rock",
  },
};

export const Ground: Story = {
  args: {
    type: "ground",
  },
};

export const Fighting: Story = {
  args: {
    type: "fighting",
  },
};

export const Ghost: Story = {
  args: {
    type: "ghost",
  },
};

export const Psychic: Story = {
  args: {
    type: "psychic",
  },
};

export const Ice: Story = {
  args: {
    type: "ice",
  },
};

export const Dragon: Story = {
  args: {
    type: "dragon",
  },
};

export const Dark: Story = {
  args: {
    type: "dark",
  },
};

export const Fairy: Story = {
  args: {
    type: "fairy",
  },
};

export const Electric: Story = {
  args: {
    type: "electric",
  },
};

export const Steel: Story = {
  args: {
    type: "steel",
  },
};

export const Grass: Story = {
  args: {
    type: "grass",
  },
};
