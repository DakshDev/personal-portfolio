/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./public/**/*.{js,css,html}",
    "*"],
  theme: {
    extend: {
      colors: {
        black_one_clr: "var(--black-one-clr)",
        black_two_clr: "var(--black-two-clr)",
        pri_clr: "var(--pri-clr)",
        text_one_clr: "var(--text-one-clr)",
        text_two_clr: "var(--text-two-clr)",
      }
    },
  },
  plugins: [],
}

