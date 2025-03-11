import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Ensures dark mode is activated via class
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#376B5B",
        primary1: "#046C4E",
        secondary: "#F48134",
        "primary-50": "#EBF2EF",
      },
      screens: {
        xs: "480px", // Custom breakpoint for extra small devices
        sm: "640px", // Small devices
        md: "768px", // Medium devices
        lg: "1024px", // Large devices
        xl: "1280px", // Extra large devices
        "2xl": "1536px", // Extra extra large devices
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
        notoSerifDisplay: ["var(--font-noto-serif-display)", "serif"],
        dashiell: ["Dashiell Fine", "serif"], // Add the custom font
      },
    },
  },
  plugins: [],
} satisfies Config;
