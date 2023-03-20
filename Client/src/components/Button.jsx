import React from "react";
import { Link } from "react-router-dom";
import style from "../styles/Button.module.css";

const Button = ({ title, url }) => {
	return (
		<Link
			className={style.button}
			to={url}>
			{title}
		</Link>
	);
};

export default Button;
