import { ErrorPage } from "./ErrorPage";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ErrorPage> = {
  component: ErrorPage,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [],
  args: {},
};
export default meta;

type Story = StoryObj<typeof ErrorPage>;

export const Playground: Story = {
  args: {},
};
