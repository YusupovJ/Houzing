import React from "react";
import Header from "../components/Header";
import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Footer from "../components/Footer";
import Properties from "../pages/Properties";

const Root = (props) => {
	return (
		<div className="wrapper" style={{ marginTop: 64 }}>
			<Header />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/properties" element={<Properties />} />
				<Route path="*" element={<h1>404</h1>} />
			</Routes>
			<Footer />
		</div>
	);
};

export default Root;
