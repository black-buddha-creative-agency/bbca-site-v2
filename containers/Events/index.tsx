import type { SanityDocument } from "next-sanity";

import {
	Section,
	SectionHeading,
	EventsPageHeader,
	EventList,
} from "@/components";

const EventsPage = ({
	events,
	eventPageData = [],
}: {
	events: SanityDocument<BBCAEvent>;
	eventPageData: SanityDocument[];
}) => {
	return (
		<div className="mt-24">
			<EventsPageHeader
				title={eventPageData?.[0]?.title}
				description={eventPageData?.[0]?.description}
			/>
			<div className="w-full mt-24">
				<EventList events={events} />
			</div>

			<pre>{JSON.stringify(events, null, 2)}</pre>
		</div>
	);
};

export default EventsPage;
