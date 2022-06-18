import React from "react";
import { ButtonStyle } from "./style";

/* Это шаблон для трех типов кнопок */

const Button = (props) => {
	return (
		<ButtonStyle
			onClick={props.onClick}
			className={props.className}
			type={props.type}
		>
			{props.children}
		</ButtonStyle>
	);
};

export default Button;
