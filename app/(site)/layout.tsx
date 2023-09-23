import "../../styles/globals.css";
import { Inter } from "next/font/google";
import { homeMeta } from "@/constants";

const inter = Inter({ subsets: ["latin"] });

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
			<body className={inter.className}>{children}</body>
		</html>
	);
}