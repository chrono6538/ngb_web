import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F2933",
        secondary: "#4B5563",
        accent: "#0EA5E9",
        background: "#FFFFFF",
        text: "#111827"
      },
      borderRadius: {
        lg: "0.5rem"
      }
    }
  },
  plugins: []
};

export default config;
