import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'my-dark': '#161e26',
        'my-card-blue': '#252c32',
        'my-card-blue-hover': '#2f373d',
        'my-light-blue': '#b9d8ef',
        'my-emphasis-sky': '#00ffee',
      },
    },
    fontFamily: {
      body: [
        'Zen Maru Gothic',
        'Helvetica Neue',
        '游ゴシック',
        'Yu Gothic',
        '游ゴシック体',
        'YuGothic',
        'ヒラギノ角ゴ Pro W3',
        'Hiragino Kaku Gothic Pro',
        'sans-serif',
      ],
      josefinSans: ['Josefin Sans'],
    },
  },
  plugins: [],
}
export default config
