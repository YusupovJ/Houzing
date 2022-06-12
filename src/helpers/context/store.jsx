import React, { createContext, useContext } from "react";

const Global = createContext();

export const useGlobal = useContext(Global);

const GlobalContext = (props) => {
	const [value, setValue] = useState([]);
	return <Global.Provider value={{ value, setValue }}>{props.children}</Global.Provider>;
};

export default GlobalContext;
