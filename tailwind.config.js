/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'dark-mode': '#1E1E1E',
        'black': '#000000',
        'white': '#FFFFFF',
        'grey': '#A9A9A9',
        'darker': '#277CA5',
        'primary': '#64C2EC',
      }
    },
  },
  plugins: [],
}