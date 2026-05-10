import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./**/*.{js,ts,jsx,tsx,mdx}", // This looks in EVERY folder
    "!./node_modules/**/*",       // This tells it to ignore the heavy system files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;