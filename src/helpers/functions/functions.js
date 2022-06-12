import { useEffect, useState, useRef } from "react";

/*------------------------------------*/

export function rem(num) {
	return num / 16 + "rem";
}

export function em(num, fz = 16) {
	return num / fz + "em";
}

export function per(num, parent) {
	return (num * 100) / parent + "%";
}

/*------------------------------------*/

export let isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
	},
};

/*------------------------------------*/

export const useMatchMedia = (width = 768) => {
	const [toggleChange, setToggleChange] = useState(false);
	const matchMediaRef = useRef(null);

	useEffect(() => {
		matchMediaRef.current = window.matchMedia(`(min-width: ${width}px)`);

		const initialMatch = matchMediaRef.current.matches;

		if (initialMatch) {
			setToggleChange(true);
		} else {
			setToggleChange(false);
		}

		const test = (event) => {
			if (event.matches) {
				setToggleChange(true);
			} else {
				setToggleChange(false);
			}
		};

		matchMediaRef.current.addListener(test);
		return () => {
			matchMediaRef.current.removeListener(test);
		};
	}, [width]);

	// 4. Return whether change happened
	return toggleChange;
};
