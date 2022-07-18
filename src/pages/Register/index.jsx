import React, { memo } from "react";
import Auth from "../../components/Auth";
import Button from "../../components/Button";
import Input from "../../components/Input";
import ToBegin from "../../components/ToBegin";

const Register = (props) => {
	return (
		<ToBegin>
			<Auth title="Registration">
				<Input id="first_name" type="text" placeholder="First name" className={`auth__input`} />
				<Input id="last_name" type="text" placeholder="Last name" className={`auth__input`} />
				<Input id="email" type="email" placeholder="Email" className={`auth__input`} />
				<Input
					id="password"
					type="text"
					className={`auth__input auth__input_password`}
					placeholder="Password"
				/>
				<Input
					id="reenter_password"
					type="text"
					className={`auth__input auth__input_password`}
					placeholder="Re-enter Password"
				/>
				<Button type="primary" className="auth__button">
					<p>Register</p>
				</Button>
			</Auth>
		</ToBegin>
	);
};

export default memo(Register);
