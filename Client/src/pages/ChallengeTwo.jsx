import axios from "axios";
import React, { useState } from "react";

import Card from "../components/Card";

import style from "../styles/Input.module.css";

const ChallengeTwo = () => {
	const [age, setAge] = useState("");
	const [person, setperson] = useState({});
	const [msg, setMsg] = useState("");
	const [fill, setFill] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (e.target.value !== "") {
			axios.get(`http://localhost:5000/random/${age}`).then((response) => {
				if (response.data.data) {
					setperson(response.data.data);
					setMsg(response.data.msg);
					setFill(true);
					setAge("");
					return;
				}
				setMsg(`Did not found a person over ${age}`);
				setFill(false);
				setAge("");
			});
		}
	};

	return (
		<div className={style.container}>
			<h2>It should return first person found over age submitted.</h2>
			<form onSubmit={(e) => handleSubmit(e)}>
				<p>Enter a age to search for a coincidence</p>
				<input
					type="number"
					placeholder="Type a age to search for..."
					value={age}
					onChange={(e) => setAge(e.target.value)}
				/>
				<input
					type="submit"
					value="submit"
					className={style.button}
				/>
			</form>
			{msg !== "" && <h2>{msg}</h2>}

			{fill && (
				<Card
					person={person}
					key={person.id.value}
				/>
			)}
		</div>
	);
};

export default ChallengeTwo;
