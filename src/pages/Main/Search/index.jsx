import React, { memo, useState } from "react";
import { SearchStyle } from "./style";
import Button from "../../../components/Button";

/*------------------------------------*/

import { ReactComponent as SearchIcon } from "../../../assets/svg/search.svg";
import { ReactComponent as Advanced } from "../../../assets/svg/advanced.svg";

/*------------------------------------*/

const Search = (props) => {
    const [popover, setPopover] = useState(false);

    const togglePopover = (e) => {
        if (e.target.closest(".search__button")) {
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
        <SearchStyle className="search">
            <div className="search__container">
                <input
                    type="text"
                    className="search__input"
                    placeholder="Enter an address, neighborhood, city, or ZIP code"
                />
                <div type="white" className="search__filter">
                    <Button type="white" className="search__button">
                        <Advanced />
                        <p>Advanced</p>
                    </Button>
                </div>
                <Button type="blue" className="search__submit">
                    <SearchIcon />
                    <p>Search</p>
                </Button>
                <div className={`popover ${popover ? "open" : ""}`}>
                    <div className="popover__body">
                        <h3 className="popover__title">Address</h3>
                        <div className="popover__inputs">
                            <input type="text" placeholder="Country" />
                            <input type="text" placeholder="Region" />
                            <input type="text" placeholder="City" />
                            <input type="text" placeholder="Zip code" />
                        </div>
                        <h3 className="popover__title">Apartment info</h3>
                        <div className="popover__inputs">
                            <input type="text" placeholder="Rooms" />
                            <input type="text" placeholder="Size" />
                            <input type="text" placeholder="Sort" />
                        </div>
                        <h3 className="popover__title">Price</h3>
                        <div className="popover__inputs">
                            <input type="text" placeholder="Min price" />
                            <input type="text" placeholder="Max price" />
                        </div>
                    </div>
                    <div className="popover__buttons">
                        <Button
                            type="white"
                            className="popover__button popover__button_cansel"
                        >
                            <p>Cansel</p>
                        </Button>
                        <Button type="blue" className="popover__button">
                            <p>Submit</p>
                        </Button>
                    </div>
                </div>
            </div>
        </SearchStyle>
    );
};

export default memo(Search);
