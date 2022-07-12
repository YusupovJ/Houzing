import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Main from "../pages/Main";
import Footer from "../components/Footer";
import Properties from "../pages/Properties";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProductView from "../pages/ProductView";

const Root = (props) => {
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
		</div>
	);
};

export default memo(Root);
