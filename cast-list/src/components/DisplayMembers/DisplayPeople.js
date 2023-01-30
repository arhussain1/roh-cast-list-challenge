import "./DisplayPeople.css";

const DisplayPeople = ({ title, people }) => {
	return (
		<div>
			<div className="displayPeople__title">{title}</div>
			<div>
				{people.map((person) => {
					const role = person.attributes.role;
					const name = person.attributes.name;
					return (
						<div className="displayPeople__person" key={person.id}>
							<div className="displayPeople__role--bold">{role}:</div>
							<div>{name}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default DisplayPeople;
