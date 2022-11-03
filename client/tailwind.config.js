/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				main: '#ef9273',
				secondary: '#fef9f8',
				third: '#0d0d0d',
				fourth: '#703f37',
				fifth: '#b6c199',
			},
		},
		fontFamily: {
			Poppins: ['Poppins, sans-serif'],
		},
		container: {
			center: true,
			padding: '1rem',
			screens: {
				lg: '1124px',
				xl: '1124px',
				'2xl': '1124px',
			},
		},
	},
	plugins: [],
};
