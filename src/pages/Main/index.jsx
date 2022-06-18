import React from "react";
import { SwiperSlide } from "swiper/react";
import { comments } from "../../helpers/utils/comments";
import { recommended } from "../../helpers/utils/recommended";
import { category } from "../../helpers/utils/category";
import { useMatchMedia } from "../../helpers/functions/functions";
import Filter from "../../components/Filter";
import About from "./About";
import Products from "../../components/Products";
import ChooseUs from "./ChooseUs";
import Card from "../../components/Card";
import CategoryCard from "./CategoryCard";
import Popular from "./Popular";
import CommentsCard from "./CommentsCard";

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
					return (
						<SwiperSlide key={item.id}>
							<Card
								title={item.title}
								address={item.address}
								image={item.image}
								ava={item.ava}
								price={item.price}
								sale={item.sale}
								houseDetails={item.houseDetails}
							/>
						</SwiperSlide>
					);
				})}
			</Products>
			<ChooseUs />
			<Products
				title={"Category"}
				text="Nulla quis curabitur velit volutpat auctor bibendum consectetur sit."
				elemCount={4}
			>
				{category.map((item) => {
					return (
						<SwiperSlide key={item.id}>
							<CategoryCard
								text={item.text}
								bg={item.bg}
								icon={item.icon}
							/>
						</SwiperSlide>
					);
				})}
			</Products>
			<Popular />
			<Products
				title={"Recent Properties for Rent"}
				text="Nulla quis curabitur velit volutpat auctor bibendum consectetur sit."
			>
				{recommended.map((item) => {
					return (
						<SwiperSlide key={item.id}>
							<Card
								title={item.title}
								address={item.address}
								image={item.image}
								ava={item.ava}
								price={item.price}
								sale={item.sale}
								houseDetails={item.houseDetails}
							/>
						</SwiperSlide>
					);
				})}
			</Products>
			<Products
				title={"Recent Properties for Rent"}
				text="Nulla quis curabitur velit volutpat auctor bibendum consectetur sit."
				bg="#F5F7FC"
				pagination={false}
			>
				{comments.map((item) => {
					return (
						<SwiperSlide key={item.id}>
							<CommentsCard
								name={item.name}
								job={item.job}
								ava={item.ava}
							>
								{item.comment}
							</CommentsCard>
						</SwiperSlide>
					);
				})}
			</Products>
		</main>
	);
};

export default Main;
