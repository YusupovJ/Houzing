import React, { useRef, useState } from "react";
import { ProductInfoStyle } from "./style";
import Title from "../../../components/Title";
import { ReactComponent as Favourite } from "../../../assets/svg/favourite.svg";
import { ReactComponent as Share } from "../../../assets/svg/share.svg";
import { ReactComponent as Bed } from "../../../assets/svg/bed.svg";
import { ReactComponent as Bath } from "../../../assets/svg/bath.svg";
import { ReactComponent as Car } from "../../../assets/svg/car.svg";
import { ReactComponent as Ruler } from "../../../assets/svg/rule.svg";
import { ReactComponent as Date } from "../../../assets/svg/date.svg";
import { useMatchMedia } from "../../../helpers/functions/functions";

const ProductInfo = ({ house }) => {
	const media768 = useMatchMedia(767.98);
	const descRef = useRef();
	const [showMore, setShowMore] = useState(true);

	const hanleDescription = () => {
		const cords = descRef.current.getBoundingClientRect().top;
		setShowMore(!showMore);

		// При скрытии описания немножно скролим вверх
		if (window.scrollY > cords && !showMore && !media768) {
			window.scrollTo({
				top: descRef.current.getBoundingClientRect().top + window.scrollY - 200,
				behavior: "smooth",
			});
		}
	};

	return (
		<ProductInfoStyle className="product-view__product-info product-info">
			<div className="product-info__row">
				<Title title={house?.name} className="product-info__text-block">
					{[house?.country, house?.city, house?.region, house?.address].filter((item) => item).join(", ")}
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
			<div className="product-info__row product-info__row_align-center">
				<ul className="product-info__house-details">
					<li className="product-info__house-detail">
						<div className="product-info__detail-icon">
							<Bed />
						</div>
						<p className="product-info__detail-text">{house?.houseDetails?.beds || 0} Beds</p>
					</li>
					<li className="product-info__house-detail">
						<div className="product-info__detail-icon">
							<Bath />
						</div>
						<p className="product-info__detail-text">{house?.houseDetails?.bath || 0} Baths</p>
					</li>
					<li className="product-info__house-detail">
						<div className="product-info__detail-icon">
							<Car />
						</div>
						<p className="product-info__detail-text">{house?.houseDetails?.garage || 0} Garages</p>
					</li>
					<li className="product-info__house-detail">
						<div className="product-info__detail-icon">
							<Ruler />
						</div>
						<p className="product-info__detail-text">{house?.houseDetails?.area || 0} Sq Ft</p>
					</li>
					<li className="product-info__house-detail">
						<div className="product-info__detail-icon">
							<Date />
						</div>
						<p className="product-info__detail-text">Year built: {house?.houseDetails?.yearBuilt || 0}</p>
					</li>
				</ul>
				<div className="product-info__price">
					<del className="product-info__sale-price">${house?.salePrice || 0}/mo</del>
					<p className="product-info__real-price">${house?.price || 0}/mo</p>
				</div>
			</div>
			<article ref={descRef} className="product-info__description description">
				<h3 className="description__title">Description</h3>
				<div className={`description__text ${house?.description?.length > 696 && showMore ? "more" : ""}`}>
					<p>{house?.description}</p>
				</div>
				{house?.description?.length > 696 && (
					<button className="description__show-more" onClick={hanleDescription}>
						{showMore ? "Show more" : "Hide"}
					</button>
				)}
			</article>
		</ProductInfoStyle>
	);
};

export default ProductInfo;
