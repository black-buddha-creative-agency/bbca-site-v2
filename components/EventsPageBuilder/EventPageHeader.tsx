import Section from "../ui/Layout/Section";
import SectionHeading from "../ui/Layout/SectionHeading";

interface IEventPageHeaderProps {
	title: string;
	description: Array<any>;
}

const EventsPageHeader = ({ title, description }: IEventPageHeaderProps) => {
	return (
		<div className="mt-20">
			<Section>
				<SectionHeading text={title} />
			</Section>
		</div>
	);
};
