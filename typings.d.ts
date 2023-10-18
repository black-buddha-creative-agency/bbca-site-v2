type Link = {
	label: string;
	value: string;
	href: string;
};

type SocialLink = {
	title: string;
	url: string;
	_type: string;
	_key: string;
};

type Image = {
	asset: {
		_type: string;
		_ref: string;
	};
	_type: string;
	_key: string;
	alt?: string;
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

type BBCAEvent = {
	title: string;
	slug: {
		current: string;
		type: string;
	};
	eventDate: string;
	description: Array;
	curators: Array<Curator>;
	artists: Array<Artist>;
	sponsors: Array<Sponsor>;
	exhibitionType: Array<ExhibitionType>;
	activations: Array<Activation>;
	eventImages: {
		images: Array<Image>;
		display: string;
		_type: string;
	};
	socialLinks: Array<SocialLink>;
	isOpen: boolean;
	_type: string;
	_key: string;
	_id: string;
};

type Sponsor = {
	name: string;
	slug: {
		current: string;
		type: string;
	};
	website?: string;
	_type: string;
	_id: string;
	_updatedAt: string;
	_createdAt: string;
	_rev: string;
};

type ExhibitionType = {
	title: string;
	_type: string;
	_id: string;
	_updatedAt: string;
	_createdAt: string;
	_rev: string;
};

type Artist = {
	_id: string;
	name: string;
	slug: {
		current: string;
		type: string;
	};
	link?: {
		title;
		url;
	};
	_type: string;
	_updatedAt: string;
	_createdAt: string;
	_rev: string;
};

type Curator = {
	_id: string;
	name: string;
	slug: {
		current: string;
		type: string;
	};
	website?: string;
	_type: string;
	_updatedAt: string;
	_createdAt: string;
	_rev: string;
};

type Activation = {
	_id: string;
	title: string;
	slug: {
		current: string;
		type: string;
	};
	description: Array;
	_type: string;
	_updatedAt: string;
	_createdAt: string;
	_rev: string;
};
