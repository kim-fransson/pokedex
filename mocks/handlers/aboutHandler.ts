import { graphql } from "msw";

import aboutResponse from "../responses/about/response.json";

export const aboutHandler = graphql.query("aboutPokemon", (req, res, ctx) => {
  const { pokemonId } = req.variables;

  if (pokemonId <= 0) {
    return res(ctx.errors([{ message: "error" }]), ctx.delay(2000));
  }

  return res(ctx.data(aboutResponse), ctx.delay(2000));
});
