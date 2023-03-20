import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "../styles/Card.module.css";

const ChallengeThree = () => {
	const [names, setNames] = useState([]);
	const [letter, setLetter] = useState("");
	useEffect(() => {
		axios.get(`http://localhost:5000/random-letter`).then((response) => {
			setNames(response.data.data.names);
			setLetter(response.data.data.repetitions.maxStr);
		});
	}, []);

	return (
		<div className={style.homeCard}>
			<h2>
				Based on the name of 5 people, you must calculate the most used letter
				in these
			</h2>
			<div>
				{names.length > 0 && names.map((name, idx) => <p key={idx}>{name} </p>)}
			</div>
			<h2>Most used letter in these 5 names is: {letter !== "" && letter} </h2>
		</div>
	);
};

export default ChallengeThree;
