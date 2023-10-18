import { defineField, defineType } from "sanity";

export default defineType({
	name: "eventPage",
	title: "Event Page",
	type: "document",
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
