import { defineField, defineType, defineArrayMember } from "sanity";

export default defineType({
	name: "home",
	title: "Home Page",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
		}),
		defineField({
			name: "pageBuilder",
			title: "Page Builder",
			type: "array",
			of: [
				defineArrayMember({
					name: "hero",
					title: "Hero",
					type: "hero",
				}),
				defineArrayMember({
					name: "about",
					title: "About",
					type: "about",
				}),
				defineArrayMember({
					name: "images",
					title: "Images",
					type: "gallery",
				}),
				defineArrayMember({
					name: "services",
					title: "Services",
					type: "services",
				}),
				defineArrayMember({
					name: "image",
					title: "Image",
					type: "image",
				}),
				defineArrayMember({
					name: "contact",
					title: "Contact",
					type: "contact",
				}),
			],
		}),
	],
});
