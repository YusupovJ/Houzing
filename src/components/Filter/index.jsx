import React, { memo, useState } from "react";
import { FilterStyle } from "./style";
import Button from "../Button";
import { filter } from "../../helpers/mock/mock";

/*------------------------------------*/

import { ReactComponent as SearchIcon } from "../../assets/svg/search.svg";
import { ReactComponent as Advanced } from "../../assets/svg/advanced.svg";

/*------------------------------------*/

const Filter = (props) => {
	const [popover, setPopover] = useState(false);

	const togglePopover = (e) => {
		if (e.target.closest(".filter__button")) {
			setPopover(!popover);
		} else if (
			e.target.closest(".popover") &&
			!e.target.closest(".popover__button_cansel")
		) {
			setPopover(true);
		} else if (e.target.closest(".popover__button_cansel")) {
			setPopover(false);
		} else {
			setPopover(false);
		}
	};
	document.body.addEventListener("click", togglePopover);

	return (
		<FilterStyle className="filter">
			<div className="filter__container">
				<input
					type="text"
					className="filter__input"
					placeholder={filter.searchPlaceholder}
				/>
				<div type="white" className="filter__filter">
					<Button type="white" className="filter__button">
						<Advanced />
						<p>{filter.popoverButtonText}</p>
					</Button>
				</div>
				<Button type="blue" className="filter__submit">
					<SearchIcon />
					<p>{filter.searchButtonText}</p>
				</Button>
				<div className={`popover ${popover ? "open" : ""}`}>
					<div className="popover__body">
						{filter.popover.map((item) => {
							if (!item.noInput) {
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
														placeholder={
															input.placeholder
														}
													/>
												);
											})}
										</div>
									</React.Fragment>
								);
							}
							return null;
						})}
					</div>
					<div className="popover__buttons">
						<Button
							type="white"
							className="popover__button popover__button_cansel"
						>
							<p>{filter.popover[0].canselButton}</p>
						</Button>
						<Button type="blue" className="popover__button">
							<p>{filter.popover[0].submitButton}</p>
						</Button>
					</div>
				</div>
			</div>
		</FilterStyle>
	);
};

export default memo(Filter);
