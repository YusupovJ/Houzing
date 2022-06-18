import React from "react";
import { CategoryCardStyle } from "./style";

const CategoryCard = (props) => {
	return (
		<CategoryCardStyle className="category-card">
			<img src={props.bg} className="category-card__bg" alt="Bg" />
			<div className="category-card__icon">{props.icon}</div>
			<p className="category-card__text">{props.text}</p>
		</CategoryCardStyle>
	);
};

export default CategoryCard;
