/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/pages/studio/[[...index]].tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import Iframe from "sanity-plugin-iframe-pane";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import { StudioNavbar } from "./components";
import { myTheme } from "./sanity/theme";

import defaultDocumentNode from "./sanity/lib/defaultDocumentNode";

const singletonActions = new Set(["publish", "discardChanges", "restore"]);

const singletonTypes = new Set(["home", "contact", "eventPage"]);

export default defineConfig({
	basePath: "/studio",
	name: "Black_Buddha_Creative_Agency_Content_Studio",
	title: "Black Buddha Creative Agency Content Studio",
	projectId,
	dataset,
	// Add and edit the content schema in the './sanity/schema' folder
	schema: {
		...schema,
		// filter out singleton types from the global "new document" menu
		templates: (templates) =>
			templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),

		document: {
			// for singleton types, filter out actions that are not explicitly allowed in the `singletonActions` list defined above
			actions: (input: any, context: any) =>
				singletonTypes.has(context.schemaType)
					? input.filter(({ action }: { action: any }) =>
							singletonActions.has(action)
					  )
					: input,
		},
	},
	plugins: [
		deskTool({
			structure: (S) =>
				S.list()
					.title("Website Page Content")
					.items([
						// singleton type has a list item with a custom child
						S.listItem()
							.title("Home Page")
							.id("home")
							.child(
								// Instead of rendering a list of documents, we render a single
								// document, specifying the `documentId` manually to ensure
								// that we're editing the single instance of the document
								S.document()
									.schemaType("home")
									.documentId("home")
									.views([
										S.view.form(),
										S.view
											.component(Iframe)
											.options({
												url:
													process.env.NODE_ENV === "development"
														? `http://localhost:3000/api/preview`
														: `https://www.blackbuddhacreativeagency.com/api/preview`,
											})
											.title("Preview"),
									])
							),
						S.listItem()
							.title("Contact Page")
							.id("contact")
							.child(
								S.document()
									.schemaType("contact")
									.documentId("contact")
									.views([
										S.view.form(),
										S.view
											.component(Iframe)
											.options({
												url:
													process.env.NODE_ENV === "development"
														? `http://localhost:3000/api/preview?view=contact`
														: `https://www.blackbuddhacreativeagency.com/api/preview?view=contact`,
											})
											.title("Preview"),
									])
							),
						S.listItem()
							.title("Event Page")
							.id("eventPage")
							.child(
								S.document()
									.schemaType("eventPage")
									.documentId("eventPage")
									.views([
										S.view.form(),
										S.view
											.component(Iframe)
											.options({
												url:
													process.env.NODE_ENV === "development"
														? `http://localhost:3000/api/preview?view=event`
														: `https://www.blackbuddhacreativeagency.com/api/preview?view=event`,
											})
											.title("Preview"),
									])
							),

						// Regular document types
						...S.documentTypeListItems().filter((listItem) => {
							const id: any = listItem.getId();
							return !singletonTypes.has(id);
						}),
					]),
			defaultDocumentNode,
		}),
		// Vision is a tool that lets you query your content with GROQ in the studio
		// https://www.sanity.io/docs/the-vision-plugin
		visionTool({ defaultApiVersion: apiVersion }),
	],
	theme: myTheme,
	studio: {
		components: {
			navbar: StudioNavbar,
		},
	},
});
