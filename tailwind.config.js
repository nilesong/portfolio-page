/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pblack': '#0B0C10',
        'pdarkgray': '#1F2833',
        'pgray': '#C5C6C7',
        'pteal': '#66FCF1',
        'pdarkteal': '#45A29E',
      },
      fontFamily: {
        space: "Space Mono",
        chivo: "Chivo"
      },
      gridTemplateRows: {
        'project': '1fr 0.1fr 0.5fr'
      }
    },
  },
  plugins: [],
}