import React from "react";
import { CategoryCardStyle } from "./style";
import category_1 from "../../../assets/img/category_1.jpg";
import { ReactComponent as Home } from "../../../assets/svg/home.svg";

const CategoryCard = (props) => {
	return (
		<CategoryCardStyle
			to={props.to || `/properties?category_id=${props.id}`}
			className="category-card"
		>
			<img
				src={props.bg || category_1}
				className="category-card__bg"
				alt="Bg"
			/>
			<div className="category-card__icon">{props.icon || <Home />}</div>
			<p className="category-card__text">{props.text}</p>
		</CategoryCardStyle>
	);
};

export default CategoryCard;
