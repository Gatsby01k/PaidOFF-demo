import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#F6F000",
          black: "#050505",
          muted: "#111111",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
