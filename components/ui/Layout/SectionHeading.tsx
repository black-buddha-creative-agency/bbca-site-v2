const SectionHeading = ({ text }: { text: string }) => {
	return (
		<div className="col-span-1">
			<h1 className="text-headingColor text-3xl md:text-4xl font-normal">
				{text}
			</h1>
		</div>
	);
};

export default SectionHeading;
