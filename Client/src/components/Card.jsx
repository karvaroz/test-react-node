import React from "react";
import style from "../styles/Card.module.css";

const Card = ({ person }) => {
	return (
		<div className={style.card}>
			<div>
				<img src={person.picture.large} />
			</div>
			<div>
				<h3>
					{person.name.first} {person.name.last}
				</h3>
				<p>📅 {person.dob.age} years old</p>
				<p>📱 {person.phone}</p>
				<p>📧 {person.email}</p>
				<p>
					📍 {person.location.city} - {person.location.country}
				</p>
			</div>
		</div>
	);
};

export default Card;
