import type { Meta, StoryObj } from "@storybook/react";
import { About } from "./About";

const meta: Meta<typeof About> = {
  component: About,
  parameters: {},
  args: {},
};
export default meta;

type Story = StoryObj<typeof About>;

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const Playground: Story = {
  args: {
    data: [
      { key: "species", value: "fire" },
      { key: "height", value: "110cm" },
      { key: "weight", value: "19kg" },
      { key: "abilities", value: "blaze, solar power" },
    ],
  },
};
