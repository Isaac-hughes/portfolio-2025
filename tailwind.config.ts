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
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: {
          primary: "var(--accent-primary)",
          secondary: "var(--accent-secondary)",
          muted: "var(--accent-muted)",
        },
      },
      animation: {
        "gradient-mobile": "gradientMove 15s ease infinite",
        fadeDown: "fadeDown 0.5s ease-out forwards",
        fadeUp: "fadeUp 0.5s ease-out forwards",
        flipChar: "flipChar 0.1s linear infinite",
      },
      keyframes: {
        gradientMove: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        fadeDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        flipChar: {
          "0%": {
            transform: "rotateX(0deg)",
            backgroundColor: "rgba(0,0,0,0.6)",
          },
          "50%": { backgroundColor: "rgba(0,0,0,0.8)" },
          "100%": {
            transform: "rotateX(360deg)",
            backgroundColor: "rgba(0,0,0,0.6)",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
