/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customPink: "rgb(255, 249, 249)",
        customFontColor: "rgb(68, 68, 68)",
      },
    },
  },
  plugins: [],
};
