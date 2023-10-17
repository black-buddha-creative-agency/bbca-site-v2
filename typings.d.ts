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

type Hero = {
	tagline: string;
	subheading: string;
	image: Image;
	_type: string;
	_key: string;
};

type About = {
	description: Array;
	title: string;
	_type: string;
	_key: string;
};
 
type Contact = {
	title: string;
	description: Array;
	_type: string;
	_key: string;
};

type HomeImages = {
	images: Array<Image>;
	_type: string;
	_key: string;
};

type HomeServices = {
	services: Array;
	title: string;
	_type: string;
	_key: string;
};

type HomePageBuilder = Array<
	Hero | About | Contact | HomeImages | HomeServices | Image
>;
