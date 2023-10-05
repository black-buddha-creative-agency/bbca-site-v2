import { footer } from "@/constants";

function Footer() {
	return (
		<footer className="mx-auto max-w-[120rem] static bottom-0 left-0  bg-transparent px-6 font-normal text-lg mb-4">
			<div className="grid grid-cols-2 justify-between">
				<div className="flex items-center">
					&copy; Black Buddha – Website by &nbsp;
					<a
						href="https://www.gideonjr.com"
						rel="noreferrer noopener"
						target="_blank"
						className="text-textColor hover:text-primary"
					>
						GIIIID
					</a>
				</div>
				<div className="flex justify-end items-center">
					{footer.map((item) => (
						<a
							key={item.label}
							href={item.href}
							className="text-textColor hover:text-primary mr-3"
							rel="noreferrer noopener"
							target="_blank"
						>
							{item.label}
						</a>
					))}
				</div>
			</div>
		</footer>
	);
}

export default Footer;
