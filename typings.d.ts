type Link = {
	label: string;
	value: string;
	href: string;
};

type Image = {
	asset: {
		_type: string;
		_ref: string;
	};
	_type: string;
	_key: string;
	alt: string;
};

type ImageGallery = {
	images: Array<Image>;
	display: string;
	_type: string;
	_key: string;
};

type HeroSection = {
	tagline: string;
	subheading: string;
	image: Image;
	_type: string;
	_key: string;
	key: string;
};

type AboutSection = {
	description: Array;
	title: string;
	_type: string;
	_key: string;
	key: string;
};

type ContactSection = {
	title: string;
	description: Array;
	_type: string;
	_key: string;
};

type HomeImagesSection = {
	images: Array<Image>;
	_type: string;
	_key: string;
};
type HomeService = {
	title: string;
	_type: string;
	_key: string;
};

type HomeServicesSection = {
	services: HomeService[];
	title: string;
	_type: string;
	_key: string;
};

type HomePageBuilderArray = Array<
	| HeroSection
	| AboutSection
	| ContactSection
	| HomeImagesSection
	| HomeServicesSection
	| Image
>;
