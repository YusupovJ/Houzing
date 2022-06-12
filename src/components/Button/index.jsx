import React from "react";
import { ButtonStyle } from "./style";

const Button = (props) => {
	return (
		<ButtonStyle onClick={props.onClick} className={props.className} type={props.type}>
			{props.children}
		</ButtonStyle>
	);
};

export default Button;
