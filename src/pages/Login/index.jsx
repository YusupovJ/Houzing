import React, { memo, useRef, useState } from "react";
import Auth from "../../components/Auth";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import ToBegin from "../../components/ToBegin";

const url = process.env.REACT_APP_PUBLIC_URL;

const Login = (props) => {
	const navigate = useNavigate();
	const checkRef = useRef();
	const login = JSON.parse(localStorage.getItem("login"));

	const [userData, setUserData] = useState({
		email: login?.username || "",
		password: "",
	});

	const [access, setAccess] = useState({
		email: true,
		password: true,
	});

	/*------------------------------------*/

	const getUserData = (e, type) => {
		let userDataClone = Object.assign({}, userData);

		if (type === "email") {
			userDataClone.email = e.target.value;
		} else if (type === "password") {
			userDataClone.password = e.target.value;
		}
		setUserData(userDataClone);
	};

	/*------------------------------------*/

	// Отправка формы
	const submit = (e) => {
		let emailReg = /.+@.+\.\w+/;
		let passwordReg = /[\w,\s]{6,20}/;

		if (
			emailReg.test(userData.email) === true &&
			passwordReg.test(userData.password) === true
		) {
			// Убираем красные линии в инпутах
			setAccess({
				email: true,
				password: true,
			});

			const request = fetch(`${url}/public/auth/login`, {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify(userData),
			}).then((res) => res.json());

			request.then((res) => {
				const saved = Object.assign({}, res, { checked: true });

				localStorage.setItem(
					"login",
					JSON.stringify(checkRef.current.checked ? saved : res)
				);

				navigate("/");
			});
		} else {
			setAccess({
				email: emailReg.test(userData.email),
				password: emailReg.test(userData.password),
			});
		}
	};

	/*------------------------------------*/

	return (
		<ToBegin>
			<Auth title="Sign in" button="Login">
				<input
					type="email"
					placeholder="Email"
					className={`auth__input ${access.email ? "" : "err"}`}
					autoComplete="off"
					defaultValue={login?.checked ? login?.username : ""}
					onChange={() =>
						setAccess({ password: access.password, email: true })
					}
					onBlur={(e) => getUserData(e, "email")}
				/>
				<input
					type="text"
					className={`auth__input auth__input_password ${
						access.password ? "" : "err"
					}`}
					placeholder="Password"
					autoComplete="off"
					onChange={() =>
						setAccess({ email: access.email, password: true })
					}
					onBlur={(e) => getUserData(e, "password")}
				/>
				<div className="auth__action">
					<div className="auth__remember">
						<input
							type="checkbox"
							id="remember"
							ref={checkRef}
							name="remember"
						/>
						<label htmlFor="remember">Remember me</label>
					</div>
					<p className="auth__forgot">Forgot</p>
				</div>
				<Button
					onClick={submit}
					type="primary"
					className="auth__button"
				>
					<p>Login</p>
				</Button>
			</Auth>
		</ToBegin>
	);
};

export default memo(Login);
