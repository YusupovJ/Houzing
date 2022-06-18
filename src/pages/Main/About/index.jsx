import React, { memo } from "react";
import { AboutStyle } from "./style";
import { aboutSlides } from "../../../helpers/utils/aboutSlides";
import { isMobile } from "../../../helpers/functions/functions";
import { useMatchMedia } from "../../../helpers/functions/functions";
import Filter from "../../../components/Filter";
import Button from "../../../components/Button";

/*------------------------------------*/
/* Swiper */
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";

/*------------------------------------*/

const About = (props) => {
	const showFilter = useMatchMedia();
	return (
		<AboutStyle className="about">
			<div className="about__wrapper">
				<Swiper
					pagination={{
						clickable: true,
					}}
					loop={true}
					navigation={isMobile.any() ? false : true}
					modules={[Pagination, Navigation, Autoplay]}
					autoplay={{
						delay: 4000,
						disableOnInteraction: false,
					}}
					className="about__slider"
				>
					{aboutSlides.map((slide, index) => {
						return (
							<SwiperSlide
								key={index}
								className="about__slide-item"
							>
								<img
									src={slide.bg}
									alt="BG"
									className="about__bg"
								/>
								<div className="about__container">
									<h1 className="about__title">
										{slide.title}
									</h1>
									<p className="about__text">{slide.text}</p>
									<ul className="about__ownerships">
										{slide.own.map((item, index) => {
											return (
												<li
													key={index}
													className="about__own"
												>
													{item.icon}
													<p>{item.text}</p>
												</li>
											);
										})}
									</ul>
									<p className="about__price">
										{slide.price}
									</p>
									<Button className="about__button">
										<p>Read more</p>
									</Button>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
				{showFilter ? null : <Filter />}
			</div>
		</AboutStyle>
	);
};

export default memo(About);
