import React from "react";
import { PopularStyle } from "./style";
import Button from "../../../components/Button";
import popBg from "../../../assets/img/popBg.jpg";

const Popular = (props) => {
	return (
		<PopularStyle className="popular">
			<img src={popBg} alt="Bg" className="popular__bg" />
			<div className="popular__container">
				<h2 className="popular__title">
					Vermont Farmhouse With Antique Jail Is the Week's Most
					Popular Home
				</h2>
				<Button type="primary" className="popular__button">
					<p>Read more</p>
				</Button>
			</div>
		</PopularStyle>
	);
};

export default Popular;
