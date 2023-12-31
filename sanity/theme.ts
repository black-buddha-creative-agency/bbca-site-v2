import { buildLegacyTheme } from "sanity";

export const colors = {
	"--my-white": "#fafafa",
	"--my-black": "#24272b",

	"--bbca-brand": "#ada4a4",

	"--my-red": "#db4437",
	"--my-yellow": "#f4b400",
	"--my-green": "#0f9d58",
};

export const myTheme = buildLegacyTheme({
	// Base theme colors
	"--black": colors["--my-black"],
	"--white": colors["--my-white"],

	"--gray": "#666",
	"--gray-base": "#666",

	"--component-bg": colors["--my-white"],
	"--component-text-color": colors["--my-black"],

	// Brand
	"--brand-primary": colors["--bbca-brand"],

	// Default button
	"--default-button-color": "#666",
	"--default-button-primary-color": colors["--bbca-brand"],
	"--default-button-success-color": colors["--my-green"],
	"--default-button-warning-color": colors["--my-yellow"],
	"--default-button-danger-color": colors["--my-red"],

	// State
	"--state-info-color": colors["--bbca-brand"],
	"--state-success-color": colors["--my-green"],
	"--state-warning-color": colors["--my-yellow"],
	"--state-danger-color": colors["--my-red"],

	// Navbar
	"--main-navigation-color": colors["--my-white"],
	"--main-navigation-color--inverted": colors["--my-black"],

	"--focus-color": colors["--bbca-brand"],
});
