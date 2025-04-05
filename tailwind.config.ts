/** @type {import('tailwindcss').Config} */
// import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          100: "#FFF1E6",
          500: "#FF7000",
        },
        dark: {
          100: "#1C1F26",
          200: "#13161C",
          300: "#0F1117",
          400: "#0A0C10",
          500: "#101012",
        },
        light: {
          400: "#93C5FD",
          500: "#7B8EC8",
          700: "#DCE3F1",
          800: "#F4F6F8",
          850: "#FDFDFD",
          900: "#FFFFFF",
        },
        "accent-blue": "#1DA1F2",
        "accent-800": "#DDEBFF",
        "accent-900": "#C2DBFF",
        "blue-400": "#60A5FA",
        "blue-500": "#3B82F6",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        spaceGrotesk: ["var(--font-spaceGrotesk)"],
      },
      boxShadow: {
        "light-100":
          "0px 12px 20px 0px rgba(184, 184, 184, 0.03), 0px 6px 12px 0px rgba(184, 184, 184, 0.02), 0px 2px 4px 0px rgba(184, 184, 184, 0.03)",
        "light-200": "10px 10px 20px 0px rgba(218, 213, 213, 0.10)",
        "light-300": "-10px 10px 20px 0px rgba(218, 213, 213, 0.10)",
        "dark-100": "0px 2px 10px 0px rgba(46, 52, 56, 0.10)",
        "dark-200": "2px 0px 20px 0px rgba(39, 36, 36, 0.04)",
      },
      backgroundImage: {
        "auth-dark": "url('/assets/images/auth-dark.png')",
        "auth-light": "url('/assets/images/auth-light.png')",
        "primary-gradient":
          "linear-gradient(93deg, #0048FF -13.95%, #2F8EF1 42.79%, #45B3DB 99.54%)",
        "dark-gradient":
          "linear-gradient(267deg, rgba(23, 28, 35, 0.41) 10.27%, rgba(19, 22, 28, 0.70) 88.57%)",
        "light-gradient":
          "linear-gradient(132deg, rgba(247, 249, 255, 0.5) 0%, rgba(229, 237, 255, 0.25) 100%)",
      },
      screens: {
        xs: "420px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;
