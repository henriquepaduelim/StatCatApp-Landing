
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
        navy: "#0B1F3A",
        teal: "#12B8A6",
        "warm-gray-50": "#F9FAFB",
        "warm-gray-100": "#F3F4F6",
        "warm-gray-200": "#E5E7EB",
        "warm-gray-300": "#D1D5DB",
        "warm-gray-400": "#9CA3AF",
        "warm-gray-500": "#6B7280",
        "warm-gray-600": "#4B5563",
        "warm-gray-700": "#374151",
        "warm-gray-800": "#1F2937",
        "warm-gray-900": "#111827",
      },
      fontFamily: {
        sans: ["Sora", "sans-serif"],
        grotesk: ["Space Grotesk", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "mesh-gradient": "radial-gradient(ellipse at 50% 50%, #12B8A61A 0%, #0B1F3A 100%)",
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(12px)',
      },
    },
  },
  plugins: [],
};
export default config;
