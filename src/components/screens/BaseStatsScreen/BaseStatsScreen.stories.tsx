import { BaseStatsScreen } from "./BaseStatsScreen";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof BaseStatsScreen> = {
  component: BaseStatsScreen,
  args: {},
};
export default meta;

type Story = StoryObj<typeof BaseStatsScreen>;

export const Playground: Story = {
  args: {
    pokemonId: 1,
  },
};
