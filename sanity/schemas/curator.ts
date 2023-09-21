import { defineField, defineType } from "sanity";

export default defineType({
	name: "curator",
	title: "Curator",
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
			name: "bio",
			title: "Bio",
			type: "blockContent",
		}),
		defineField({
			name: "website",
			title: "Website",
			type: "url",
		}),
		defineField({
			name: "instagram",
			title: "Instagram",
			type: "url",
		}),
		defineField({
			name: "twitter",
			title: "Twitter",
			type: "url",
		}),
	],
});
