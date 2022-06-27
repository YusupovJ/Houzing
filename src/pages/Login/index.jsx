import React, { memo, useRef, useState } from "react";
import Auth from "../../components/Auth";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const url = process.env.REACT_APP_PUBLIC_URL;

const Login = (props) => {
	const navigate = useNavigate();
	const checkRef = useRef();

	// Для будущей проверки при нажатии на кнопку submit
	const [userData, setUserData] = useState({
		email: "",
		password: "",
	});

	// Разрешение отправки
	const [access, setAccess] = useState({
		email: true,
		password: true,
	});

	/*------------------------------------*/

	// При событии blur располагаем данные с инпутов в стейты
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
		// RegEx
		let emailReg =
			/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		let passwordReg = /[\w,\s]{6,20}/;

		// Если совпадения есть то отправляем запрос
		if (
			emailReg.test(userData.email) === true &&
			passwordReg.test(userData.password) === true
		) {
			// Убираем красные линии в инпутах
			setAccess({
				email: true,
				password: true,
			});

			// Запрос на сервак
			const request = fetch(`${url}/public/auth/login`, {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify(userData),
			}).then((res) => res.json());

			// Загружаем в локал сторейдж данные.Стираем имя если не нажат чекбокс
			request.then((res) => {
				localStorage.setItem(
					"userData",
					JSON.stringify(
						checkRef.current.checked
							? res
							: {
									authenticationToken:
										res.authenticationToken,
									expirationData: res.expirationData,
									refreshToken: res.refreshToken,
							  }
					)
				);
				// Редирект на главную страницу
				navigate("/");
			});
		} else {
			// При ошибке валидации устанавливаем соответсвующие значения
			setAccess({
				email: emailReg.test(userData.email),
				password: emailReg.test(userData.password),
			});
		}
	};

	/*------------------------------------*/

	return (
		<Auth title="Sign in" button="Login">
			<input
				type="email"
				placeholder="Email"
				className={`auth__input ${access.email ? "" : "err"}`}
				name="email"
				autoComplete="off"
				// Если сохранился, ставим в инпут
				defaultValue={
					JSON.parse(localStorage.getItem("userData"))?.username
				}
				// При введении данных убираем warning
				onChange={() =>
					setAccess({ password: access.password, email: true })
				}
				onBlur={(e) => getUserData(e, "email")}
			/>
			<input
				type="password"
				className={`auth__input ${access.password ? "" : "err"}`}
				name="password"
				placeholder="Password"
				autoComplete="off"
				// При введении данных убираем warning
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
				<a href="" className="auth__forgot">
					Forgot
				</a>
			</div>
			<Button onClick={submit} type="primary" className="auth__button">
				<p>Login</p>
			</Button>
		</Auth>
	);
};

export default memo(Login);
