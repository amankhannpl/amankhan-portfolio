import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Segoe UI", "Helvetica Neue", "Arial", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Segoe UI", "Helvetica Neue", "Arial", "system-ui", "sans-serif"]
      },
      colors: {
        ink: "#050505",
        pearl: "#f5f1e8",
        acid: "#d5ff5f",
        signal: "#53e0ff",
        coral: "#ff6b57",
        violet: "#a78bfa"
      },
      boxShadow: {
        glow: "0 0 80px rgba(83, 224, 255, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;