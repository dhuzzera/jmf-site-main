/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "Arial", "sans-serif"]
      },
      colors: {
        brand: {
          50: "#fdf6f4",
          100: "#fae9e4",
          200: "#f2d5cc",
          300: "#e8c4b8",
          400: "#d4a08a",
          500: "#c08068",
          600: "#a8644d",
          700: "#8c5040",
          800: "#744438",
          900: "#623b31"
        },
        gold: {
          50: "#fdfaf3",
          100: "#faf2de",
          200: "#f4e2b8",
          300: "#eccc88",
          400: "#e3b356",
          500: "#db9d33",
          600: "#c98428",
          700: "#a76623",
          800: "#875122",
          900: "#6f431f"
        }
      },
      keyframes: {
        pulse_soft: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.05)", opacity: "0.9" }
        }
      },
      animation: {
        "pulse-soft": "pulse_soft 2s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
