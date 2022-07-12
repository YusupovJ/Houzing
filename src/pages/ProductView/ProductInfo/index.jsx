import React from "react";
import { ProductInfoStyle } from "./style";
import Title from "../../../components/Title";
import { ReactComponent as Favourite } from "../../../assets/svg/favourite.svg";
import { ReactComponent as Share } from "../../../assets/svg/share.svg";

const ProductInfo = ({ house }) => {
	return (
		<ProductInfoStyle className="product-view__product-info product-info">
			<div className="product-info__row">
				<Title title={house.name} className="product-info__text-block">
					{[house.country, house.city, house.region, house.address].filter((item) => item).join(", ")}
				</Title>
				<div className="product-info__action">
					<button className="product-info__button">
						<div className="product-info__icon product-info__icon_share">
							<Share />
						</div>
						<p>Share</p>
					</button>
					<button className="product-info__button">
						<div className="product-info__icon product-info__icon_fav">
							<Favourite />
						</div>
						<p>Save</p>
					</button>
				</div>
			</div>
		</ProductInfoStyle>
	);
};

export default ProductInfo;
