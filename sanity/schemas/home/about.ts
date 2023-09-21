import { defineField, defineType } from "sanity";

export default defineType({
	name: "about",
	type: "object",
	title: "About",
	fields: [
		defineField({
			name: "title",
			type: "string",
		}),
		defineField({
			name: "description",
			type: "blockContent",
		}),
	],
});
