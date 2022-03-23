import "./style.css";

function Overview(props) {
	return (
		<ul>
			{props.tasks.map((task, index) => {
				return (
					<li key={index}>
						<span>
							{index}. {task}
						</span>
						<i className="fa-solid fa-trash" onClick={props.onClick}></i>
					</li>
				);
			})}
		</ul>
	);
}

export default Overview;
