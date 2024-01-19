import { AboutScreen } from "./AboutScreen";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AboutScreen> = {
  component: AboutScreen,
  args: {},
};
export default meta;

type Story = StoryObj<typeof AboutScreen>;

export const Playground: Story = {
  args: {
    pokemonId: 1,
  },
};
