import styled, { css } from "styled-components";
import { rem } from "../../../helpers/functions/functions";

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
		${(props) => {
			if (props.reached) {
				return absolute;
			} else if (props.isFixed) {
				return fixed;
			}
		}}
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
`;
