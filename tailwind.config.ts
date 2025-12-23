import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        christmas: {
          red: "#C41E3A",
          green: "#228B22",
          gold: "#FFD700",
          cream: "#FFFDD0",
          pine: "#01796F",
          berry: "#8B0000",
        },
      },
      fontFamily: {
        festive: ["'Mountains of Christmas'", "cursive"],
        cozy: ["'Quicksand'", "sans-serif"],
      },
      animation: {
        "snow-fall": "snowfall 10s linear infinite",
        twinkle: "twinkle 2s ease-in-out infinite",
        "bounce-slow": "bounce 3s infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        snowfall: {
          "0%": { transform: "translateY(-10vh) rotate(0deg)", opacity: "1" },
          "100%": {
            transform: "translateY(100vh) rotate(360deg)",
            opacity: "0.3",
          },
        },
        twinkle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
