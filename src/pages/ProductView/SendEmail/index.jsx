import React, { useEffect, useRef, useState, useContext } from "react";
import emailjs from "emailjs-com";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { SendEmailStyle } from "./style";
import { Global } from "../../../helpers/context/store";
import { ReactComponent as User } from "../../../assets/svg/user.svg";

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const PUBLIC_ID = process.env.REACT_APP_PUBLIC_ID;

const SendEmail = ({ user }) => {
	const emailRef = useRef();
	const [isFixed, setIsFixed] = useState(false);
	const [reached, setReached] = useState(true);
	const { alerts, setAlerts } = useContext(Global);
	const [success, setSuccess] = useState({
		name: true,
		email: true,
		message: true,
	});

	/* ------------------------------------ */

	const validate = () => {
		const form = [...document.forms[0]];
		const name = form.filter((item) => item.id === "name")[0].value;
		const email = form.filter((item) => item.id === "email")[0].value;
		const message = form.filter((item) => item.id === "message")[0].value;

		let emailReg = /.+@.+\.\w+/;

		const nameCondition = name.length > 0;
		const emailCondition = emailReg.test(email);
		const messageCondition = message.length > 0;

		return { nameCondition, emailCondition, messageCondition };
	};

	/* ------------------------------------ */

	// Отправка формы
	const submit = async (e) => {
		e.preventDefault();

		if (validate().nameCondition && validate().emailCondition && validate().messageCondition) {
			const request = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_ID);

			// Если запрос без ошибок
			if (request.status < 400) {
				setAlerts([
					...alerts,
					{
						type: "success",
						id: Math.random() * 10000000,
						text: "Message sent successfully",
					},
				]);
			} else {
				setAlerts([
					...alerts,
					{
						type: "error",
						id: Math.random() * 10000000,
						text: `Error ${request.status}: ${request.error}`,
					},
				]);
			}
		} else {
			setAlerts([
				...alerts,
				{
					type: "warning",
					id: Math.random() * 10000000,
					text: "Fill in all the fields",
				},
			]);

			setSuccess({
				name: validate().nameCondition,
				email: validate().emailCondition,
				message: validate().messageCondition,
			});
		}
	};

	/* ------------------------------------ */

	// Делаем кастомный position sticky
	const handleScroll = () => {
		// Мерки
		const parent = emailRef?.current;
		const child = parent?.children[0];
		const parentHeight = parent?.clientHeight;
		const childHeight = child?.clientHeight;

		// Координаты
		const cords = parent?.getBoundingClientRect()?.top;
		const childCords = parent?.children[0].getBoundingClientRect().top + window.scrollY;
		const cordsRelParent = childCords - (cords + window.scrollY) + childHeight;

		// Если координаты родителя относительно vp меньше 80, то двигаем элемент
		setIsFixed(cords < 80);
		// Если координаты элемента относительно родителя больше чем высота родителя, то мы достигли
		if (cordsRelParent >= parentHeight) {
			setReached(true);
		}
	};

	/* ------------------------------------ */

	useEffect(() => {
		document.addEventListener("scroll", handleScroll);
		// Если достигло до конца навешиваем обработчик, чтобы оно поднималось
		if (reached) {
			document.addEventListener("scroll", () => {
				setReached(false);
			});
		}
	}, [isFixed, reached]);

	useEffect(() => {
		handleScroll();
	});

	return (
		<SendEmailStyle ref={emailRef} reached={reached} isFixed={isFixed} className="email">
			<div className="email-wrapper">
				<div className="email__user">
					<div className="email__user-ava">
						<User />
					</div>
					<div className="email__user-name">
						{user?.firstname} {user?.lastname}
					</div>
				</div>
				<form onSubmit={submit} className="email__form" action="#">
					<div className="email__inputs">
						<Input
							err={!success.name}
							type="text"
							id="name"
							name="name"
							className="email__input"
							placeholder="Name"
							onBlur={() =>
								setSuccess({
									name: true,
									email: success.email,
									message: success.message,
								})
							}
						/>
						<Input
							err={!success.email}
							type="text"
							id="email"
							name="email"
							className="email__input"
							placeholder="Email"
							onBlur={() =>
								setSuccess({
									name: success.name,
									email: true,
									message: success.message,
								})
							}
						/>
						<Input
							type="text"
							name="send_to"
							tabIndex={-1}
							defaultValue={/*user?.email*/ "jamshudanamana@gmail.com"}
							className="email__input email__input_to"
						/>
						<Input
							err={!success.message}
							name="message"
							placeholder="Message"
							textArea={true}
							id="message"
							className="email__input"
							onBlur={() =>
								setSuccess({
									name: success.name,
									email: success.email,
									message: true,
								})
							}
						></Input>
					</div>
					<Button className="email__button" type="primary">
						<p>Send request</p>
					</Button>
				</form>
			</div>
		</SendEmailStyle>
	);
};

export default SendEmail;
