module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary':'#eebece',
      'secondary':'#0b24fb'
    }),
    textColor: theme => ({
      'secondary':'#0b24fb',
      'primary' : '#ffffff'
    }),
    boxShadow: {
      'primary': '0 20px 30px 0 rgba(249, 131, 171, 0.5)'
    },
    extend: {
      fontFamily: {
        'primary' : ['Work Sans']
      },
      height: {
        section: '41rem',
        group: '82rem'
      },
      width: {
        '20.5' : '5.5rem'
      },
      borderRadius: {
        '4xl': '1.8rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
