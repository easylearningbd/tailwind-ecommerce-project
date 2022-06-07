module.exports = {
  content: ["./*html"],
  theme: {
    screens : {
      sm : '576px',
      md : '768px',
      lg : '992px',
      xl : '1200px',

    },
    container : {
      center : true,
      padding : '1rem'  // 16px
    },
    extend: {
      fontFamily : {
        'poppins' : ['Poppins'],
        'roboto' : ['Roboto'],
      }
    },
  },
  plugins: [],
}
