import { draftMode } from "next/headers";

import EventsPage from "@/containers/Events";
import PreviewEvents from "@/containers/Events/PreviewEvents";
import PreviewProvider from "@/components/PreviewProvider";

import { getCachedClient } from "@/sanity/lib/getClient";
import { eventsQuery, eventPageQuery } from "@/sanity/lib/queries";

export default async function Page() {
	const preview = draftMode().isEnabled
		? { token: process.env.SANITY_API_READ_TOKEN }
		: undefined;

	const events = await getCachedClient(preview)(eventsQuery);
	const eventPageData = await getCachedClient(preview)(eventPageQuery);

	if (preview && preview.token) {
		return (
			<PreviewProvider token={preview.token}>
				<PreviewEvents events={events} eventPageData={eventPageData} />
			</PreviewProvider>
		);
	}

	return <EventsPage events={events} eventPageData={eventPageData} />;
}
