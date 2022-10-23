/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'roboto': 'Roboto, sans-serif',
        'poppins': 'Poppins, sans-serif',
      },
    },
  },
  plugins: [],
}
