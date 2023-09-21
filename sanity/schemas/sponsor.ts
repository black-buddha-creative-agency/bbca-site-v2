// name
import { defineField, defineType } from "sanity";

export default defineType({
	name: "sponsor",
	title: "Sponsor",
	type: "document",
	fields: [
		defineField({
			name: "name",
			title: "Name",
			type: "string",
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "name",
				maxLength: 96,
			},
		}),
		defineField({
			name: "website",
			title: "Website",
			type: "url",
		}),
		defineField({
			name: "logo",
			title: "Logo",
			type: "image",
		}),
	],
});
