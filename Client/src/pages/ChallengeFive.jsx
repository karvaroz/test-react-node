import axios from "axios";
import React, { useEffect, useState } from "react";
import Planet from "../components/Planet";
import style from "../styles/Radio.module.css";
import { terrains } from "../utils";

const ChallengeFive = () => {
	const Terrains = Array.from(new Set(terrains));
	const [terrain, setTerrain] = useState("");
	const [planet, setPlanet] = useState({});
	const [msg, setMsg] = useState("");

	const onOptionChange = (e) => {
		setTerrain(e.target.value);
	};

	const queryPlanet = () => {
		if (terrain !== "") {
			axios
				.get(`http://localhost:5000/swapi-planet/${terrain}`)
				.then((response) => {
					setPlanet(response.data.data);
					setMsg(response.data.msg);
				});
		}
	};

	useEffect(() => {
		queryPlanet();
	}, [terrain]);

	return (
		<div className={style.parent}>
			<h2>
				It will return the planet that matches the terrain selected. If it is
				more than one planet matches, will return the one with more poblation.
			</h2>
			<div className={style.container}>
				<p>Select a terrain:</p>
				<div className={style.div}>
					{Terrains.map((terrain, idx) => (
						<div
							className={style.radio}
							key={idx}>
							<input
								type="radio"
								name="terrain"
								value={terrain}
								id={terrain}
								onChange={onOptionChange}
							/>
							<label
								htmlFor={terrain}
								key={idx}>
								{terrain}
							</label>
						</div>
					))}
				</div>
			</div>
			{msg !== "" && <h2>{msg}</h2>}
			{planet && (
				<Planet
					planet={planet}
					key={planet.name}
				/>
			)}
		</div>
	);
};

export default ChallengeFive;
