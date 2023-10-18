"use client";
import { useState } from "react";

import BlockContent from "../ui/BlockContent";
import EventListItem from "./EventListItem";

const EventList = ({ events }: { events: BBCAEvent[] }) => {
	const [eventsOpen, setEventsOpen] = useState(events);

	const handleClick = (eventId: string) => {
		const newEvents = eventsOpen.map((event) => {
			if (eventId === event._id) {
				return { ...event, isOpen: !event.isOpen };
			} else {
				return { ...event, isOpen: false };
			}
		});
		setEventsOpen(newEvents);
	};

	return (
		<ul className="">
			{eventsOpen?.map((event) => (
				<EventListItem key={event._id} {...event} handleClick={handleClick} />
			))}
		</ul>
	);
};

export default EventList;
