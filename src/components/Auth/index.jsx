import React from "react";
import { AuthStyle } from "./style";

/* Шаблон для регистарции и логина */

const Auth = (props) => {
	return (
		<AuthStyle className="auth" method="post">
			<div className="auth__container">
				<div className="auth__wrapper">
					<h1 className="auth__title">{props.title}</h1>
					<div className="auth__body">{props.children}</div>
				</div>
			</div>
		</AuthStyle>
	);
};

export default Auth;
