import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        roadRage: ["'Road Rage'", "cursive"],
        jejuMyeongjo: ["'Jeju Myeongjo'", "serif"],
        roboto: ["'Roboto'", "sans-serif"],
        alatsi: ["'Alatsi'", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
