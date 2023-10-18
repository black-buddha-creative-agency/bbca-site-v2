import type { SanityDocument } from "next-sanity";

import { HomePageBuilder } from "@/components";

function HomePage({ home = [] }: { home: SanityDocument[] }) {
	return (
		<div className="mt-10">
			<HomePageBuilder pageBuilder={home?.[0]?.pageBuilder} />

			<pre>{JSON.stringify(home, null, 2)}</pre>
		</div>
	);
}

export default HomePage;
