import { Metadata } from "next";

export const COLORS = {
	PRIMARY: "#ada4a4",
	SECONDARY: "#162466",
	TEXT: "#24272b",
	HEADING: "#3c393c",
};
export const navigation: Navigation[] = [
	{
		label: "Home",
		value: "home",
		href: "/",
	},
	{
		label: "About",
		value: "about",
		href: "/about",
	},
	{
		label: "Events",
		value: "events",
		href: "/events",
	},
	{
		label: "Artists",
		value: "artists",
		href: "/artists",
	},
	{
		label: "Contact",
		value: "contact",
		href: "/contact",
	},
];

export const studioMeta: Metadata = {
	title: "Black Buddha Creative Agency - Content Studio",
	description:
		"The content studio for Black Buddha Creative Agency's official website.",
};

export const homeMeta: Metadata = {
	title: "Black Buddha Creative Agency | Home",
	description:
		"An agency fostering engagement, education and investment in creative arts",
	creator: "Gideon Ibemere, Jr.",
	openGraph: {
		title: "Black Buddha Creative Agency | Home",
		description:
			"An agency fostering engagement, education and investment in creative arts",
		url: "https://www.blackbuddhacreativeagency.com",
		type: "website",
		siteName: "Black Buddha Creative Agency",
		locale: "en_US",
		images: [
			{
				url: "https://www.blackbuddhacreativeagency.com/images/og-image.png",

				alt: "Black Buddha Creative Agency",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Black Buddha Creative Agency",
		description:
			"An agency fostering engagement, education and investment in creative arts",
		images: {
			url: "https://www.blackbuddhacreativeagency.com/images/og-image.png",
			alt: "Black Buddha Creative Agency",
		},
	},
};
