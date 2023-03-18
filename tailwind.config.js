module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./pages/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				'icon-ball': "url('/icon_ball.png')",
				'icon-next': "url('/icon_next.png')",
			},
			text: {
				set: "font-size: .75rem, line-height: 1rem",
			},
			colors: {
			},
			boxShadow: {
				shadow10: "rgb(0 0 0 / 10%) 2px 2px 8px 0px",
			},
		},
	},
	plugins: [],
};