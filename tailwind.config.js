module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        1280: "1280px",
        1024: "1024px",
        950: "950px",
        700: "700px",
        500: "500px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
