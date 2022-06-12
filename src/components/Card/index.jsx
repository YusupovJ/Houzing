import React from "react";
import { CardStyle } from "./style";
import { ReactComponent as Zoom } from "../../assets/svg/zoom.svg";
import { ReactComponent as Favourite } from "../../assets/svg/favourite.svg";

const Card = ({ image, ava, title, address, ownership, price, sale }) => {
	return (
		<CardStyle className="card">
			<div className="card__image">
				<img src={image} alt="Product" />
				<div className="card__ava">
					<img src={ava} alt="Author" />
				</div>
			</div>
			<div className="card__body">
				<h3 className="card__title">
					{title || "Забыл дать название ._."}
				</h3>
				<p className="card__address">{address || "Сам найди штоле"}</p>
				<ul className="card__ownership">
					{ownership.map((item, index) => {
						return (
							<li className="card__own" key={index}>
								{item[0]}
								<p>{item[1] || "Дофига штук"}</p>
							</li>
						);
					})}
				</ul>
			</div>
			<div className="card__info">
				<div className="card__price">
					<del className="card__sale-price">{sale || null}</del>
					<p className="card__real-price">
						{price || "Денег не хватит"}
					</p>
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
