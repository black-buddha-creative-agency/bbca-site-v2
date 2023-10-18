import { draftMode } from "next/headers";
import { getCachedClient } from "@/sanity/lib/getClient";
import { homeQuery } from "@/sanity/lib/queries";
import HomePage from "@/containers/Home";
import PreviewHome from "@/containers/Home/PreviewHome";
import PreviewProvider from "@/components/PreviewProvider";

export default async function Home() {
	const preview = draftMode().isEnabled
		? { token: process.env.SANITY_API_READ_TOKEN }
		: undefined;

	const home = await getCachedClient(preview)(homeQuery);

	if (preview && preview.token) {
		return (
			<PreviewProvider token={preview.token}>
				<PreviewHome home={home} />
			</PreviewProvider>
		);
	}

	return <HomePage home={home} />;
}
