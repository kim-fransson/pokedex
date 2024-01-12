import type { Meta, StoryObj } from "@storybook/react";
import { Filters } from "./Filters";

const meta: Meta<typeof Filters> = {
  component: Filters,
  parameters: {},
  args: {},
};
export default meta;

type Story = StoryObj<typeof Filters>;

export const Playground: Story = {
  args: {},
};
