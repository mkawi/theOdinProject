import General from "./General";
import Experience from "./Experience";
import Education from "./Education";
import "../styles/Cv.css";

function Cv() {
	return (
		<div className="cv-main">
			<General />
			<Experience />
			<Education />
		</div>
	);
}

export default Cv;
