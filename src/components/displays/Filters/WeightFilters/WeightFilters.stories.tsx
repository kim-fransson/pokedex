import type { Meta, StoryObj } from "@storybook/react";
import { WeightFilters } from "./WeightFilters";

const meta: Meta<typeof WeightFilters> = {
  component: WeightFilters,
  parameters: {},
  args: {},
};
export default meta;

type Story = StoryObj<typeof WeightFilters>;

export const Playground: Story = {
  args: {},
};
