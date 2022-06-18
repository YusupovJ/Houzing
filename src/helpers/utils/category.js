import { ReactComponent as Home } from "../../assets/svg/home.svg";
import { ReactComponent as Apartment } from "../../assets/svg/apartment.svg";
import { ReactComponent as Office } from "../../assets/svg/office.svg";
import { ReactComponent as Villa } from "../../assets/svg/villa.svg";
import category_1 from "../../assets/img/category_1.jpg";
import category_2 from "../../assets/img/category_2.jpg";
import category_3 from "../../assets/img/category_3.jpg";
import category_4 from "../../assets/img/category_4.jpg";

export const category = [
	{
		id: 1,
		icon: <Home />,
		bg: category_1,
		text: "House",
	},
	{
		id: 2,
		icon: <Apartment />,
		bg: category_2,
		text: "Apartment",
	},
	{
		id: 3,
		icon: <Office />,
		bg: category_3,
		text: "Office",
	},
	{
		id: 4,
		icon: <Villa />,
		bg: category_4,
		text: "Villa",
	},
];
