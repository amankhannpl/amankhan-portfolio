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
        glow: "0 0 80px rgba(83, 224, 255, 0.18)",
        "glow-acid": "0 0 80px rgba(213, 255, 95, 0.18)",
        "glow-coral": "0 0 80px rgba(255, 107, 87, 0.18)"
      },
      animation: {
        "fade-in": "fadeIn 0.9s ease-out forwards",
        "slide-up": "slideUp 0.75s ease-out forwards",
        "scale-in": "scaleIn 0.6s ease-out forwards",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "float": "float 6s ease-in-out infinite"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        }
      }
    }
  },
  plugins: []
};

export default config;