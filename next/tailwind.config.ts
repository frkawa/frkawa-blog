import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-blue': '#262732',
        'bg-card': '#42434F',
        'emphasis-light': '#DACFEF',
        'text-white': '#FFFFFF',
        'text-black': '#000000',
      },
    },
  },
  plugins: [],
};
export default config;
