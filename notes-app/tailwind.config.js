/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensure it covers all files using Tailwind
  ],
  theme: {
    extend: {
      colors: {
        primary: "#85b061", // Bright Greenish primary color
        secondary: "#ECF3E7", // Light greyish color       
        tertiary: "#5A6859", // Dark greenish color
        accent: "#f9a51b", // Warm yellow for highlights
        error: "#d9534f", // Red for errors
        success: "#3dbf76", // Green for success messages
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Domine', 'serif'],
      },
    },
  },
  plugins: [],
}
