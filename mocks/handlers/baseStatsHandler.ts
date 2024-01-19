import { graphql } from "msw";

import baseStatsResponse from "../responses/baseStats/response.json";

export const baseStatsHandler = graphql.query(
  "baseStatsPokemon",
  (req, res, ctx) => {
    const { pokemonId } = req.variables;

    if (pokemonId <= 0) {
      return res(ctx.errors([{ message: "error" }]), ctx.delay(2000));
    }

    return res(ctx.data(baseStatsResponse), ctx.delay(2000));
  },
);
