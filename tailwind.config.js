/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-sans)", "system-ui", "sans-serif"],
    },
    extend: {
      colors: {
        surface: {
          DEFAULT: "#0f1419",
          raised: "#161b22",
          overlay: "#1c2128",
          border: "#30363d",
        },
        accent: {
          DEFAULT: "#3b82f6",
          hover: "#2563eb",
          muted: "#1e3a5f",
        },
      },
      boxShadow: {
        card: "0 1px 2px rgba(0,0,0,0.24), 0 0 0 1px rgba(255,255,255,0.04)",
        "card-hover":
          "0 8px 24px rgba(0,0,0,0.32), 0 0 0 1px rgba(59,130,246,0.2)",
        glow: "0 0 40px rgba(59,130,246,0.12)",
      },
      animation: {
        "fade-in": "fadeIn 0.35s ease-out",
        "slide-up": "slideUp 0.4s ease-out",
        shimmer: "shimmer 1.5s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
