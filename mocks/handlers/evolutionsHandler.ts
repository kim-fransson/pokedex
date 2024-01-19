import { graphql } from "msw";

import levelEvolutions from "../responses/evolutions/level.json";
import stonesEvolutions from "../responses/evolutions/stones.json";
import otherEvolutions from "../responses/evolutions/other.json";
import tradeEvolutions from "../responses/evolutions/trade.json";
import useItemEvolutions from "../responses/evolutions/use-item.json";
import noEvolutions from "../responses/evolutions/no-evolution.json";

export const evolutionsHandler = graphql.query(
  "evolutions",
  (req, res, ctx) => {
    const { pokemonId } = req.variables;

    if (pokemonId === 1) {
      return res(ctx.data(levelEvolutions), ctx.delay(2000));
    }

    if (pokemonId === 133) {
      return res(ctx.data(stonesEvolutions), ctx.delay(2000));
    }

    if (pokemonId === 921) {
      return res(ctx.data(otherEvolutions), ctx.delay(2000));
    }

    if (pokemonId === 92) {
      return res(ctx.data(tradeEvolutions), ctx.delay(2000));
    }

    if (pokemonId === 935) {
      return res(ctx.data(useItemEvolutions), ctx.delay(2000));
    }

    if (pokemonId === 718) {
      return res(ctx.data(noEvolutions), ctx.delay(2000));
    }

    return res(ctx.errors([{ message: "error" }]), ctx.delay(2000));
  },
);
