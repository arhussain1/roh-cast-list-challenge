import { useState } from "react";
import "./App.css";

const App = ({}) => {
	const [data, setData] = useState();

	if (!data) {
		fetch("/api/event-details?slug=turandot-by-andrei-serban")
			.then((response) => response.json())
			.then((data) => {
				setData(data);
			})
			.catch((error) => console.log("error", error));
	}

	const title = data?.data.attributes.title;
	const date = "10/03/2023";
	const description = data?.data.attributes.shortDescription;

	return (
		<div className="castSheet">
			<div className="castSheet__title">{title}</div>
			<div className="castSheet__date">Date: {date}</div>
			<div className="castSheet__desc">
				Short Description
				<div dangerouslySetInnerHTML={{ __html: description }} />
			</div>
		</div>
	);
};

export default App;
