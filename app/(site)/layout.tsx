import "../../styles/globals.css";
import { Lato, Proza_Libre } from "next/font/google";
import { homeMeta } from "@/constants";

const lato = Lato({
	weight: "400",
	subsets: ["latin"],
});

const prozaLibre = Proza_Libre({
	weight: "700",
	subsets: ["latin"],
});

export const metadata = {
	...homeMeta,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={lato.className}>{children}</body>
		</html>
	);
}
