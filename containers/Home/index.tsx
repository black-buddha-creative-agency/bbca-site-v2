import type { SanityDocument } from "next-sanity";

function HomePage({ home = [] }: { home: SanityDocument[] }) {
	return (
		<div>
			<h1>Home Page</h1>
			<p>{JSON.stringify(home)}</p>
		</div>
	);
}

export default HomePage;
