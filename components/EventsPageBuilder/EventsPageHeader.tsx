import BlockContent from "../ui/BlockContent";
import Section from "../ui/Layout/Section";
import SectionHeading from "../ui/Layout/SectionHeading";

interface IEventsPageHeaderProps {
	title: string;
	description: Array<any>;
}

const EventsPageHeader = ({ title, description }: IEventsPageHeaderProps) => {
	return (
		<Section>
			<SectionHeading text={title} />
			<div className="col-span-2">
				<BlockContent value={description} />
			</div>
		</Section>
	);
};

export default EventsPageHeader;
