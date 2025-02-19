/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: { max: '820px' },
      md: { min: '820px' },
      lg: { min: '1510px' },
    },
    extend: {
    },
  },
  plugins: [],
};
