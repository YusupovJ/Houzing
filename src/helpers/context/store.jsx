import React, { createContext, useState } from "react";

export const Global = createContext();

const GlobalContext = (props) => {
	const [alerts, setAlerts] = useState([]);
	return <Global.Provider value={{ alerts, setAlerts }}>{props.children}</Global.Provider>;
};

export default GlobalContext;
