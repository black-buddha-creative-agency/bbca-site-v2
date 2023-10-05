"use client";

import Link from "next/link";

import { Bars3Icon } from "@heroicons/react/24/solid";
import { COLORS } from "@/constants";

interface NavbarProps {
	currentRoute: string;
	navigation: Link[];
	setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Navbar({ currentRoute, navigation, setMobileMenuOpen }: NavbarProps) {
	return (
		<nav className="flex items-center justify-between pr-6" aria-label="Global">
			<Link href="/">
				<span className="sr-only">Black Buddha Creative Agency</span>
				<h1 className="text-4xl font-proza-libre font-normal">
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
			<div className="hidden lg:ml-12 lg:flex lg:gap-x-14 lg:items-center">
				{navigation.map((item) => (
					<Link
						key={item.label}
						href={item.href}
						className={`${
							currentRoute === item.href
								? "underline text-primary decoration-secondary  hover:text-primary hover:decoration-primary"
								: " text-textColor hover:underline hover:text-primary hover:decoration-primary"
						} text-lg underline-offset-8`}
					>
						{item.label}
					</Link>
				))}
			</div>
		</nav>
	);
}

export default Navbar;
