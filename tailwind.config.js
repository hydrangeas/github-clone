/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        github: {
          green: {
            light: '#9be9a8',
            medium: '#40c463',
            dark: '#30a14e',
            darker: '#216e39',
          },
          gray: {
            light: '#ebedf0',
            dark: '#161b22',
          },
        },
      },
    },
  },
  plugins: [],
}