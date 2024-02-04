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
        'my-dark': '#212121',
        'my-dark-blue': '#233142',
        'my-emphasis-yellow': '#facf5a',
        'my-emphasis-rose': '#ff5959',
      },
    },
  },
  plugins: [],
};
export default config;
