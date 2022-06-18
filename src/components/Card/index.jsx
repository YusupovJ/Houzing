import React from "react";
import { CardStyle } from "./style";
import notAvailable from "../../assets/img/notAvailable.png";
import user from "../../assets/svg/user.svg";
import { ReactComponent as Zoom } from "../../assets/svg/zoom.svg";
import { ReactComponent as Favourite } from "../../assets/svg/favourite.svg";
import { ReactComponent as Bed } from "../../assets/svg/bed.svg";
import { ReactComponent as Bath } from "../../assets/svg/bath.svg";
import { ReactComponent as Car } from "../../assets/svg/car.svg";
import { ReactComponent as Rule } from "../../assets/svg/rule.svg";

/* Это шаблон карточки товара */

const Card = ({ image, ava, title, address, houseDetails, price, sale }) => {
	return (
		<CardStyle className="card">
			<div className="card__type card__type_featured">Featured</div>
			<div className="card__type card__type_for-sale">For Sale</div>
			<div className="card__image">
				<img src={image || notAvailable} alt="Product" />
				<div className="card__ava">
					<img src={ava || user} alt="Author" />
				</div>
			</div>
			<div className="card__body">
				<h3 className="card__title">{title || "Without name"}</h3>
				<p className="card__address">{address || "Without address"}</p>
				<ul className="card__ownership">
					<li className="card__own">
						<Bed />
						<p>{houseDetails?.beds || 0} Beds</p>
					</li>
					<li className="card__own">
						<Bath />
						<p>{houseDetails?.bath || 0} Baths</p>
					</li>
					<li className="card__own">
						<Car />
						<p>{houseDetails?.garage || 0} Garage</p>
					</li>
					<li className="card__own">
						<Rule />
						<p>{houseDetails?.area || 0} Sq Ft</p>
					</li>
				</ul>
			</div>
			<div className="card__info">
				<div className="card__price">
					<del className="card__sale-price">${sale || 0}/mo</del>
					<p className="card__real-price">${price || 0}/mo</p>
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
