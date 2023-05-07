const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'montserrat': 'Montserrat',
        poppins: ['var(--font-poppins)', ...fontFamily.sans],
      },
      colors: {
        "primary": '#024554',
        "primary1": "#ACC2C7",
        "secondary": "#030303"
      },
      width: {
        'piw': '62rem',
        "boxw1": '5rem'
      }
    },
  },
  plugins: [],
}

