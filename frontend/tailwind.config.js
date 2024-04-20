/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
	content: ['./src/**/*.{html,js,jsx}'],

	theme: {
		// colors: {
		// 	// DEFAULT: '#646cff',
		// 	black: colors.black,
		// },
		// screens: {
		// 	xsmax: { max: '480px' },
		// 	smx: { max: '640px' },
		// 	mdx: { max: '768px' },
		// 	lgx: { max: '1024px' },s
		// 	xlmax: { max: '1280px' },
		// },
		extend: {
			transformOrigin: {
				transform50: 'translate(-50%, -50%)',
			},
			fontFamily: {
				acme: ['Acme', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
