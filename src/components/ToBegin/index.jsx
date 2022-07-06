import { useEffect } from "react";

const ToBegin = ({ children }) => {
    useEffect(() => {
        document.documentElement.scrollTo({
            top: "0px",
        });
    }, []);

    return children;
};

export default ToBegin;
