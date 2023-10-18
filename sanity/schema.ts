import { type SchemaTypeDefinition } from "sanity";

import activation from "./schemas/activation";
import artist from "./schemas/artist";
import blockContent from "./schemas/blockContent";
import contact from "./schemas/contact";
import curator from "./schemas/curator";
import event from "./schemas/event";
import eventPage from "./schemas/eventPage";
import exhibitionType from "./schemas/exhibitionType";
import gallery from "./schemas/gallery";
import home from "./schemas/home";
import imageGallery from "./schemas/imageGallery";
import link from "./schemas/link";
import sponsor from "./schemas/sponsor";

import about from "./schemas/home/about";
import hero from "./schemas/home/hero";
import services from "./schemas/home/services";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		activation,
		artist,
		blockContent,
		contact,
		curator,
		event,
		eventPage,
		exhibitionType,
		gallery,
		home,
		imageGallery,
		link,
		sponsor,

		about,
		hero,
		services,
	],
};
