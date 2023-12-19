/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  prefix: 'bb-',
  theme: {
    fontSize: {
      xs: [
        '0.625rem',
        {
          lineHeight: '1.1',
          letterSpacing: '-0.02em',
        },
      ],
      sm: [
        '0.875rem',
        {
          lineHeight: '1.1',
          letterSpacing: '-0.02em',
        },
      ],

      base: [
        '1rem',
        {
          lineHeight: '1.1',
          letterSpacing: '-0.02em',
        },
      ],
      md: [
        '1.375rem',
        {
          lineHeight: '1.1',
          letterSpacing: '-0.02em',
        },
      ],
      lg: [
        '2rem',
        {
          lineHeight: '1.1',
          letterSpacing: '-0.02em',
        },
      ],
      xl: [
        '4rem',
        {
          lineHeight: '1',
          letterSpacing: '-0.02em',
        },
      ],
      '2xl': [
        '7rem',
        {
          lineHeight: '0.9',
          letterSpacing: '-0.02em',
        },
      ],
      '3xl': [
        '10.25rem',
        {
          lineHeight: '0.67',
          letterSpacing: '-0.02em',
        },
      ],
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      black: '900',
    },
    fontFamily: {
      sans: ['Cera Pro', 'system-ui', '-apple-system', 'sans-serif', 'arial'],
    },
    spacing: {
      px: '1px',
      0: '0px',
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '30px',
      7: '35px',
      8: '40px',
      9: '45px',
      10: '50px',
      11: '55px',
      12: '60px',
      13: '65px',
      14: '70px',
      15: '75px',
      16: '80px',
      18: '90px',
      19: '95px',
      20: '100px',
      24: '120px',
      28: '140px',
      30: '150px',
      32: '160px',
      34: '170px',
      36: '180px',
      38: '190px',
      40: '200px',
      44: '220px',
      48: '240px',
      52: '260px',
      56: '280px',
      60: '300px',
      64: '320px',
      68: '340px',
      72: '360px',
      80: '400px',
      96: '440px',
    },
    extend: {
      colors: {
        primary: 'rgb(var(--bb-color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--bb-color-secondary) / <alpha-value>)',
        background: 'rgb(var(--bb-color-background) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
