import React from "react";
import Header from "../components/Header";
import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Footer from "../components/Footer";
import Properties from "../pages/Properties";
import NotFound from "../pages/NotFound";

const Root = (props) => {
	return (
		<div className="wrapper" style={{ marginTop: 64 }}>
			<Header />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/properties" element={<Properties />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default Root;
