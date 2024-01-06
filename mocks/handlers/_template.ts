import { rest } from "msw";

import template from "../responses/template.json";

export const genreMediaListHandler = rest.get(
  "REPLACE_ME",
  (_req, res, ctx) => {
    return res(ctx.json(template));
  },
);
