"use client";
import Image from "next/image";
import { useNextSanityImage, UseNextSanityImageProps } from "next-sanity-image";
import { getClient } from "@/sanity/lib/getClient";
import { ImageLoader } from "next/image";

function ImageComponent({ value }: { value: any }) {
	const client = getClient();

	const imageProps: UseNextSanityImageProps | null = useNextSanityImage(
		client,
		value
	);

	return (
		<div className="my-2">
			<Image
				className="w-full h-auto"
				{...(imageProps as any)}
				alt={value?.alt || `Carousel Image ${value._key}`}
				// className="object-contain"
				sizes="(max-width: 800px) 100vw, 800px"
			/>
		</div>
	);
}

export default ImageComponent;
