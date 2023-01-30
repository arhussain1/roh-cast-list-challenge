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

	return (
		<div className="castSheet">
			<div className="castSheet__title">{title}</div>
		</div>
	);
};

export default App;
