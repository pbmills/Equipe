module.exports = {
  mode: 'jit',
  purge: [
    './templates/**/*.{twig,html}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans :[
        "tobias",
      ],
    },
    fontSize: {
      base: [
        "15px",
        {
          letterSpacing: "0.15px",
          lineHeight: "18px",
        },
      ],
      "5xl": [
        "70px",
        {
          letterSpacing: "0.4px",
        },
      ],
    },
    colors:{
      burgundy: '#614546',
      cream: '#FFECD6',
      coral: '#FFA998',
      beige: '#EDE7E0'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
