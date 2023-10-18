"use client";
import Link from "next/link";

import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface MobileNavProps {
	navigation: Link[];
	mobileMenuOpen: boolean;
	setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function MobileNav({
	navigation,
	mobileMenuOpen,
	setMobileMenuOpen,
}: MobileNavProps) {
	return (
		<Dialog
			as="div"
			className="lg:hidden"
			open={mobileMenuOpen}
			onClose={() => setMobileMenuOpen(false)}
		>
			<div className="fixed inset-0 z-50" />
			<Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
				<div className="flex items-center justify-between">
					<Link href="/">
						<span className="sr-only">Black Buddha Creative Agency</span>
						<h1 className="text-4xl font-proza-libre font-normal">
							BB<span className="text-primary">CA</span>
						</h1>
					</Link>
					<button
						type="button"
						className="-m-2.5 rounded-md p-2.5 text-gray-700"
						onClick={() => setMobileMenuOpen(false)}
					>
						<span className="sr-only">Close menu</span>
						<XMarkIcon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<div className="mt-6 flow-root">
					<div className="-my-6 divide-y divide-gray-500/10">
						<div className="space-y-2 py-6">
							{navigation.map((item) => (
								<Link
									key={item.label}
									href={item.href}
									onClick={() => setMobileMenuOpen(false)}
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-textColor hover:underline hover:text-primary hover:decoration-primary"
								>
									{item.label}
								</Link>
							))}
						</div>
					</div>
				</div>
			</Dialog.Panel>
		</Dialog>
	);
}

export default MobileNav;
