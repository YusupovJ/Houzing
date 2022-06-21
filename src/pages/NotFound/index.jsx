import React from "react";
import { NotFoundStyle } from "./style";
import notFound from "../../assets/img/notFound.png";
import { Link } from "react-router-dom";

const NotFound = (props) => {
	return (
		<NotFoundStyle className="not-found">
			<div className="not-found__container">
				<img
					src={notFound}
					alt="404 Page Not Found("
					className="not-found__image"
				/>
				<div className="not-found__body">
					<h1 className="not-found__title">Ohh! Page Not Found</h1>
					<p className="not-found__text">
						We can’t seem to find the page you’re looking for
					</p>
					<Link to="/" className="not-found__link">
						Back to home
					</Link>
				</div>
			</div>
		</NotFoundStyle>
	);
};

export default NotFound;
