import React from "react";
import Header from "../components/Header";
import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main";

const Root = (props) => {
	return (
		<div className="wrapper">
			<Header />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="*" element={<h1>404</h1>} />
			</Routes>
		</div>
	);
};

export default Root;
