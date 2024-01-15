import type { Meta, StoryObj } from "@storybook/react";
import { TypeFilters, TypeFiltersProps } from "./TypeFilters";
import { useState } from "react";

const ControlledTypeFilters = (args: TypeFiltersProps) => {
  const [filters, setFilters] = useState<Type[]>([]);
  return (
    <TypeFilters {...args} selectedFilters={filters} onChange={setFilters} />
  );
};

const meta: Meta<typeof TypeFilters> = {
  component: TypeFilters,
  parameters: {},
  args: {},
};
export default meta;

type Story = StoryObj<typeof TypeFilters>;

export const Playground: Story = {
  args: {},
  render: (args) => <ControlledTypeFilters {...args} />,
};
