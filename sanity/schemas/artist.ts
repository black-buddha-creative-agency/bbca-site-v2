import { defineField, defineType } from "sanity";

export default defineType({
	name: "artist",
	title: "Artist",
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
			name: "link",
			title: "Link",
			type: "url",
		}),
	],
	preview: {
		select: {
			title: "name",
		},
	},
});
