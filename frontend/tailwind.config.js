/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{ 
        "primary": "#D17639",
        "primary-ligth": "#F3C994",
        "primary-dark": "#CD6423",
        "secondary": "#0B2B44",
        "secondary-ligth": "#3C6474",
        "secondary-dark": "#0C0C24", 
        "dark":"#262727",
        "ligth": "#EDE1C3",  
      }
    },
  },
  plugins: [],
}

