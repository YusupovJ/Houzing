import React, { memo, useState, useRef } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { HeaderStyle } from "./style";

/*------------------------------------*/

import { ReactComponent as Login } from "../../assets/svg/login.svg";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";

/*------------------------------------*/

import { navbar } from "../../helpers/utils/navbar";
import Button from "../Button";

const url = process.env.REACT_APP_PUBLIC_URL;

const Header = (props) => {
	const header = useRef();
	const navigate = useNavigate();
	const [menu, setMenu] = useState(false);
	const userInfo = JSON.parse(localStorage.getItem("userData")) || {};

	// Если высота устройства меньше 768px, а ширина больше 768px,
	// то если меню будет открыто в вертикальном положении и пользователь перевернет
	// телефон на горизонтальное положение, то у body останется класс lock
	if (document.documentElement.clientWidth > 768 && menu) {
		setMenu(false);
		document.body.classList.remove("lock");
	}

	// При переходе на другую страницу закрываем меню бургер
	const closeBurgerOnRedirect = () => {
		setMenu(false);
		document.body.classList.remove("lock");
	};

	// Открытие и закрытие меню бургер
	const toggleBurger = () => {
		setMenu(!menu);
		if (menu === true) document.body.classList.remove("lock");
		else document.body.classList.add("lock");
	};

	// Выход из аккаунта
	const logout = () => {
		const request = fetch(`${url}/public/logout`, {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({
				refreshToken: userInfo?.refreshToken,
				username: userInfo?.username,
			}),
		}).then((res) => res);
		request.then((data) => {
			localStorage.setItem(
				"userData",
				JSON.stringify({
					username: userInfo?.username,
					checked: userInfo?.checked || false,
				})
			);
		});
	};

	return (
		<HeaderStyle ref={header} className="header">
			<div className="header__container">
				<Link
					onClick={closeBurgerOnRedirect}
					to="/"
					className="header__logo"
				>
					<Logo />
					<p>Houzing</p>
				</Link>
				<nav
					className={`header__navigator ${
						menu === true ? "toggled" : "unToggled"
					}`}
				>
					<div className="header__nav-body">
						{navbar.map((link) => {
							return (
								<NavLink
									onClick={closeBurgerOnRedirect}
									className="header__link"
									key={link.id}
									to={link.path}
								>
									{link.text}
								</NavLink>
							);
						})}
					</div>
					<div
						onClick={toggleBurger}
						className={`header__burger ${
							menu === true ? "toggled" : "unToggled"
						}`}
					>
						<div></div>
					</div>
				</nav>
				{/* 
					Так как Button это компонент мы не можем сделать его Link.
					Поэтом используем navigate
				*/}
				{userInfo?.authenticationToken ? (
					<Button onClick={logout} className="header__login">
						<p>Logout</p>
						<Login className="header__login-icon" />
					</Button>
				) : (
					<Button
						onClick={() => navigate("/login")}
						className="header__login"
					>
						<p>Login</p>
						<Login className="header__login-icon" />
					</Button>
				)}
			</div>
		</HeaderStyle>
	);
};

export default Header;
