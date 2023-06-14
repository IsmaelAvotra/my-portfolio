/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      tablet: '768px',
      desktop: '1248px',
    },
    colors: {
      yellow: '#FFC857',
      bgcolor: '#050F1D',
      textcolor: '#BFC8E7',
      titlecolor: '#EBEBD3',
      red: '#FF0000',
    },
    fontSize: {
      xs: ['14px', { lineHeight: '20px', letterSpacing: '-0.03em' }],
      sm: ['16px', { lineHeight: '24px', letterSpacing: '-0.03em' }],
      lg: ['18px', { lineHeight: '28px', letterSpacing: '-0.03em' }],
      xl: ['24px', { lineHeight: '32px', letterSpacing: '-0.03em' }],
      sxl: ['28px', { lineHeight: '36px', letterSpacing: '-0.03em' }],
      mxl: ['36px', { lineHeight: '40px', letterSpacing: '-0.03em' }],
    },
    extend: {},
  },
  plugins: [],
}
