import { SearchFieldProps } from "react-aria-components";
import { Search } from "./Search";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const ControlledSearch = (args: SearchFieldProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const onSubmit = () => {
    alert(`I have searched for ${searchTerm}`);
  };
  return (
    <Search
      {...args}
      value={searchTerm}
      onSubmit={onSubmit}
      onChange={setSearchTerm}
    />
  );
};

const meta: Meta<typeof Search> = {
  component: Search,
  render: (args) => <ControlledSearch {...args} />,
};
export default meta;

type Story = StoryObj<typeof Search>;

export const Playground: Story = {};
