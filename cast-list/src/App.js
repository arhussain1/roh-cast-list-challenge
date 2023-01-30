import { useState } from "react";
import CastSheet from "./CastSheet";

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

	return <>{data && <CastSheet data={data} />}</>;
};

export default App;
