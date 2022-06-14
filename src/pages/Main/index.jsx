import React from "react";
import Filter from "../../components/Filter";
import About from "./About";
import Products from "../../components/Products";
import { SwiperSlide } from "swiper/react";
import { recommended } from "../../helpers/mock/mock";
import { useMatchMedia } from "../../helpers/functions/functions";
import Card from "../../components/Card";

const Main = (props) => {
	const showFilter = useMatchMedia();
	return (
		<main className="main">
			{showFilter ? <Filter /> : null}
			<About />
			<Products
				title={"Recommended"}
				text="Nulla quis curabitur velit volutpat auctor bibendum consectetur sit."
			>
				{recommended.map((item) => {
					if (!item.noCard) {
						return (
							<SwiperSlide key={item.id}>
								<Card
									title={item.title}
									address={item.address}
									image={item.image}
									ava={item.ava}
									price={item.price}
									sale={item.sale}
									ownership={item.ownership}
								/>
							</SwiperSlide>
						);
					}
					return null;
				})}
			</Products>
		</main>
	);
};

export default Main;
