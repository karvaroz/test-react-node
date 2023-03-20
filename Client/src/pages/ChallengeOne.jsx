import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import Card from "../components/Card";
import style from "../styles/Card.module.css";

const ChallengeOne = () => {
	const [people, setPeople] = useState([]);
	useEffect(() => {
		axios.get(`http://localhost:5000/random`).then((response) => {
			setPeople(response.data.data);
		});
	}, []);

	return (
		<div className={style.div}>
			<h2>It should return 10 people sorted by first name.</h2>

			<div className={style.container}>
				{people.length === 10 &&
					people.map((person, idx) => (
						<Card
							person={person}
							key={idx}
						/>
					))}
			</div>
		</div>
	);
};

export default ChallengeOne;
