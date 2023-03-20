import React from "react";
import style from "../styles/Planet.module.css";

const Planet = ({ planet }) => {
	return (
		<div className={style.planet}>
			<h3>{planet.name} 🪐</h3>
			<div>
				<p>diameter: {planet.diameter}</p>
				<p>gravity: {planet.gravity}</p>
				<p>
					population:{" "}
					{planet.population && planet.population.toLocaleString("en-US")}
				</p>
				<p>orbital period: {planet.orbital_period}</p>
				<p>climate: {planet.climate}</p>
				<p>
					Terrain:{" "}
					{planet.terrain.map((t, idx) => (
						<span key={idx}>{t} </span>
					))}
				</p>
			</div>
		</div>
	);
};

export default Planet;
