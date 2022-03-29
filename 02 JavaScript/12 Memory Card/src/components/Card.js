import "./Card.css";

function Card(props) {
	return (
		<div className="card" id={props.id} onClick={props.func}>
			<img src={props.img} />
			<h3>{props.title}</h3>
		</div>
	);
}

export default Card;
