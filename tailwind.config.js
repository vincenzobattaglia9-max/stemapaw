/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        monito: {
          blue: '#003459',       // Deep Dark Navy (Primary)
          'blue-dark': '#002A48',// Deeper Blue for hover/active
          'blue-light': '#00528C',
          yellow: '#FCEED5',     // Soft Warm Papaya Whip / Cream (Secondary)
          'yellow-hover': '#FFE5B4',
          'yellow-dark': '#F7DBA7',
          orange: '#FFB703',     // Golden Amber Accent
          'orange-dark': '#EDA415',
          neutral: '#667479',    // Body text grey
          dark: '#00171F',       // Heading dark
          cream: '#FDFBF8',      // Soft page background
          card: '#FFFFFF',       // Card background
        },
      },
      borderRadius: {
        'monito': '20px',
        'monito-lg': '28px',
        'monito-xl': '36px',
      },
      boxShadow: {
        'monito': '0px 4px 28px -2px rgba(0, 52, 89, 0.08)',
        'monito-hover': '0px 12px 36px -4px rgba(0, 52, 89, 0.16)',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Gilroy', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
