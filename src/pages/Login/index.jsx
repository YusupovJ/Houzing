import React, { memo, useRef, useState, useEffect } from "react";
import Auth from "../../components/Auth";
import Button from "../../components/Button";
import Input from "../../components/Input";
import ToBegin from "../../components/ToBegin";
import { useNavigate, Link } from "react-router-dom";
import { useShowAlert } from "../../helpers/functions/functions";

const URL = process.env.REACT_APP_PUBLIC_URL;

const Login = (props) => {
	const navigate = useNavigate();
	// Реферал для галочки "сохранения эмейла"
	const checkRef = useRef();
	const showAlert = useShowAlert();
	const login = JSON.parse(localStorage.getItem("login"));

	// Данные с инпутов
	const [userData, setUserData] = useState({
		email: login?.username || "",
		password: "",
	});

	// Разрешение на отправку
	const [access, setAccess] = useState({
		email: true,
		password: true,
	});

	/*------------------------------------*/

	// Получаем данные с инпутов
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

	// Валидация
	const validate = () => {
		let emailReg = /.+@.+\.\w+/;

		let emailCondition = emailReg.test(userData.email) === true;
		let passwordCondition = userData.password.length > 0;

		return { emailCondition, passwordCondition };
	};

	/* ------------------------------------ */

	// Если уже вошли в аккаунт, выкидываем обратно
	useEffect(() => {
		if (login?.authenticationToken) {
			navigate("/");
		}
	});

	/*------------------------------------*/

	const submit = async (e) => {
		if (validate().emailCondition && validate().passwordCondition) {
			try {
				const request = await fetch(`${URL}/public/auth/login`, {
					method: "POST",
					headers: {
						"Content-type": "application/json",
					},
					body: JSON.stringify(userData),
				});

				/* ------------------------------------ */

				if (request.status >= 500) {
					throw new Error(`${request.status}: Internal server error`);
				} else if (request.status === 401) {
					throw new Error(`Password or login entered incorrectly`);
				}

				/* ------------------------------------ */

				const response = await request.json();

				showAlert("success", `You have successfully logged in to ${response.username}`);

				const saved = Object.assign({}, response, { checked: true });
				localStorage.setItem("login", JSON.stringify(checkRef.current.checked ? saved : response));

				navigate("/");
			} catch (error) {
				showAlert("error", error);
			}
		} else {
			setAccess({
				email: validate().emailCondition,
				password: validate().passwordCondition,
			});
		}
	};

	/*------------------------------------*/

	// При загрузки страницы вызываем focus для email, чтобы placeholder
	// поднялся наверх, если там есть значение
	// В компоненте Input я вызвал функцию при фокусе поднятья placeholder
	useEffect(() => {
		document.querySelector(".auth__input > input").focus();
	}, []);

	return (
		<ToBegin>
			<Auth title="Sign in">
				<Input
					type="email"
					placeholder="Email"
					err={!access.email}
					className={`auth__input`}
					autoComplete="off"
					defaultValue={login?.checked ? login?.username : ""}
					onBlur={(e) => {
						getUserData(e, "email");
						setAccess({ email: true, password: access.email });
					}}
				/>
				<Input
					type="text"
					id="password"
					err={!access.password}
					className={`auth__input auth__input_password`}
					placeholder="Password"
					onBlur={(e) => {
						getUserData(e, "password");
						setAccess({ email: access.email, password: true });
					}}
				/>
				<div className="auth__action">
					<div className="auth__remember">
						<input type="checkbox" id="remember" ref={checkRef} name="remember" />
						<label htmlFor="remember">Remember me</label>
					</div>
					<p className="auth__link">Forgot</p>
				</div>
				<Button onClick={submit} type="primary" className="auth__button">
					<p>Login</p>
				</Button>
				<div className="auth__have-not-acc">
					<p>Don't have an account?</p>
					<Link to="/register" className="auth__link">
						Register
					</Link>
				</div>
			</Auth>
		</ToBegin>
	);
};

export default memo(Login);
