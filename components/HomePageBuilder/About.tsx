import Section from "../ui/Layout/Section";
import SectionHeading from "../ui/Layout/SectionHeading";
import BlockContent from "../ui/BlockContent";

const About = ({ title, description }: AboutSection) => {
	return (
		<Section id="about">
			<SectionHeading text={title} />
			<div className="col-span-2">
				<BlockContent value={description} />
			</div>
		</Section>
	);
};

export default About;
