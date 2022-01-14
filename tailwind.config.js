module.exports = {
  content: [
    "./src/pages/**/*.js",
    "./src/components/**/*.js",
    "./src/styles/**/*.css",
  ],
  theme: {
    extend: {
      width: {
          '3/2': '150%',
          '2/1': '200%',
          '4/2': '200%',
          'double': '200%',
          '5/2': '250%',
      },
    },
    screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
    },
    container: {
        padding: {
            DEFAULT: '1rem',
            sm: '2rem',
            lg: '4rem',
            xl: '5rem',
            '2xl': '6rem',
        },
    },
  },
  plugins: [],
}
