/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1f2533",
        muted: "#5f6a7a",
        accent: "#1f7a8c",
        accent2: "#e2a053"
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        body: ["Manrope", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 60px rgba(26, 36, 52, 0.12)"
      },
      backgroundImage: {
        "hero-radial": "radial-gradient(circle at 10% 10%, #fff6e9 0%, #f7f4ef 45%, #f1f6f8 100%)"
      }
    }
  },
  plugins: [require("@tailwindcss/forms")]
};
