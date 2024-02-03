
/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      Montserrat: 'Montserrat',
      serif: 'serif',
    },
    colors: {
      "AzulEscuro": "#092042",
      "branco": "#d1f7ff",
      "az": "#1afe49",
      "ab": "#d1f7ff",
      "ad": "#120458",
      "azul-celeste": "#080F26",
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/Cyberpunk-City.jpg')",
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwindcss-animated'),
  ],
};