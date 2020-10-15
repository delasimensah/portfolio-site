module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#2ecc71",
        secondary: "#27ae60",
        tertiary: "#2c3e50",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
