module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      backgroundColor: theme =>({
        'primary':'#5F75AC',
        'secondary':'#FFA4AE',
        'deep-secondary':'#FF6879',
      }),
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }