import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
	children: React.ReactNode;
	classNames?: string;
}

const Section = ({ children, classNames }: SectionProps) => {
	return (
		<section className={cn("grid grid-cols-1 lg:grid-cols-3", classNames)}>
			{children}
		</section>
	);
};

export default Section;
