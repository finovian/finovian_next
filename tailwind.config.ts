const config = {
  theme: {
    extend: {
      fontFamily: {
        newsreader: ["Newsreader", "sans-serif"],
      },
      screens: {
        xs: "420px",
        tab: "768px",
        "3xl": "1600px", // Extra large desktop
        ultra: "1920px", // Ultra wide
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
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./imports/**/*.{ts,tsx}",
  ],
  plugins: [],
};

export default config;
