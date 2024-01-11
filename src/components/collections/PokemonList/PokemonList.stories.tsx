import type { Meta, StoryObj } from "@storybook/react";
import { PokemonList } from "./PokemonList";
import * as PokemonStories from "../../displays/PokemonListItem/PokemonListItem.stories";

const meta: Meta<typeof PokemonList> = {
  component: PokemonList,
  parameters: {
    layout: "fullscreen",
    msw: {},
  },
  args: {},
};
export default meta;

type Story = StoryObj<typeof PokemonList>;

export const Default: Story = {
  args: {
    pokemon: [
      { ...PokemonStories.Grass.args?.pokemon },
      { ...PokemonStories.Bug.args?.pokemon },
      { ...PokemonStories.Dark.args?.pokemon },
      { ...PokemonStories.Dragon.args?.pokemon },
      { ...PokemonStories.Electric.args?.pokemon },
      { ...PokemonStories.Fairy.args?.pokemon },
      { ...PokemonStories.Fighting.args?.pokemon },
      { ...PokemonStories.Fire.args?.pokemon },
      { ...PokemonStories.Flying.args?.pokemon },
      { ...PokemonStories.Ghost.args?.pokemon },
      { ...PokemonStories.Ground.args?.pokemon },
      { ...PokemonStories.Ice.args?.pokemon },
      { ...PokemonStories.Normal.args?.pokemon },
      { ...PokemonStories.Poison.args?.pokemon },
      { ...PokemonStories.Psychic.args?.pokemon },
      { ...PokemonStories.Rock.args?.pokemon },
      { ...PokemonStories.Steel.args?.pokemon },
      { ...PokemonStories.Water.args?.pokemon },
    ] as Pokemon[],
  },
};

export const Loading: Story = {
  args: {
    pokemon: [],
    isLoading: true,
  },
};

export const Empty: Story = {
  args: {
    pokemon: [],
  },
};
