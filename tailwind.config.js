import reactAriaComponents from "tailwindcss-react-aria-components";
import tailwindcssAnimate from "tailwindcss-animate";
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [
    reactAriaComponents,
    daisyui,
    tailwindcssAnimate,
    // https://github.com/tailwindlabs/tailwindcss-intellisense/issues/227#issuecomment-1139895799
    ({ addUtilities }) => {
      addUtilities({});
    },
  ],

  daisyui: {
    base: false, // applies background color and foreground color for root element by default
  },
};
