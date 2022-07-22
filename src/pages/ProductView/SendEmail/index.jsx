import React, { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { SendEmailStyle, OpenModalWindow } from "./style";
import { ReactComponent as User } from "../../../assets/svg/user.svg";
import { useMatchMedia, useShowAlert, bodyToggle } from "../../../helpers/functions/functions";
import { ReactComponent as Message } from "../../../assets/svg/message.svg";
import { ReactComponent as X } from "../../../assets/svg/x.svg";

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const PUBLIC_ID = process.env.REACT_APP_PUBLIC_ID;

const SendEmail = ({ user }) => {
	const emailRef = useRef();
	const showAlert = useShowAlert();
	const media992 = useMatchMedia(991.98);
	const [isFixed, setIsFixed] = useState(false);
	const [reached, setReached] = useState(true);
	const [emailVisible, setEmailVisible] = useState(false);
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

	// Отправляем сообщение на email
	const submit = async (e) => {
		e.preventDefault();
		if (validate().nameCondition && validate().emailCondition && validate().messageCondition) {
			try {
				await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_ID);
				showAlert("success", "Message sended succesfully!");
			} catch (err) {
				showAlert("error", `Error ${err.status}: ${err.text}`);
			}
		} else {
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

	/* ------------------------------------ */

	const emailVisibleHandler = () => {
		setEmailVisible(!emailVisible);
	};

	// Даём паддинги body когда скрываем скролл, чтобы контент не двигался
	useEffect(() => {
		bodyToggle(emailVisible);
	}, [emailVisible]);

	return (
		<>
			{!media992 && (
				<OpenModalWindow onClick={emailVisibleHandler} className="email__show-form-btn">
					<Message />
				</OpenModalWindow>
			)}
			<SendEmailStyle
				ref={emailRef}
				reached={reached}
				isFixed={isFixed}
				className={`email${emailVisible ? " open" : ""}`}
			>
				<div className="email-wrapper">
					{!media992 && <X onClick={emailVisibleHandler} className="email__close-modal-window" />}
					<div className="email__user">
						<div className="email__user-ava">
							<User />
						</div>
						<div className="email__user-name">
							{user?.firstname} <br /> {user?.lastname}
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
								defaultValue={user?.email}
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
		</>
	);
};

export default SendEmail;
