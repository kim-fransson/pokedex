import { DetailsTabs } from "./DetailsTabs";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DetailsTabs> = {
  component: DetailsTabs,
  args: {},
};
export default meta;

type Story = StoryObj<typeof DetailsTabs>;

export const Playground: Story = {
  args: {
    pokemonId: 1,
  },
};

export const Error: Story = {
  args: {
    pokemonId: 0,
  },
};
