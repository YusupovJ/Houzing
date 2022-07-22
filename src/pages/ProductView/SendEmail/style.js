import styled, { css } from "styled-components";
import { em, rem } from "../../../helpers/functions/functions";

const absolute = css`
	position: absolute;
	top: 100%;
	transform: translate(0, -100%);
`;

const fixed = css`
	position: fixed;
	top: 80px;
`;

export const SendEmailStyle = styled.div`
	height: 100%;
	position: relative;
	overflow: hidden;
	.email-wrapper {
		overflow: hidden;
		background: #ffffff;
		padding: 24px;
		border: 1px solid #e6e9ec;
		border-radius: 3px;
		z-index: 1000;
		width: 280px;
	}
	.email__user {
		display: flex;
		align-items: center;
		margin: 0px 0px 25px 0px;
	}
	.email__user-ava {
		margin: 0px 8px 0px 0px;
		width: 52px;
		height: 52px;
		border-radius: 50%;
		overflow: hidden;
		border: 2px solid #fff;
		box-shadow: 0px 0px 10px rgb(13 38 59 / 20%);
		background-color: #fff;
	}
	.email__user-name {
		font-weight: 600;
		font-size: ${rem(16)};
		text-transform: capitalize;
		line-height: 150%;
		color: #0d263b;
	}

	.email__input {
		margin: 0px 0px 24px 0px;
		&_to {
			position: absolute;
			top: 0;
			left: 0;
			transform: translate(-100%, -100%);
		}
	}

	.email__button {
		width: 100%;
	}

	.email__close-modal-window {
		width: 30px;
		cursor: pointer;
		height: 30px;
		padding: 5px;
		position: absolute;
		top: 6px;
		right: 6px;
		stroke: #0d263b;
	}

	@media only screen and (min-width: ${em(991.98)}) {
		.email-wrapper {
			${(props) => {
				if (props.reached) {
					return absolute;
				} else if (props.isFixed) {
					return fixed;
				}
			}}
		}
	}
	@media only screen and (max-width: ${em(991.98)}) {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		visibility: hidden;
		left: 0;
		transition: all 0.5s ease 0s;
		perspective: 400px;
		min-height: 400px;
		overflow-y: auto;
		display: flex;
		justify-content: center;
		padding: 90px 0px;
		.email-wrapper {
			transition: all 0.5s ease 0s;
			height: fit-content;
			transform: translate(0%, -200%) rotateX(60deg);
		}
		&.open {
			visibility: visible;
			background-color: rgba(0, 0, 0, 0.7);
			.email-wrapper {
				transform: translate(0%, 0%) rotateX(0deg);
			}
		}
	}
`;

export const OpenModalWindow = styled.button`
	width: 45px;
	height: 45px;
	padding: 10px;
	position: fixed;
	bottom: 15px;
	left: 15px;
	z-index: 998;
	background-color: #f1f4f7;
	border-radius: 50%;
	transition: all 0.3s ease 0s;
	svg {
		fill: #a4a5a7;
		width: 100%;
		height: 100%;
	}
	&:hover {
		box-shadow: 0px 0px 0px 5px #f5f5f5cc;
		transform: scale(1.05);
	}
	&:active {
		transform: scale(0.95);
	}
`;
