/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'dark-mode': '#1E1E1E',
        'white': '#FFFFFF',
        'darker': '#277CA5',
        'primary': '#64C2EC',
      }
    },
  },
  plugins: [],
}