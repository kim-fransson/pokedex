import reactAriaComponents from "tailwindcss-react-aria-components";
import tailwindcssAnimate from "tailwindcss-animate";
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#FFCE31",
        "dark-gray": "#212121",
        blue: "#C9D2EA",
        "dark-blue": "#416EDF",
      },
      opacity: {
        8: ".08",
        12: ".12",
        16: ".16",
        24: ".24",
        87: ".87",
      },
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
    themes: ["nord"],
  },
};
