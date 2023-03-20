import React from "react";
import Button from "./Button";
import style from "../styles/Nav.module.css";
const Nav = () => {
	return (
		<nav className={style.nav}>
			<Button
				title="Challenge 1 👦"
				url="/Challenge1"
			/>

			<Button
				title="Challenge 2 ✔"
				url="/Challenge2"
			/>
			<Button
				title="Challenge 3 🔍"
				url="Challenge3"
			/>

			<Button
				title="Challenge 4 🚀"
				url="/Challenge4"
			/>

			<Button
				title="Challenge 5 🪐"
				url="/Challenge5"
			/>
		</nav>
	);
};

export default Nav;
