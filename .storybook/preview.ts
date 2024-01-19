import type { Preview } from "@storybook/react";
import { initialize, mswLoader } from "msw-storybook-addon";
import "../src/index.css";
import {
  reactRouterParameters,
  withRouter,
} from "storybook-addon-react-router-v6";
import {
  aboutHandler,
  listPokemonHandler,
  baseStatsHandler,
  evolutionsHandler,
} from "../mocks/handlers";

// Initialize MSW
initialize({
  onUnhandledRequest: "bypass",
});

const preview: Preview = {
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({
      routing: { path: "/" },
    }),
    msw: {
      handlers: [
        listPokemonHandler,
        aboutHandler,
        baseStatsHandler,
        evolutionsHandler,
      ],
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  loaders: [mswLoader],
};

export default preview;
