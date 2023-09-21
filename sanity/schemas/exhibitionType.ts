import { defineField, defineType } from "sanity";

export default defineType({
	name: "exhibitionType",
	title: "Exhibition Type",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
		}),
	],
});
