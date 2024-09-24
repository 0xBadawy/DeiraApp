/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8A2BE2",
        secondary: "#8A2BE2",
        dark: "#121212",
        light: "#f9f9f9",
        gray: {
          100: "#f5f5f5",
          200: "#eeeeee",
          300: "#e0e0e0",
          400: "#bdbdbd",
          500: "#9e9e9e",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
        },
      },
      screens: {
        screens: {
          sm: "576px", // Small devices (phones)
          md: "769px", // Medium devices (tablets)
          mm: "850px", // Medium to large devices
          lg: "992px", // Large devices (desktops)
          ll: "1100px", // Large to extra large devices
          xl: "1200px", // Extra large devices (large desktops)
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
