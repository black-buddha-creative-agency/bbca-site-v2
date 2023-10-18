import { cn } from "@/lib/utils";
import ImageComponent from "../ui/Image";

const HomeImages = ({ images }: HomeImagesSection) => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 gap-x-24 gap-y-0 mt-24">
			{images.map((image: Image, idx) => (
				<div
					key={image._key}
					className={cn(
						`${
							idx === 2 ? "lg:col-span-2" : "lg:col-span-1"
						}  flex flex-column items-center justify-center`
					)}
				>
					<ImageComponent
						value={image}
						classNames={`${(idx === 1 || idx === 4) && "lg:max-w-[600px]"} ${
							idx === 2 && "lg:max-w-[800px]"
						}}`}
					/>
				</div>
			))}
		</div>
	);
};

export default HomeImages;
