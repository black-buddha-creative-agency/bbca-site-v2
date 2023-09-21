import { defineField, defineType } from "sanity";

export default defineType({
	name: "contact",
	type: "object",
	title: "Contact",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "blockContent",
		}),
	],
});
