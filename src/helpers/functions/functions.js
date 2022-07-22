import { useEffect, useState, useRef, useContext } from "react";
import { Global } from "../context/store";

/*------------------------------------*/

// Конвертация из px в rem em и %

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

// Проверка на тачскрин

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

// Медиа запросы

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

	return toggleChange;
};

/* ------------------------------------ */

// Вызов алерта

export const useShowAlert = () => {
	const { alerts, setAlerts } = useContext(Global);

	return (type, text) => {
		setAlerts([
			...alerts,
			{
				type,
				text,
				id: Math.random() * 10000000000000 - Math.random() * 10000000000000,
			},
		]);
	};
};

/* ------------------------------------ */

// Скрываем полосу прокрутки и даем паддинги, чтобы контент не шатался

export const bodyToggle = (state) => {
	const scrollWidth = window.innerWidth - document.documentElement.clientWidth;

	const bodyLock = () => {
		document.body.classList.add("lock");
		document.querySelector(".header__container").style.marginRight = `${scrollWidth}px`;
		document.body.style.marginRight = `${scrollWidth}px`;
	};

	const bodyUnlock = () => {
		document.body.classList.remove("lock");
		document.body.style.marginRight = `0px`;
		document.querySelector(".header__container").style.marginRight = `0px`;
	};

	if (state) {
		bodyLock();
	} else {
		bodyUnlock();
	}
};
