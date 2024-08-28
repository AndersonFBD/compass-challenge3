import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      kaushan: ["kaushan script"],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
