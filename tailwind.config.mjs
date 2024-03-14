/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  theme: {
    extend: {
      colors: {
        black: "#0E1216",
        gray: colors.zinc,
      },

      fontFamily: {
        poppis: ["Poppins"],
      },
    },
  },

  plugins: [require("@tailwindcss/typography")],
};
