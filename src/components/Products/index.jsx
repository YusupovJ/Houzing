import React from "react";
import { ProductsStyle } from "./style";
import Title from "../Title";

/*------------------------------------*/

/* Swiper */
import { Swiper } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";

/*------------------------------------*/

const Products = (props) => {
	return (
		<ProductsStyle className="products">
			<div className="products__container">
				<Title className="products__text-block" title={props.title}>
					{props.text}
				</Title>
				<Swiper
					className="products__slider"
					loop={true}
					navigation={true}
					spaceBetween={20}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination, Navigation]}
					breakpoints={{
						0: {
							slidesPerView: 1,
						},
						640: {
							slidesPerView: 2,
						},
						1024: {
							slidesPerView: 3,
						},
					}}
				>
					{props.children}
				</Swiper>
			</div>
		</ProductsStyle>
	);
};

export default Products;
