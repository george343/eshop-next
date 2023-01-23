/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-800': '#310ead',
        'purple-900': '#110050',
        'background-col': '#f4f4f7'

      },
      fonts: {'font-nurito': 'font-family: "Nunito Sans", sans-serif'}

    },
  },
  plugins: [],
};
