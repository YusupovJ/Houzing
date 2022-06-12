import { ReactComponent as Bed } from "../../assets/svg/bed.svg";
import { ReactComponent as Bath } from "../../assets/svg/bath.svg";
import { ReactComponent as Car } from "../../assets/svg/car.svg";
import { ReactComponent as Rule } from "../../assets/svg/rule.svg";
import slide_1 from "../../assets/img/slide_1.jpg";
import slide_2 from "../../assets/img/slide_2.jpg";
import slide_3 from "../../assets/img/slide_3.jpg";
import product_1 from "../../assets/img/product_1.jpg";
import product_2 from "../../assets/img/product_2.jpg";
import ava_1 from "../../assets/img/ava_1.jpg";
import ava_2 from "../../assets/img/ava_2.png";
import ava_3 from "../../assets/img/ava_3.png";

export let data = {
	navbar: [
		{ id: 1, text: "Home", path: "/" },
		{ id: 2, text: "Properties", path: "/properties" },
		{ id: 3, text: "Contact", path: "/contact" },
	],
	aboutSlides: [
		{
			id: 3,
			bg: slide_1,
			title: "Skyper Pool Partment",
			text: "112 Glenwood Ave Hyde Park, Boston, MA",
			own: [
				{ icon: <Bed />, text: "4 beds" },
				{ icon: <Bath />, text: "5 Baths" },
				{ icon: <Car />, text: "1 Garage" },
				{ icon: <Rule />, text: "1200 Sq Ft" },
			],
			price: "$5,250/mo",
		},
		{
			id: 2,
			bg: slide_2,
			title: "New Apartment Nice Wiew",
			text: "Quincy St, Brooklyn, NY, USA",
			own: [
				{ icon: <Bed />, text: "3 beds" },
				{ icon: <Bath />, text: "2 Baths" },
				{ icon: <Car />, text: "2 Garage" },
				{ icon: <Rule />, text: "800 Sq Ft" },
			],
			price: "$3,500/mo",
		},
		{
			id: 3,
			bg: slide_3,
			title: "Apartment for you",
			text: "112 Glenwood Ave Hyde Park, Boston, MA",
			own: [
				{ icon: <Bed />, text: "6 beds" },
				{ icon: <Bath />, text: "3 Baths" },
				{ icon: <Car />, text: "2 Garage" },
				{ icon: <Rule />, text: "1500 Sq Ft" },
			],
			price: "$7,000/mo",
		},
	],
	recommended: [
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
	],
};
