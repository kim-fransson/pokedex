import type { Meta, StoryObj } from "@storybook/react";
import { BaseStats } from "./BaseStats";

const meta: Meta<typeof BaseStats> = {
  component: BaseStats,
  parameters: {},
  args: {},
};
export default meta;

type Story = StoryObj<typeof BaseStats>;

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const Playground: Story = {
  args: {
    data: [
      { key: "hp", value: 58 },
      { key: "attack", value: 64 },
      { key: "defense", value: 58 },
      { key: "special attack", value: 80 },
      { key: "special defense", value: 65 },
      { key: "speed", value: 80 },
    ],
  },
};
