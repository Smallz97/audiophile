import plugin from "tailwindcss/plugin";
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
        secondwhite: "var(--secondwhite)",
        herobackground: "var(--herobackground)"
      }
    }
  },
  plugins: [plugin(function ({ matchUtilities }) {
    matchUtilities(
      {
        'px-fluid': (value) => ({
          paddingLeft: value,
          paddingRight: value,
        }),
      },
      {
        values: {
          DEFAULT: '6.4vw',
          md: '5.08vw',
          lg: '11.46vw',
        },
      }
    );
    matchUtilities(
      {
        'pl-fluid': (value) => ({
          paddingLeft: value,
        }),
      },
      {
        values: {
          DEFAULT: '6.4vw',
          md: '5.08vw',
          lg: '11.46vw',
        },
      }
    );
    matchUtilities(
      {
        'pr-fluid': (value) => ({
          paddingRight: value,
        }),
      },
      {
        values: {
          DEFAULT: '6.4vw',
          md: '5.08vw',
          lg: '8.44vw',
        },
      }
    );
  },)],
} satisfies Config;
