/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    fontSize: {
      sm: '0.8rem',
      md: '0.9rem',
      base: '1rem',
      lg: '1.15rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '5.052rem',
      '7xl': '7.052rem',
      '8xl': '9.052rem',
    },
    colors: {
      transparent: 'transparent',
      'main': {
        //If you don't explicitly declare a color for a property, Tailwind will use the default color for that property. 
        DEFAULT:'#3A506B',
        light: '#668EBE',
    },
      'blk': '#1C1C1C',
      'turc': '#89DFF3',
      'turcdiv': '#B7E6F9',
      'pink': '#D2295A',
      'alt-pink': '#DF7090',
      'white': '#FFFFFF',
      'alt-white': '#FEFEFE',
      'alt-blue': '#292562',
      'blue': '#242244',
      'blue-bio': '#272456',
      'gray': '#242238',
      'alt-gray': '#242244',
      'icon-gray': '#2A324B',
      'blue-connect': '#1D1A3F',
      'active': '#ACACE6',
      'disabled': '#46405f',
    },
    fontFamily: {
      main: ['Metrophobic', 'sans-serif'],
      sub: ['Red Hat Mono', 'monospace'],
      subAlt: ['Red Hat Text', 'sans-serif'],
      title: ['Zen Dots', 'cursive'],
    },
    
  },
 
  plugins: [
  ],
},
}


