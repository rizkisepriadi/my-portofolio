import daisyui from "daisyui"

import themes from "daisyui/src/theming/themes";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...themes.light,
          primary: "#FFBB00",
          secondary: "#E5E7EB",
          accent: "#111827",
          neutral: "#4B5563",
          "base-100": "#FFFFFF",
          "base-200": "#FFFCF8",
        },
        dark: {
          ...themes.dark,
          primary: "#FFBB00",
          secondary: "#374151",
          accent: "#F9FAFB",
          neutral: "#D1D5DB",
          "base-100": "#030712",
          "base-200": "#111827",
        },
      },
    ],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
}
