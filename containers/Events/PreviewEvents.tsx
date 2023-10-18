"use client";
import type { SanityDocument } from "@sanity/client";
import { useLiveQuery } from "@sanity/preview-kit";
import EventsPage from ".";
import { eventsQuery } from "@/sanity/lib/queries";

export default function PreviewEvents({
	events = [],
}: {
	events: SanityDocument[];
}) {
	const [data] = useLiveQuery(events, eventsQuery);

	return <EventsPage events={data} />;
}
