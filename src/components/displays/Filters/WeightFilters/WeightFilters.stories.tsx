import type { Meta, StoryObj } from "@storybook/react";
import { WeightFilters, WeightFiltersProps } from "./WeightFilters";
import { useState } from "react";

const ControlledWeightFilters = (args: WeightFiltersProps) => {
  const [filters, setFilters] = useState<WeightFilter[]>([]);
  return (
    <WeightFilters {...args} selectedFilters={filters} onChange={setFilters} />
  );
};

const meta: Meta<typeof WeightFilters> = {
  component: WeightFilters,
  parameters: {},
  args: {},
};
export default meta;

type Story = StoryObj<typeof WeightFilters>;

export const Playground: Story = {
  args: {},
  render: (args) => <ControlledWeightFilters {...args} />,
};
