import React, { useState, useEffect } from "react";
import characters from "../data";
import Card from "./Card";
import Score from "./Score";
import "./Cards.css";

function Cards() {
	const [cards, setCards] = useState(randomCards(characters));
	const [score, setScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);
	const [lastCards, setLastCard] = useState([]);

	useEffect(() => {
		setCards(randomCards(cards));
	});

	function playTurn(event) {
		let target = event.target || event.srcElement;

		if (target && !target.id) {
			target = target.parentNode;
		}

		if (lastCards.includes(target.id)) {
			if (bestScore < score) {
				setBestScore(score);
			}
			setScore(0);
			setLastCard([]);

			alert("You Lose");
		} else {
			setScore(score + 1);
			setLastCard([...lastCards, target.id]);
		}
	}

	function randomCards(arr) {
		function shuffleArray(arr) {
			for (let i = arr.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[arr[i], arr[j]] = [arr[j], arr[i]];
			}
			return arr;
		}

		return shuffleArray(arr);
	}

	return (
		<div className="main">
			<Score score={score} bestscore={bestScore} />
			<div className="cards">
				{cards.map((character, index) => {
					return (
						<Card
							img={character.src}
							title={character.name}
							func={playTurn}
							id={character.name.split(" ")[0]}
							key={index}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Cards;
