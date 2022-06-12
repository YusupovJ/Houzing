import React from "react";
import Search from "./Search";
import About from "./About";
import Products from "../../components/Products";
import { SwiperSlide } from "swiper/react";
import { data } from "../../helpers/mock/mock";
import { useMatchMedia } from "../../helpers/functions/functions";
import Card from "../../components/Card";

const Main = (props) => {
	const showSearch = useMatchMedia();
	return (
		<main className="main">
			{showSearch ? <Search /> : null}
			<About />
			<Products
				title={"Recommended"}
				text="Nulla quis curabitur velit volutpat auctor bibendum consectetur sit."
			>
				{data.recommended.map((item, index) => {
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
							></Card>
						</SwiperSlide>
					);
				})}
			</Products>
		</main>
	);
};

export default Main;
