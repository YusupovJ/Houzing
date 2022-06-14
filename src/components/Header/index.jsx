import React, { memo, useState } from "react";
import { HeaderStyle } from "./style";
import { NavLink, Link, useNavigate } from "react-router-dom";
/*------------------------------------*/

import { ReactComponent as Login } from "../../assets/svg/login.svg";

/*------------------------------------*/

import { navbar, header } from "../../helpers/mock/mock";
import Button from "../Button";

const Header = (props) => {
	const navigate = useNavigate();
	const [menu, setMenu] = useState(false);
	return (
		<HeaderStyle className="header">
			<div className="header__container">
				<Link
					onClick={() => {
						setMenu(false);
						document.body.classList.remove("lock");
					}}
					to="/"
					className="header__logo"
				>
					{header.logo}
					<p>{header.logoText}</p>
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
					<p>{header.buttonText}</p>
					<Login className="header__login-icon" />
				</Button>
			</div>
		</HeaderStyle>
	);
};

export default memo(Header);
