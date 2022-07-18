import React, { memo, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { Global } from "../helpers/context/store";
import Header from "../components/Header";
import Main from "../pages/Main";
import Footer from "../components/Footer";
import Properties from "../pages/Properties";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProductView from "../pages/ProductView";
import Alert from "../components/Alert";

const Root = (props) => {
	const { alerts } = useContext(Global) || [];

	// Очищаем массив alertов спустя 4 секунды
	const clearAlertList = (array) => {
		setTimeout(() => array.shift(), 2000);
		return array;
	};

	/* ------------------------------------ */

	return (
		<div className="wrapper">
			<Header />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/properties" element={<Properties />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/properties/:id" element={<ProductView />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
			{/* Вызываем все alertы здесь, чтобы при переходе на другую страницу они оставались */}
			<div className="alerts-wrapper">
				{clearAlertList(alerts)?.map((alert) => {
					return (
						<Alert key={alert?.id} type={alert?.type}>
							{alert?.text}
						</Alert>
					);
				})}
			</div>
		</div>
	);
};

export default memo(Root);
