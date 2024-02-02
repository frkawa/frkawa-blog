import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-dark-blue': '#262732',
        'my-middle-blue': '#42434F',
        'my-emphasis-blue': '#DACFEF',
      },
    },
  },
  plugins: [],
};
export default config;
