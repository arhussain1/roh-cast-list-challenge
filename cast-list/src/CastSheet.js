import "./CastSheet.css";
import dayjs from "dayjs";

const getCurrentCast = (includedData, date) => {
	// this function allows us to find the correct cast for a performance
	// for a given date and time
	const currentDateActivities = includedData.filter(
		(object) => object.type === "activities" && object.attributes.date === date
	);

	const currentCastRoleIds =
		currentDateActivities[0].relationships.cast.data.map(
			(castRole) => castRole.id
		);

	const allCastMembers = includedData.filter(
		(object) => object.type === "castRoles"
	);

	const currentCast = allCastMembers.filter((castMember) =>
		currentCastRoleIds.includes(castMember.id)
	);

	return currentCast;
};

const CastSheet = ({ data }) => {
	const rawDate = "2023-03-10T19:00:00+00:00";
	const formattedDate = dayjs(rawDate).format("DD/MM/YYYY");
	const title = data.data.attributes.title;
	const description = data.data.attributes.shortDescription;
	const creatives = data.included.filter(
		(object) => object.type === "creatives"
	);

	const currentCast = getCurrentCast(data.included, rawDate);

	return (
		<div className="castSheet">
			<div className="castSheet__title">{title}</div>
			<div className="castSheet__date">Date: {formattedDate}</div>
			<div className="castSheet__desc">
				Short Description
				<div dangerouslySetInnerHTML={{ __html: description }} />
			</div>
			<div>
				Creatives
				<div>
					{creatives.map((creative) => {
						const role = creative.attributes.role;
						const name = creative.attributes.name;
						return (
							<div className="castSheet__creatives" key={creative.id}>
								<div className="castSheet__role--bold">{role}:</div>
								<div>{name}</div>
							</div>
						);
					})}
				</div>
			</div>
			<div>
				Cast
				<div>
					{currentCast.map((castMembers) => {
						const role = castMembers.attributes.role;
						const name = castMembers.attributes.name;
						return (
							<div className="castSheet__creatives" key={castMembers.id}>
								<div className="castSheet__role--bold">{role}:</div>
								<div>{name}</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
export default CastSheet;
