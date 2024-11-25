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
        background: "#F5F7F8",
        foreground: "var(--foreground)",
        primary: "#2D71F8",
        secondary:"#1C8370",
        third:"#FC4A4A"
      },
    },
  },
  plugins: [],
} satisfies Config;
