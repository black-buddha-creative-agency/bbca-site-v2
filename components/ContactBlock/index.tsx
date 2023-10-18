import Section from "../ui/Layout/Section";
import SectionHeading from "../ui/Layout/SectionHeading";
import BlockContent from "../ui/BlockContent";

const ContactBlock = ({ title, description }: ContactSection) => {
	return (
		<Section classNames="lg:mt-32 mb-10">
			<SectionHeading text={title} />
			<div className="col-span-2">
				<BlockContent value={description} />
			</div>
		</Section>
	);
};

export default ContactBlock;
