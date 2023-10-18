import Link from "next/link";
import ImageComponent from "../ui/Image";
import Section from "../ui/Layout/Section";

const Hero = ({ image, tagline }: HeroSection) => {
	return (
		<>
			<section className="grid grid-cols-1 lg:grid-cols-2">
				<div className="flex flex-column items-center md:w-4/5">
					<h1 className="text-secondary text-3xl md:text-4xl lg:text-header font-normal">
						{tagline}
					</h1>
				</div>
				<div className="mt-10 md:mt-0">
					<ImageComponent value={image} />
				</div>
			</section>
			<div className="h-96 invisible md:visible relative my-10">
				<Link href="#about">
					<svg
						width="26"
						height="64"
						viewBox="0 0 16 36"
						fill="none"
						className="absolute bottom-0 left-0"
					>
						<path
							d="M7.29289 35.7071C7.68342 36.0976 8.31658 36.0976 8.70711 35.7071L15.0711 29.3431C15.4616 28.9526 15.4616 28.3195 15.0711 27.9289C14.6805 27.5384 14.0474 27.5384 13.6569 27.9289L8 33.5858L2.34315 27.9289C1.95262 27.5384 1.31946 27.5384 0.928933 27.9289C0.538409 28.3195 0.538409 28.9526 0.928933 29.3431L7.29289 35.7071ZM7 4.37114e-08L7 35L9 35L9 -4.37114e-08L7 4.37114e-08Z"
							fill="#162466"
						/>
					</svg>
				</Link>
			</div>
		</>
	);
};

export default Hero;
