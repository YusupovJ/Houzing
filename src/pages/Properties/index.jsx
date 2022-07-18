import React, { useState, useEffect, memo, useContext } from "react";
import { PropertiesStyle } from "./style";
import { useLocation } from "react-router-dom";
import Filter from "../../components/Filter";
import Card from "../../components/Card";
import Title from "../../components/Title";
import Button from "../../components/Button";
import { ReactComponent as Loading } from "../../assets/svg/loading.svg";
import ToBegin from "../../components/ToBegin";
import requestNotFound from "../../assets/img/requestNotFound.png";
import { Global } from "../../helpers/context/store";

const URL = process.env.REACT_APP_PUBLIC_URL;

/* Компонент фильтра */

const Properties = (props) => {
	const location = useLocation();
	const [cards, setCards] = useState([]);
	const [cardsMaxLength, setCardsMaxLength] = useState(15);
	const { alerts, setAlerts } = useContext(Global);

	const token = JSON.parse(localStorage.getItem("login"))?.authenticationToken;

	/* ------------------------------------ */

	useEffect(() => {
		const request = fetch(`${URL}/v1/houses/list${location.search}`).then((response) => response.json());
		request.then((data) => {
			setCards(data.data || ["nothing"]);
			if (data.status >= 400) {
				setAlerts([
					...alerts,
					{
						type: "error",
						id: Math.random() * 1000000,
						text: `Error ${data.status}: ${data?.error}`,
					},
				]);
			}
		});
	}, [location.search, alerts, setAlerts]);

	/* ------------------------------------ */

	const showMore = () => {
		setCardsMaxLength(cardsMaxLength + 16);
	};

	/* ------------------------------------ */

	return (
		<ToBegin>
			<PropertiesStyle
				className="properties"
				// Если одна или две карточки делаем максимальную ширину карточки 380px
				// Последние два условия для того, чтобы максимальной ширины не было
				// при загрузки и когда ничего не найдено
				cardsLength={cards.length < 3 && cards.length !== 0 && cards[0] !== "nothing"}
			>
				<Filter />
				<section className="properties__results results">
					<div className="results__container">
						<Title title="Properties" className="results__text-block">
							Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
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
									<img src={requestNotFound} alt="Request Not Found" />
									<h3>
										Nothing was found for <br /> your request {"("}
									</h3>
								</div>
							) : cards.length !== 0 ? (
								// Показываем первые cardsMaxLength карточек
								cards.slice(0, cardsMaxLength).map((card) => {
									return (
										<Card
											to={token ? `/properties/${card.id}` : "/login"}
											key={card.id}
											address={[card.country, card.region, card.city, card.address]
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
								<div className="results__loading">
									<Loading />
								</div>
							)}
						</div>
					</div>
					{cards.length <= cardsMaxLength ? null : (
						<Button type="primary" onClick={showMore} className="results__button">
							<p>Show More</p>
						</Button>
					)}
				</section>
			</PropertiesStyle>
		</ToBegin>
	);
};

export default memo(Properties);
