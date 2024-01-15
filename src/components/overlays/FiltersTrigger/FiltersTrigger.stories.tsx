import type { Meta, StoryObj } from "@storybook/react";
import { FiltersTrigger, FiltersTriggerProps } from "./FiltersTrigger";
import { useState } from "react";

const ControlledFiltersTrigger = (args: FiltersTriggerProps) => {
  const [filters, setFilters] = useState<Filters>([[], [], []]);
  return (
    <FiltersTrigger
      {...args}
      defaultFilters={filters}
      onApplyFilters={setFilters}
    />
  );
};

const meta: Meta<typeof FiltersTrigger> = {
  component: FiltersTrigger,
  parameters: {},
  args: {},
};
export default meta;

type Story = StoryObj<typeof FiltersTrigger>;

export const Playground: Story = {
  args: {},
  render: (args) => <ControlledFiltersTrigger {...args} />,
};
