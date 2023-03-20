import axios from "axios";
import React, { useState } from "react";
import style from "../styles/Input.module.css";

const ChallengeFour = () => {
	const [passengers, setPassengers] = useState("");
	const [ship, setShip] = useState([]);
	const [msg, setMsg] = useState("");
	const [fill, setFill] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (e.target.value !== "") {
			axios
				.get(`http://localhost:5000/swapi-ship/${passengers}`)
				.then((response) => {
					if (response.data.data) {
						setShip(response.data.data);
						setMsg(response.data.msg);
						setFill(true);
						setPassengers("");
						return;
					}
					setMsg(`Did not found a ship`);
					setFill(false);
					setPassengers("");
				});
		}
	};
	return (
		<div className={style.container}>
			<h2>It should return fastest ship which fulfilled all requirements.</h2>
			<form onSubmit={(e) => handleSubmit(e)}>
				<p>Enter number of passengers</p>
				<input
					type="number"
					value={passengers}
					onChange={(e) => setPassengers(e.target.value)}
				/>
				<input
					type="submit"
					value="submit"
					className={style.button}
				/>
			</form>
			{msg !== "" && <h2>{msg}</h2>}

			{fill &&
				ship.map((s, idx) => (
					<div
						key={idx}
						className={style.starship}>
						<h3>{s.name} 🚀</h3>
						<p>No. Passengers: {s.passengers}</p>
						<p>No. Days can travel: {s.days_can_travel}</p>
						<p>Appered Season: {s.seasons && s.seasons.map((a) => `${a} `)}</p>
						<p>Max Speed: {s.max_atmosphering_speed}</p>
					</div>
				))}
		</div>
	);
};

export default ChallengeFour;
