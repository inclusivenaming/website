/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.md", "./content/**/*.html"],
  theme: {
    extend: {
      colors: {
        'purple': '#704BDB',
        'purple-dark': '#663ed8',
        'primary': '#5a0fc8',
      },
      fontFamily: {
        'sans': ['Cairo', 'sans-serif'],
        'heading': ['Lexend Deca', 'sans-serif'],
      },
      backgroundColor: {
        'primary-nav': '#5a0fc8',
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              color: '#333333',
              fontWeight: '700',
              fontFamily: 'Lexend Deca, sans-serif',
            },
            h2: {
              color: '#333333',
              fontWeight: '600',
              fontFamily: 'Lexend Deca, sans-serif',
            },
            h3: {
              color: '#333333',
              fontWeight: '600',
              fontFamily: 'Lexend Deca, sans-serif',
            },
            a: {
              color: '#704BDB',
              '&:hover': {
                color: '#663ed8',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 