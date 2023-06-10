import moment from "moment";
import Author from "./Author";
import "./date.css";

const DateDisplay = (props) => {
	const { date } = props;
	return (
		<section className="date-display">
			My date is: {moment(date).format("LL")}
			<Author name="@CongHoang" />
		</section>
	);
};

export default DateDisplay;
