/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "../ui/Image";

const Hero = ({ image, tagline }: Hero) => {
	return (
		<section className="grid grid-cols-1 lg:grid-cols-2">
			<div className="flex flex-column items-center w-4/5">
				<h1 className="text-secondary text-3xl md:text-4xl lg:text-5xl font-normal">
					{tagline}
				</h1>
			</div>
			<div>
				<Image value={image} />
			</div>
		</section>
	);
};

export default Hero;
