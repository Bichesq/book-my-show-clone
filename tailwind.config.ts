import type { Config } from "tailwindcss"

export default {
  darkMode: "class", // enable dark mode toggle with `class="dark"`
  theme: {
    extend: {
      colors: {
        background: {
          light: "#ffffff",
          dark: "#1a1a1a",
        },
        text: {
          light: "#111111",
          dark: "#f5f5f5",
        },
        brand: {
          DEFAULT: "#e50914", // Netflix/BookMyShow red
          dark: "#b20710",
        },
      },
    },
  },
  plugins: [],
} satisfies Config
