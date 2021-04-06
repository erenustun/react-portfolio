module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
	container: {
		center: true,
	},
    extend: {
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '108': '27rem',
        '120': '30rem',
        '132': '33rem',
        '144': '36rem',
        '156': '39rem',
        '168': '42rem',
        '180': '45rem',
        '192': '48rem',
        '204': '51rem',
        '216': '54rem',
        '228': '57rem',
        '240': '60rem',
        '252': '63rem',
        '264': '66rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
