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
        darkorange: "var(--darkorange)",
        justblack: "var(--justblack)",
        firstwhite: "var(--firstwhite)",
        lightorange: "var(--lightorange)",
        secondwhite: "var(--secondwhite)"
      }
    }
  },
  plugins: [],
} satisfies Config;
