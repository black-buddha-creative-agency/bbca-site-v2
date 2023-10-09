"use client";
import type { SanityDocument } from "@sanity/client";
import { useLiveQuery } from "@sanity/preview-kit";
import HomePage from "./";
import { homeQuery } from "@/sanity/lib/queries";

export default function PreviewHome({ home = [] }: { home: SanityDocument[] }) {
	const [data] = useLiveQuery(home, homeQuery);

	return <HomePage home={data} />;
}
