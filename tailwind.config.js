/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#444",
        tcolor: "#fdfdfd",
        tcolor_secondary: "#58575c",
        bg: "#1a191e",
      },
    },
  },
  plugins: [],
};
