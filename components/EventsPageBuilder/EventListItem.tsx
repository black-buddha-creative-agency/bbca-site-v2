import BlockContent from "../ui/BlockContent";
import ImageComponent from "../ui/Image";

interface EventListItemProps extends BBCAEvent {
	key: string;
	handleClick: (eventId: string) => void;
}

const EventListItem = ({
	_id,
	title,
	slug,
	eventDate,
	eventImages,
	description,
	isOpen,
	socialLinks,
	handleClick,
}: EventListItemProps) => {
	return (
		<>
			<li
				onClick={() => handleClick(_id)}
				className="flex justify-between py-4 hover:text-primary hover:cursor-pointer border-t-2 border-textColor hover:border-primary"
			>
				<p className="text-2xl">{title}</p>
				<p className="text-2xl">{isOpen ? "-" : "+"}</p>
			</li>
			{isOpen ? (
				<div>
					<div>
						{eventImages ? (
							<ImageComponent value={eventImages?.images?.[0]} />
						) : null}
						<div>
							<div className="flex flex-column">
								<div className="mb-4 mt-5">
									<p>
										<strong>{eventDate}</strong>
									</p>
								</div>
								<div>
									<BlockContent value={description} />
								</div>
							</div>
						</div>
					</div>
				</div>
			) : null}
		</>
	);
};

export default EventListItem;
