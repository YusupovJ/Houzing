import React, { useState, useEffect, memo } from "react";
import { PropertiesStyle } from "./style";
import { useLocation } from "react-router-dom";
import Filter from "../../components/Filter";
import Card from "../../components/Card";
import Title from "../../components/Title";
import Button from "../../components/Button";
import { ReactComponent as Loading } from "../../assets/svg/loading.svg";
import { ReactComponent as RequestNotFound } from "../../assets/svg/requestNotFound.svg";

const url = process.env.REACT_APP_PUBLIC_URL;

const Properties = (props) => {
	let location = useLocation();
	const [cards, setCards] = useState([]);
	const [cardsMaxLength, setCardsMaxLength] = useState(15);

	// Запрос на сервак
	useEffect(() => {
		const request = fetch(`${url}/v1/houses/list${location.search}`).then(
			(response) => response.json()
		);
		request
			.then((data) => {
				setCards(data.data || ["nothing"]);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [location.search]);

	// Добавляем по 15 карточек при нажатии кнопки showMore
	const showMore = () => {
		setCardsMaxLength(cardsMaxLength + 16);
	};

	return (
		<PropertiesStyle className="properties">
			<Filter />
			<section className="properties__results results">
				<div className="results__container">
					<Title title="Properties" className="results__text-block">
						Nulla quis curabitur velit volutpat auctor bibendum
						consectetur sit.
					</Title>
					<p className="results__count">
						{cards[0] === "nothing" ? 0 : cards.length}
						<span> results</span>
					</p>
					<div className="results__cards">
						{/* 
							Пока данные приходят с сервера выводим загрузку, потом данные.
							Но если нет данных то выводим, что ничего не найдено
						*/}
						{cards[0] === "nothing" ? (
							<div className="results__not-found">
								<RequestNotFound />
								<h3>
									Nothing was found for your request {"("}
								</h3>
							</div>
						) : cards.length !== 0 ? (
							// Показываем первые cardsMaxLength карточек
							cards.slice(0, cardsMaxLength).map((card) => {
								return (
									<Card
										key={card.id}
										address={[
											card.country,
											card.region,
											card.city,
											card.address,
										]
											.filter((item) => item)
											.join(",")}
										title={card.name || "none"}
										image={card.attachments[0]?.imgPath}
										houseDetails={card.houseDetails}
										sale={card.salePrice}
										price={card.price}
										favourite={card.favorite}
									/>
								);
							})
						) : (
							<Loading className="results__loading" />
						)}
					</div>
				</div>
				{/* Если количество карточек меньше ограничения, то не показываем кнопку */}
				{cards.length <= cardsMaxLength ? null : (
					<Button
						type="primary"
						onClick={showMore}
						className="results__button"
					>
						<p>Show More</p>
					</Button>
				)}
			</section>
		</PropertiesStyle>
	);
};

export default memo(Properties);
