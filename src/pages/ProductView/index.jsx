import React, { useEffect, useState, memo } from "react";
import { ProductViewStyle, ContainerRight, ContainerLeft } from "./style";
import { useNavigate, useParams } from "react-router-dom";

import notAvailable from "../../assets/img/notAvailable.png";
import Photos from "./Photos";
import ProductInfo from "./ProductInfo";
import ToBegin from "../../components/ToBegin";
import SendEmail from "./SendEmail";

const URL = process.env.REACT_APP_PUBLIC_URL;

const ProductView = (props) => {
	const params = useParams();
	const navigate = useNavigate();
	const token = JSON.parse(localStorage.getItem("login"))?.authenticationToken;

	/* ------------------------------------ */

	const [house, setHouse] = useState({
		attachments: [
			{ imgPath: notAvailable },
			{ imgPath: notAvailable },
			{ imgPath: notAvailable },
			{ imgPath: notAvailable },
			{ imgPath: notAvailable },
		],
	});
	const { attachments } = house;

	/* ------------------------------------ */

	// Если пользователь вышел из аккаунта в этой странице,
	// то посылаем его на главную страницу
	useEffect(() => {
		if (!token) {
			navigate("/");
		}
	}, [navigate, token]);

	/* ------------------------------------ */

	// Запрос
	useEffect(() => {
		const request = fetch(`${URL}/v1/houses/${params.id}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}).then((res) => res.json());

		request.then((res) => {
			setHouse(res.data);
		});
	}, [params.id, token]);

	/* ------------------------------------ */

	return (
		<ToBegin>
			<ProductViewStyle className="product-view">
				<div className="product-view__container">
					<Photos photos={attachments} other={attachments.slice(5)} />

					{/* -------------------------- */}

					<ContainerLeft>
						<ProductInfo house={house} />
					</ContainerLeft>

					{/* -------------------------- */}

					<ContainerRight>
						<SendEmail user={house?.user} />
					</ContainerRight>
				</div>
			</ProductViewStyle>
		</ToBegin>
	);
};

export default memo(ProductView);
