import { useEffect } from "react";

/* Компонент высшего порядка, чтобы при переходе на страницу оказываться на верху */

const ToBegin = ({ children }) => {
	useEffect(() => {
		document.documentElement.scrollTo({
			top: "0px",
		});
	}, []);

	return children;
};

export default ToBegin;
