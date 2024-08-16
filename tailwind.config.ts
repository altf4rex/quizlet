module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: '#0b0b2d', 
          text: '#E1E3E6', 
          border: '#363738',
        },
        secondary: {
          bg: '#232324', 
          text: '#B0B1B6',
        },
        accent: {
          bg: '#0047BB',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'h1': ['96px', '112px'],
        'h2': ['60px', '72px'],
        'h3': ['48px', '56px'],
        'h4': ['34px', '36px'],
        'h5': ['24px', '32px'],
        'h6': ['20px', '24px'],
        'body1': ['16px', '24px'],
        'body2': ['14px', '20px'],
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
      },
      container: {
        center: true,
        screens: {
          sm: '100%',
          md: '100%',
          lg: '100%',
          xl: '1280px',
          '2xl': '1494px',
        },
      },
    },
  },
  plugins: [],
}
