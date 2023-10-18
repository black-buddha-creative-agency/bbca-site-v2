import About from "./About";
import ContactBlock from "../ContactBlock";
import Hero from "./Hero";
import HomeImages from "./HomeImages";
import HomeServices from "./HomeServices";
import Image from "../ui/Image";

const getHomePageComponent = (
	{ _type, ...rest }: { _type: string },
	index: number
) => {
	let Component;

	switch (_type) {
		case "hero":
			Component = Hero;
			break;
		case "about":
			Component = About;
			break;
		case "images":
			Component = HomeImages;
			break;
		case "services":
			Component = HomeServices;
			break;
		case "contact":
			Component = ContactBlock;
			break;
		case "image":
			Component = Image;
			break;
	}

	if (!Component) console.warn(`No component found for ${_type}`);

	if (_type === "image") {
		const ImageComponent = Component as ({
			value,
		}: {
			value?: any;
		}) => JSX.Element;
		return <ImageComponent key={index} value={rest} />;
	} else {
		return Component ? <Component key={index} {...rest} /> : null;
	}
};

const HomePageBuilder = ({
	pageBuilder,
}: {
	pageBuilder: HomePageBuilderArray;
}) => {
	return <div>{pageBuilder.map(getHomePageComponent)}</div>;
};

export default HomePageBuilder;
