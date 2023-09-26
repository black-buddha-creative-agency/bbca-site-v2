"use client";

import Link from "next/link";

import { Bars3Icon } from "@heroicons/react/24/solid";
import { COLORS } from "@/constants";

interface NavbarProps {
	currentRoute: string;
	navigation: Navigation[];
	setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Navbar({ currentRoute, navigation, setMobileMenuOpen }: NavbarProps) {
	return (
		<nav className="flex items-center justify-between pr-6" aria-label="Global">
			<Link href="/" className="-m-1.5 p-1.5">
				<span className="sr-only">Black Buddha Creative Agency</span>
				<h1 className="text-3xl font-proza-libre">
					BB<span className={`text-[${COLORS.PRIMARY}]`}>CA</span>
				</h1>
			</Link>
			<button
				type="button"
				className="-m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden"
				onClick={() => setMobileMenuOpen(true)}
			>
				<span className="sr-only">Open main menu</span>
				<Bars3Icon className="h-6 w-6" aria-hidden="true" />
			</button>
		</nav>
	);
}

export default Navbar;
