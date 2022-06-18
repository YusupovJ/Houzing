import product_1 from "../../assets/img/product_1.jpg";
import product_2 from "../../assets/img/product_2.jpg";
import ava_1 from "../../assets/img/ava_1.jpg";
import ava_2 from "../../assets/img/ava_2.png";
import ava_3 from "../../assets/img/ava_3.png";\
import { ReactComponent as Bed } from "../../assets/svg/bed.svg";
import { ReactComponent as Bath } from "../../assets/svg/bath.svg";
import { ReactComponent as Car } from "../../assets/svg/car.svg";
import { ReactComponent as Rule } from "../../assets/svg/rule.svg";

export const recommended = [
	{
		id: 1,
		image: product_1,
		ava: ava_1,
		title: "New Apartment Nice Wiew",
		address: "Quincy St, Brooklyn, NY, USA",
		ownership: [
			[<Bed />, "4 Beds"],
			[<Bath />, "5 Baths"],
			[<Car />, "1 Garage"],
			[<Rule />, "1200 Sq Ft"],
		],
		price: "$7,500/mo",
		sale: "$2,800/mo",
	},
	{
		id: 2,
		image: product_2,
		ava: ava_2,
		title: "New Apartment Nice Wiew",
		address: "Quincy St, Brooklyn, NY, USA",
		ownership: [
			[<Bed />, "6 Beds"],
			[<Bath />, "3 Baths"],
			[<Car />, "2 Garage"],
			[<Rule />, "1500 Sq Ft"],
		],
		price: "$4,000/mo",
		sale: "$1,800/mo",
	},
	{
		id: 3,
		image: product_1,
		ava: ava_3,
		title: "New Apartment Nice Wiew",
		address: "Quincy St, Brooklyn, NY, USA",
		ownership: [
			[<Bed />, "19 Beds"],
			[<Bath />, "8 Baths"],
			[<Car />, "5 Garage"],
			[<Rule />, "2000 Sq Ft"],
		],
		price: "$10,000/mo",
		sale: "$5,800/mo",
	},
	{
		id: 4,
		image: product_2,
		ava: ava_1,
		title: "New Apartment Nice Wiew",
		address: "Quincy St, Brooklyn, NY, USA",
		ownership: [
			[<Bed />, "2 Beds"],
			[<Bath />, "1 Baths"],
			[<Car />, "3 Garage"],
			[<Rule />, "900 Sq Ft"],
		],
		price: "$1,500/mo",
		sale: "$800/mo",
	},
];
