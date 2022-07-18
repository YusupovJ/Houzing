import styled from "styled-components";
import { em, rem } from "../../helpers/functions/functions";

export const AuthStyle = styled.main`
	.auth__container {
		height: 100%;
		display: flex;
		padding: 64px 15px;
	}
	.auth__wrapper {
		padding: 24px 30px 48px;
		background: #ffffff;
		border: 1px solid #e6e9ec;
		box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
		border-radius: 3px;
		margin: 0px auto;
		flex: 0 1 580px;
	}
	.auth__body {
		display: flex;
		flex-direction: column;
	}
	.auth__title {
		font-weight: 600;
		font-size: ${rem(18)};
		line-height: 156%;
		color: #0d263b;
	}
	.auth__button {
		width: 100%;
		margin: 20px 0px 32px 0px;
	}
	.auth__error {
		color: red;
		font-size: ${rem(17)};
		z-index: 10;
		margin: 0px 0px 10px;
	}
	.auth__input {
		margin: 40px 0px 0px 0px;
		.input__placeholder {
			font-family: Montserrat;
			-webkit-text-security: none;
		}
		&_password {
			font-family: text-security-disc;
			color: #818f9b;
			-webkit-text-security: disc;
		}
	}

	.auth__action {
		display: flex;
		justify-content: space-between;
		margin: 16px 0px 10px 0px;
	}

	.auth__remember {
		display: flex;
		align-items: center;
		input {
			margin: 0px 10px 0px 0px;
			cursor: pointer;
		}
		label {
			font-size: ${rem(14)};
			line-height: 143%;
			color: #696969;
			user-select: none;
			cursor: pointer;
		}
	}
	.auth__link {
		font-size: ${rem(16)};
		line-height: 150%;
		text-decoration-line: underline;
		color: #0061df;
		cursor: pointer;
		:hover {
			color: #3d84e1;
		}
	}
	.auth__have-not-acc {
		display: flex;
		margin: 0px auto;
		align-items: center;
		transition: all 0.3s ease 0s;
		p {
			text-align: center;
			margin-right: 4px;
			font-size: 1rem;
			line-height: 150%;
			color: #696969;
		}
	}
	@media only screen and (max-width: ${em(767.98)}) {
		.auth__wrapper {
			padding: 30px 15px;
		}
	}
	@media only screen and (max-width: ${em(424.98)}) {
		.auth__have-not-acc {
			flex-direction: column;
		}
	}
`;
