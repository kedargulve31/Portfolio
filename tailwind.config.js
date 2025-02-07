/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: '#854CE6',
        secondary: '#6C5CE7', 
        text_primary: '#333333', 
        text_secondary: '#6E6E6E',
      },
    },
  },
  plugins: [],
}

