import { useState } from "react";
import DateDisplay from "./DateDisplay";
import "./date.css";

const DateContainer = () => {
	const [date, setDate] = useState(Date.now()); //useState

	return (
		<>
			<input
				type="date"
				className="date-input"
				onChange={(event) => setDate(event.target.value)}
			/>
			<DateDisplay date={date} />
		</>
	);
};
export default DateContainer;
