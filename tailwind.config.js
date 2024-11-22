/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customBg1:'#171717',
        customBg2:'#050505',
        customBg_active:"#404040",
      },
    },
  },
  plugins: [],
}