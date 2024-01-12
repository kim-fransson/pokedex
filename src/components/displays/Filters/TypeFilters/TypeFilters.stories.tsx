import type { Meta, StoryObj } from "@storybook/react";
import { TypeFilters } from "./TypeFilters";

const meta: Meta<typeof TypeFilters> = {
  component: TypeFilters,
  parameters: {},
  args: {},
};
export default meta;

type Story = StoryObj<typeof TypeFilters>;

export const Playground: Story = {
  args: {},
};
