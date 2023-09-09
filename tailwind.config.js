/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      colors: {
        amazon_blue: "#22577A",
        amazon_light: "#38A3A5",
        amazon_yellow: "#80ED99",
        lightText: "#ccc",
        grey: "#C7F9CC",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
