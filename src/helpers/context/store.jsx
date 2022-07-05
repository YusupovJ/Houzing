import React, { createContext, useState } from "react";

export const Global = createContext();

const GlobalContext = (props) => {
    const [value, setValue] = useState([]);
    return (
        <Global.Provider value={{ value, setValue }}>
            {props.children}
        </Global.Provider>
    );
};

export default GlobalContext;
