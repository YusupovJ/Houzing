import React, { useState } from "react";
import { HeaderStyle } from "./style";
import { NavLink, Link, useNavigate } from "react-router-dom";
/*------------------------------------*/

import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { ReactComponent as Login } from "../../assets/svg/login.svg";

/*------------------------------------*/

import { data } from "../../helpers/mock/mock";
import Button from "../Button";

const Header = (props) => {
	const navigate = useNavigate();

	const [menu, setMenu] = useState(false);
	return (
		<HeaderStyle className="header">
			<div className="header__container">
				<Link to="/" className="header__logo">
					<Logo />
					<p>Houzing</p>
				</Link>
				<nav
					className={`header__navigator ${
						menu === true ? "toggled" : "unToggled"
					}`}
				>
					<div className="header__nav-body">
						{data.navbar.map((link) => {
							return (
								<NavLink
									onClick={() => {
										setMenu(false);
										document.body.classList.remove("lock");
									}}
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
						onClick={() => {
							setMenu(!menu);
							if (menu === true)
								document.body.classList.remove("lock");
							else document.body.classList.add("lock");
						}}
						className={`header__burger ${
							menu === true ? "toggled" : "unToggled"
						}`}
					>
						<div></div>
					</div>
				</nav>
				<Button
					onClick={() => navigate("/login")}
					className="header__login"
				>
					<p>Login</p>
					<Login className="header__login-icon" />
				</Button>
			</div>
		</HeaderStyle>
	);
};

export default Header;
