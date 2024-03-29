import { graphql } from "msw";

import page1 from "../responses/listPokemon/list_pokemon_limit_20_offset_0.json";
import page2 from "../responses/listPokemon/list_pokemon_limit_20_offset_20.json";
import page3 from "../responses/listPokemon/list_pokemon_limit_20_offset_40.json";
import noResult from "../responses/listPokemon/no-result.json";

export const listPokemonHandler = graphql.query(
  "listPokemon",
  (req, res, ctx) => {
    const { offset, searchName } = req.variables;

    if (searchName.length > 15) {
      return res(ctx.data(noResult), ctx.delay(2000));
    }

    switch (offset) {
      case 0:
        return res(ctx.data(page1), ctx.delay(2000));
      case 20:
        return res(ctx.data(page2), ctx.delay(2000));
      case 40:
        return res(ctx.data(page3), ctx.delay(2000));
    }

    return res(ctx.data(noResult), ctx.delay(2000));
  },
);
