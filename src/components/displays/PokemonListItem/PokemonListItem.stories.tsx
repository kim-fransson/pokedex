import type { Meta, StoryObj } from "@storybook/react";
import { PokemonListItem } from "./PokemonListItem";

const meta: Meta<typeof PokemonListItem> = {
  component: PokemonListItem,
  parameters: {
    layout: "centered",
  },
  args: {},
};
export default meta;

type Story = StoryObj<typeof PokemonListItem>;

export const Loading: Story = {
  args: {
    pokemon: undefined,
    isLoading: true,
  },
};

export const Grass: Story = {
  args: {
    pokemon: {
      id: 1,
      name: "bulbasaur",
      types: ["grass", "poison"],
    },
  },
};

export const Fire: Story = {
  args: {
    pokemon: {
      id: 4,
      name: "charmander",
      types: ["fire"],
    },
  },
};

export const Bug: Story = {
  args: {
    pokemon: {
      id: 10,
      name: "caterpie",
      types: ["bug"],
    },
  },
};

export const Water: Story = {
  args: {
    pokemon: {
      id: 7,
      name: "squirtle",
      types: ["water"],
    },
  },
};

export const Normal: Story = {
  args: {
    pokemon: {
      id: 16,
      name: "pidgey",
      types: ["normal", "flying"],
    },
  },
};

export const Rock: Story = {
  args: {
    pokemon: {
      id: 74,
      name: "geodude",
      types: ["rock", "ground"],
    },
  },
};

export const Fighting: Story = {
  args: {
    pokemon: {
      id: 66,
      name: "machop",
      types: ["fighting"],
    },
  },
};

export const Ghost: Story = {
  args: {
    pokemon: {
      id: 92,
      name: "gastly",
      types: ["ghost", "poison"],
    },
  },
};

export const Psychic: Story = {
  args: {
    pokemon: {
      id: 63,
      name: "abra",
      types: ["psychic"],
    },
  },
};

export const Ice: Story = {
  args: {
    pokemon: {
      id: 124,
      name: "jynx",
      types: ["ice", "psychic"],
    },
  },
};

export const Dragon: Story = {
  args: {
    pokemon: {
      id: 147,
      name: "dratini",
      types: ["dragon"],
    },
  },
};

export const Electric: Story = {
  args: {
    pokemon: {
      id: 25,
      name: "pikachu",
      types: ["electric"],
    },
  },
};

export const Ground: Story = {
  args: {
    pokemon: {
      id: 27,
      name: "sandshrew",
      types: ["ground"],
    },
  },
};

export const Poison: Story = {
  args: {
    pokemon: {
      id: 29,
      name: "nidoran",
      types: ["poison"],
    },
  },
};

export const Flying: Story = {
  args: {
    pokemon: {
      id: 821,
      name: "rookidee",
      types: ["flying"],
    },
  },
};

export const Dark: Story = {
  args: {
    pokemon: {
      id: 197,
      name: "umbreon",
      types: ["dark"],
    },
  },
};

export const Fairy: Story = {
  args: {
    pokemon: {
      id: 35,
      name: "clefairy",
      types: ["fairy"],
    },
  },
};

export const Steel: Story = {
  args: {
    pokemon: {
      id: 306,
      name: "aggron",
      types: ["steel", "rock"],
    },
  },
};
