import React, { useState } from "react";
import { GalleryStyle } from "./style";
import { ReactComponent as X } from "../../../assets/svg/x.svg";

/* Галерия */

/*------------------------------------*/

/* Swiper */

import { SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

/*------------------------------------*/

const Gallery = (props) => {
	const [closing, setClosing] = useState("");
	const pagination = {
		clickable: true,
		type: "fraction",
		renderFraction: function (current, total) {
			return `<span class=${current}></span> in <span class=${total}></span> `;
		},
	};

	const handleClosingGallery = () => {
		setClosing("closing");
		props.closeGallery();
	};

	document.addEventListener("keydown", (e) => {
		if (e.code === "Escape") {
			handleClosingGallery();
		}
	});

	return (
		<GalleryStyle
			className={`product-view__gallery gallery ${closing}`}
			initialSlide={props.index}
			pagination={pagination}
			navigation
			effect={"fade"}
			modules={[EffectFade, Pagination, Navigation]}
		>
			{props?.photos?.map((photo, index) => {
				return (
					<SwiperSlide key={index} className="gallery__slide">
						<img src={photo.imgPath} alt="Slide" />
					</SwiperSlide>
				);
			})}
			<div onClick={handleClosingGallery} className="gallery__close">
				<X />
			</div>
		</GalleryStyle>
	);
};

export default Gallery;
