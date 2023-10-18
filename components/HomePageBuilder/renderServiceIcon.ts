import {
	MicrophoneIcon,
	ClipboardDocumentCheckIcon,
	PrinterIcon,
	PhotoIcon,
	RectangleGroupIcon,
} from "@heroicons/react/24/solid";

export const renderServiceIcon = (title: string) => {
	let Component: any;
	switch (title) {
		case "Event Hosting":
			Component = MicrophoneIcon;
			break;
		case "Event Management":
			Component = ClipboardDocumentCheckIcon;
			break;
		case "Framing":
			Component = PhotoIcon;
			break;
		case "Vinyl Cutting":
			Component = PrinterIcon;
			break;
		case "Installation":
			Component = RectangleGroupIcon;
			break;
		default:
			Component = RectangleGroupIcon;
			break;
	}

	return Component;
};
