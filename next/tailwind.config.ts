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
        'my-dark': '#212121',
        'my-dark-blue': '#32383e',
        'my-emphasis-yellow': '#facf5a',
        'my-emphasis-rose': '#ff5959',
      },
    },
    fontFamily: {
      body: [
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
