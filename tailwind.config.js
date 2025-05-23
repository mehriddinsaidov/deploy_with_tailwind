/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {},
    screens: {
      'md': { max: '510px' }
    }
  },
  plugins: [],
}