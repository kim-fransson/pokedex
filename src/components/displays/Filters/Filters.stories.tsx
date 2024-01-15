import type { Meta, StoryObj } from "@storybook/react";
import { Filters, FiltersProps } from "./Filters";
import { useState } from "react";

const ControlledFilters = (args: FiltersProps) => {
  const [filters, setFilters] = useState<Filters>([[], [], []]);
  return <Filters {...args} filters={filters} onChange={setFilters} />;
};

const meta: Meta<typeof Filters> = {
  component: Filters,
  parameters: {},
  args: {},
};
export default meta;

type Story = StoryObj<typeof Filters>;

export const Playground: Story = {
  args: {},
  render: (args) => <ControlledFilters {...args} />,
};
