import "../../styles/globals.css";
import { Lato, Proza_Libre } from "next/font/google";
import { Suspense } from "react";
import { draftMode } from "next/headers";

import Link from "next/link";

import Loading from "./loading";
import { Header, Footer } from "@/components";

import { homeMeta } from "@/constants";

const lato = Lato({
	weight: ["100", "300", "400", "700", "900"],
	subsets: ["latin"],
	variable: "--font-lato",
});

const prozaLibre = Proza_Libre({
	weight: ["400", "500", "600", "700", "800"],
	subsets: ["latin"],
	variable: "--font-proza-libre",
});

export const metadata = {
	...homeMeta,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const preview = draftMode().isEnabled
		? { token: process.env.SANITY_API_READ_TOKEN }
		: undefined;
	return (
		<html lang="en">
			<body className={`${prozaLibre.variable} ${lato.variable} bg-[#fafafa]`}>
				{preview && preview.token && (
					<div className="fixed bottom-0 left-0 ml-6 mb-6 w-screen">
						<Link
							href="/api/exit-preview"
							className="text-white bg-[#af0707] px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black block rounded-md cursor-pointer w-40 h-10"
						>
							Exit Preview Mode
						</Link>
					</div>
				)}
				<Header />
				<Suspense fallback={<Loading />}>
					<main className="mx-auto max-w-[120rem] px-8 min-h-screen ">
						{children}
					</main>
				</Suspense>
				<Footer />
			</body>
		</html>
	);
}
