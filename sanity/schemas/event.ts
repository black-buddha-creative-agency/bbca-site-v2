import { defineField, defineType } from "sanity";

export default defineType({
	name: "event",
	title: "Event",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
		}),
		defineField({
			name: "eventDate",
			title: "Event Date",
			type: "date",
			options: {
				dateFormat: "MMMM YYYY",
			},
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "blockContent",
		}),
		defineField({
			name: "artists",
			title: "Artists",
			type: "array",
			of: [{ type: "reference", to: { type: "artist" } }],
		}),
		defineField({
			name: "sponsors",
			title: "Sponsors",
			type: "array",
			of: [{ type: "reference", to: { type: "sponsor" } }],
		}),
		defineField({
			name: "curators",
			title: "Curators",
			type: "array",
			of: [{ type: "reference", to: { type: "curator" } }],
		}),
		defineField({
			name: "exhibitionType",
			title: "Exhibition Type",
			type: "reference",
			to: { type: "exhibitionType" },
		}),
		defineField({
			name: "activations",
			title: "Activations",
			type: "array",
			of: [{ type: "reference", to: { type: "activation" } }],
		}),
		defineField({
			name: "eventImages",
			title: "Event Images",
			type: "imageGallery",
		}),
		defineField({
			name: "socialLinks",
			title: "Social Links",
			type: "array",
			of: [{ type: "link" }],
		}),
		defineField({
			name: "isOpen",
			title: "Is Open",
			type: "boolean",
			readOnly: true,
		}),
	],
});
