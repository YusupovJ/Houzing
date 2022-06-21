import React, { useState, useEffect } from "react";
import { PropertiesStyle } from "./style";
import Filter from "../../components/Filter";
import Card from "../../components/Card";
import Title from "../../components/Title";
import Button from "../../components/Button";
import { ReactComponent as Loading } from "../../assets/svg/loading.svg";

const url = process.env.REACT_APP_PUBLIC_URL;

const Properties = (props) => {
	const [cards, setCards] = useState([]);
	const [cardsMaxLength, setCardsMaxLength] = useState(15);

	// Запрос на сервак
	useEffect(() => {
		const request = fetch(`${url}/v1/houses/list`).then((response) =>
			response.json()
		);
		request
			.then((data) => {
				setCards(data.data);
				console.log(data.data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

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
						{cards.length} <span>results</span>
					</p>
					<div className="results__cards">
						{cards.length !== 0 ? (
							// Показываем первые cardsMaxLength карточек
							cards.slice(0, cardsMaxLength).map((card) => {
								return (
									<Card
										key={card.id}
										address={card.address}
										title={card.description}
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

export default Properties;
