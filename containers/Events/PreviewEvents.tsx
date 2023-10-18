"use client";
import type { SanityDocument } from "@sanity/client";
import { useLiveQuery } from "@sanity/preview-kit";
import EventsPage from ".";
import { eventsQuery, eventPageQuery } from "@/sanity/lib/queries";

export default function PreviewEvents({
	events,
	eventPageData,
}: {
	events: SanityDocument<BBCAEvent>;
	eventPageData: SanityDocument[];
}) {
	const [data] = useLiveQuery(events, eventsQuery);
	const [pageData] = useLiveQuery(eventPageData, eventsQuery);

	return <EventsPage events={data} eventPageData={pageData} />;
}
