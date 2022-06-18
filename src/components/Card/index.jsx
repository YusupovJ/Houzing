import React from "react";
import { CardStyle } from "./style";
import { ReactComponent as Zoom } from "../../assets/svg/zoom.svg";
import { ReactComponent as Favourite } from "../../assets/svg/favourite.svg";

/* Это шаблон карточки товара */

const Card = ({ image, ava, title, address, ownership, price, sale }) => {
	return (
		<CardStyle className="card">
			<div className="card__type card__type_featured">Featured</div>
			<div className="card__type card__type_for-sale">For Sale</div>
			<div className="card__image">
				<img src={image} alt="Product" />
				<div className="card__ava">
					<img src={ava} alt="Author" />
				</div>
			</div>
			<div className="card__body">
				<h3 className="card__title">{title}</h3>
				<p className="card__address">{address}</p>
				<ul className="card__ownership">
					{ownership.map((item, index) => {
						return (
							<li className="card__own" key={index}>
								{item[0]}
								<p>{item[1]}</p>
							</li>
						);
					})}
				</ul>
			</div>
			<div className="card__info">
				<div className="card__price">
					<del className="card__sale-price">{sale}</del>
					<p className="card__real-price">{price}</p>
				</div>
				<div className="card__action">
					<button className="card__zoom">
						<Zoom />
					</button>
					<button className="card__fav">
						<Favourite />
					</button>
				</div>
			</div>
		</CardStyle>
	);
};

export default Card;
