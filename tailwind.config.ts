import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // PolianSki palette
        "polian-red": "#FF585D",
        "polian-blue": "#3CCBDA",
        "polian-yellow": "#F9E267",
        "polian-dark-blue": "#006980",
        // To BE(e) Camp palette
        "tobe-yellow": "#FFE81F",
        "tobe-black": "#000000",
      },
      borderRadius: {
        "card-xl": "24px",
      },
      boxShadow: {
        "card-soft":
          "0 18px 45px rgba(0, 0, 0, 0.08), 0 6px 18px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
};

export default config;

