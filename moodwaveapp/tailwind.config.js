/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', 
  'components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        pink: '#ff3f78',
        gray: '#2d2d2d',
        pinkHover: '#ff3f7833',
        background: '#2d2d2d',
        foreground: 'hsl(var(--foreground))',
        btn: {
          background: 'hsl(var(--btn-background))',
          'background-hover': 'hsl(var(--btn-background-hover))',
        },
      },
    },
  },
  plugins: [],
}
