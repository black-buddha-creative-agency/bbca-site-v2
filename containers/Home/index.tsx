import type { SanityDocument } from "next-sanity";

import { HomePageBuilder } from "@/components";

function HomePage({ home = [] }: { home: SanityDocument[] }) {
	return (
		<div className="mt-10">
			<HomePageBuilder pageBuilder={home?.[0]?.pageBuilder} />
		</div>
	);
}

export default HomePage;
