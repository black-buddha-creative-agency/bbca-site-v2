import { type Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

import { COLORS } from "./constants";

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				lato: "var(--font-lato)",
				"proza-libre": "var(--font-proza-libre)",
			},
			colors: {
				transparent: "transparent",
				current: "currentColor",
				black: colors.black,
				white: colors.white,
				warning: colors.yellow,
				info: colors.sky,
				danger: colors.red,
				success: colors.green,
				primary: "#ada4a4",
				secondary: "#162466",
				headingColor: "#3c393c",
				textColor: "#24272b",
			},
		},
	},
	plugins: [],
} satisfies Config;
