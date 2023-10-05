import { draftMode } from "next/headers";
import { getCachedClient } from "@/sanity/lib/getClient";
import PreviewProvider from "@/components/PreviewProvider";

export default function Home() {
	const preview = draftMode().isEnabled
		? { token: process.env.SANITY_API_READ_TOKEN }
		: undefined;

	return <main>Gideon</main>;
}
