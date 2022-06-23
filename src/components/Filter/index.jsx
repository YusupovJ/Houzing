import React, { memo, useState } from "react";
import { FilterStyle } from "./style";
import Button from "../Button";
import { popoverData } from "../../helpers/utils/popoverData";
import { useLocation, useNavigate } from "react-router-dom";

/* Это компонент фильтра */

/*------------------------------------*/

import { ReactComponent as SearchIcon } from "../../assets/svg/search.svg";
import { ReactComponent as Advanced } from "../../assets/svg/advanced.svg";

/*------------------------------------*/

const Filter = (props) => {
	const location = useLocation();
	const navigate = useNavigate();
	const urlSearch = new URLSearchParams(location.search, [location.search]);

	const [popover, setPopover] = useState(false);

	// Открытие поповера
	const togglePopover = (e) => {
		// Если кликнута кнопка, то
		if (e.target.closest(".filter__button")) {
			setPopover(!popover);
		}
		// Если мы нажимаем на поповер крому кнопки Cansel, то не закрываем
		else if (
			e.target.closest(".popover") &&
			!e.target.closest(".popover__button_cansel")
		) {
			setPopover(true);
		}
		// Если нажимаем на кнопку Cansel то закрываем поповер
		else if (e.target.closest(".popover__button_cansel")) {
			setPopover(false);
		}
		// Если нажимаем на любое место в браузере то закрываем поповер
		else {
			setPopover(false);
		}
	};
	document.body.addEventListener("click", togglePopover);

	/*------------------------------------*/

	// Поиск
	const getSearch = (e) => {
		const url = new URL(window.location.href);
		const { value, name } = e.target;

		// Изменяем url, добавляя ?имя=значение
		url.searchParams.set(name, value);

		// Если значения нет то удалаяем
		if (!value) {
			url.searchParams.delete(name);
		}

		navigate(url.search);
	};

	return (
		<FilterStyle className="filter">
			<div className="filter__container">
				<input
					type="text"
					className="filter__input"
					placeholder="Enter an address or Zip Code"
					// Если при заходе на сайт что-то есть в urlSearch
					// то изменяем его на это значение, иначе ""
					value={urlSearch.get("address") || ""}
					name="address"
					onChange={getSearch}
				/>
				<div type="secondary" className="filter__advanced">
					<Button type="secondary" className="filter__button">
						<Advanced />
						<p>Advanced</p>
					</Button>
				</div>
				<Button type="primary" className="filter__submit">
					<SearchIcon />
					<p>Search</p>
				</Button>
				<div className={`popover ${popover ? "open" : ""}`}>
					<div className="popover__body">
						{popoverData.map((item) => {
							return (
								<React.Fragment key={item.id}>
									<h3 className="popover__title">
										{item.title}
									</h3>
									<div className="popover__inputs">
										{item.inputs.map((input) => {
											return (
												<input
													type="text"
													key={input.id}
													// Если при заходе на сайт что-то есть в urlSearch
													// то изменяем его на это значение, иначе ""
													value={
														urlSearch.get(
															input.name
														) || ""
													}
													name={input.name}
													onChange={getSearch}
													placeholder={
														input.placeholder
													}
												/>
											);
										})}
									</div>
								</React.Fragment>
							);
						})}
					</div>
					<div className="popover__buttons">
						<Button
							type="secondary"
							className="popover__button popover__button_cansel"
						>
							<p>Cansel</p>
						</Button>
						<Button type="primary" className="popover__button">
							<p>Submit</p>
						</Button>
					</div>
				</div>
			</div>
		</FilterStyle>
	);
};

export default memo(Filter);
