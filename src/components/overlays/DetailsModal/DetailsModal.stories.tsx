import type { Meta, StoryObj } from "@storybook/react";
import { DetailsModal } from "./DetailsModal";

import * as PokemonListItemStory from "../../displays/PokemonListItem/PokemonListItem.stories";
import { PokemonListItem } from "@/components";

const meta: Meta<typeof DetailsModal> = {
  component: DetailsModal,
  decorators: [
    (Story) => (
      <div className="mt-32">
        <Story />
      </div>
    ),
  ],
  args: {},
};
export default meta;

type Story = StoryObj<typeof DetailsModal>;

export const Grass: Story = {
  args: {
    pokemon: PokemonListItemStory.Grass.args?.pokemon,
    children: (
      <PokemonListItem
        pokemon={PokemonListItemStory.Grass.args?.pokemon as Pokemon}
      />
    ),
  },
};
