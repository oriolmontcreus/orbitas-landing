/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  animation: {
			"shine": "shine 2s linear infinite",
			"ripple": "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite"
		  },
		  keyframes: {
			"shine": {
			  "from": { "backgroundPosition": "0 0" },
			  "to": { "backgroundPosition": "-200% 0" }
			},
			"ripple": {
			  "0%, 100%": {
				transform: "translate(-50%, -50%) scale(1)",
			  },
			  "50%": {
				transform: "translate(-50%, -50%) scale(0.9)",
			  },
			}
		  }
		},
	  },
	plugins: [],
}