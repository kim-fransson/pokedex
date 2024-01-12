import type { Meta, StoryObj } from "@storybook/react";
import { HeightFilters, HeightFiltersProps } from "./HeightFilters";
import { useState } from "react";

const ControlledHeightFilters = (args: HeightFiltersProps) => {
  const [filters, setFilters] = useState<HeightFilter[]>([]);
  return (
    <HeightFilters {...args} selectedFilters={filters} onChange={setFilters} />
  );
};

const meta: Meta<typeof HeightFilters> = {
  component: HeightFilters,
  parameters: {},
  args: {},
};
export default meta;

type Story = StoryObj<typeof HeightFilters>;

export const Playground: Story = {
  args: {},
  render: (args) => <ControlledHeightFilters {...args} />,
};
