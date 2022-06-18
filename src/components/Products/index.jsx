import React from "react";
import { ProductsStyle } from "./style";
import Title from "../Title";

/* Шаблон слайдера */

/*------------------------------------*/

/* Swiper */
import { Swiper } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";

/*------------------------------------*/

const Products = (props) => {
	return (
		<ProductsStyle
			bg={props.bg || "white"}
			pagination={props.pagination}
			className="products"
		>
			<div className="products__container">
				<Title className="products__text-block" title={props.title}>
					{props.text}
				</Title>
				<Swiper
					className="products__slider"
					loop={true} // бесконечность
					navigation={true} // стрелки
					spaceBetween={20} // расстояние между слайдами
					pagination={{
						// точки
						clickable: true,
						dynamicBullets: true,
					}}
					modules={[Pagination, Navigation]} // использованые модули
					breakpoints={{
						// Если передаем 4 элемента то количество слайдов в брейкпоинтах увеличиваеться на 1
						0: {
							slidesPerView: props.elemCount === 4 ? 2 : 1,
						},
						640: {
							slidesPerView: props.elemCount === 4 ? 3 : 2,
						},
						1024: {
							slidesPerView: props.elemCount === 4 ? 4 : 3,
						},
					}}
				>
					{/* Передаем в качестве параметров карточки */}
					{props.children}
				</Swiper>
			</div>
		</ProductsStyle>
	);
};

export default Products;
