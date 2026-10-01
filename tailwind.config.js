/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        z: {
          bg: '#0c0d10',
          elevated: '#14161c',
          band: '#12141a',
          card: '#1a1d26',
          hover: '#232734',
          ink: '#f7f4ee',
          accent: '#f99e1a',
          soft: '#ffd08a',
          deep: '#c56a00',
          success: '#7dcea0',
        },
      },
      fontFamily: {
        geist: ['Geist', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        silkscreen: ['Silkscreen', 'cursive'],
      },
    },
  },
  plugins: [],
}
