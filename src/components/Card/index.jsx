import React, { useState } from "react";
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

const Card = (props) => {
	const [favourited, setFavourited] = useState(
		props.favourite ? true : false
	);

	return (
		<CardStyle className="card" to={props?.to || ""}>
			<div className="card__type card__type_featured">Featured</div>
			<div className="card__type card__type_for-sale">For Sale</div>
			<div className="card__image">
				<img src={props.image || notAvailable} alt="Product" />
				<div className="card__ava">
					<img src={props.ava || user} alt="Author" />
				</div>
			</div>
			<div className="card__body">
				<h3 className="card__title">{props.title || "Without name"}</h3>
				<p className="card__address">
					{props.address || "Without address"}
				</p>
				<ul className="card__ownership">
					<li className="card__own">
						<Bed />
						<p>{props.houseDetails?.beds || 0} Beds</p>
					</li>
					<li className="card__own">
						<Bath />
						<p>{props.houseDetails?.bath || 0} Baths</p>
					</li>
					<li className="card__own">
						<Car />
						<p>{props.houseDetails?.garage || 0} Garage</p>
					</li>
					<li className="card__own">
						<Rule />
						<p>{props.houseDetails?.area || 0} Sq Ft</p>
					</li>
				</ul>
			</div>
			<div className="card__info">
				<div className="card__price">
					<del className="card__sale-price">
						${props.sale || 0}/mo
					</del>
					<p className="card__real-price">${props.price || 0}/mo</p>
				</div>
				<div className="card__action">
					<button className="card__zoom">
						<Zoom />
					</button>
					<button
						className={`card__fav ${favourited ? "fav" : ""}`}
						onClick={() => setFavourited(!props.favourited)}
					>
						<Favourite />
					</button>
				</div>
			</div>
		</CardStyle>
	);
};

export default Card;
