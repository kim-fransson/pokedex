import { Select, Option } from "./Select";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Select> = {
  component: Select,
  parameters: {
    msw: {},
  },
  decorators: [],
  args: {},
};
export default meta;

type Story = StoryObj<typeof Select>;

export const Playground: Story = {
  args: {},
  render: () => (
    <Select aria-label="order by">
      <Option>Lowest Number First</Option>
      <Option>Highest Number First</Option>
      <Option>Alphabetically (A-Z)</Option>
      <Option>Alphabetically (Z-A)</Option>
    </Select>
  ),
};
