/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
			  primary: {
				DEFAULT: '#1F266B', // A
				light: '#9391F2', // B
			  },
			  secondary: {
				DEFAULT: '#4947F0', // C
				dark: '#444370', // D
			  },
			  accent: {
				DEFAULT: '#3B39BD', // E
			  },
			},
		  },
	},
	corePlugins: {
        fontSize: false,
        // ...
    },
	plugins: [
		require('tailwindcss-fluid-type'),
	],
}
