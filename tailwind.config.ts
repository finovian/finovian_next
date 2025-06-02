import containerQueries from "@tailwindcss/container-queries";

const config = {
  theme: {
    extend: {
      fontFamily: {
        newsreader: ["Newsreader", "sans-serif"],
      },
      screens: {
        xs: "420px",
        tab: "768px",
        "3xl": "1600px",
        ultra: "1920px",
      },

      animation: {
        "fade-in": "fadeIn 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(-0.5rem)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./imports/**/*.{ts,tsx}",
  ],
  plugins: [containerQueries],
};

export default config;
