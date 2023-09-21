import { defineField, defineType } from "sanity";

export default defineType({
	name: "services",
	type: "object",
	title: "Services",
	fields: [
		defineField({
			name: "title",
			type: "string",
		}),
		defineField({
			name: "services",
			type: "array",
			of: [
				defineField({
					name: "service",
					type: "object",
					fields: [
						defineField({
							name: "title",
							type: "string",
						}),
					],
				}),
			],
		}),
	],
});
