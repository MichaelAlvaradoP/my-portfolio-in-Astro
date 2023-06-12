/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
			  primary: {
				DEFAULT: '#198cff',
			  },
			  secondary: {
				DEFAULT: '#86D6FE',
			  },
			  accent:{
				DEFAULT: '#1370cc'
			  }
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
