import React from "react";
import { renderServiceIcon } from "./renderServiceIcon";

const HomeServices = ({ services, title }: HomeServicesSection) => {
	return (
		<div className="w-full flex justify-end text-[#fafafa] mb-0 md:mb-24">
			<div className="w-full md:w-4/5 bg-primary my-32 pt-24 p-20 md:p-32">
				<h2 className="text-4xl mb-5">{title}</h2>
				<ul className="mt-5">
					{services.map((service: HomeService) => {
						const Component = renderServiceIcon(service?.title);

						return (
							<li
								key={service?._key}
								className="mt-5 mb-10 flex flex-column items-center"
							>
								<div>
									<Component className="h-6 w-6 mr-5" />
								</div>
								<p className="text-[1.3rem]">{service?.title}</p>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default HomeServices;
