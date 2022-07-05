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
		gap: 40px;
	}
	.auth__title {
		margin: 0px 0px 44px 0px;
		font-weight: 600;
		font-size: ${rem(18)};
		line-height: 156%;
		color: #0d263b;
	}
	.auth__button {
		width: 100%;
	}
	.auth__input {
		padding: 4px 0px;
		font-size: ${rem(14)};
		line-height: 143%;
		color: #0d263b;
		border-bottom: 2px solid #e6e9ec;
		transition: all 0.3s ease 0s;
		:focus {
			border-bottom: 2px solid #0061df;
		}
		&.err {
			border-bottom: 2px solid red;
		}
		&_password {
			font-family: text-security-disc;
			color: #818f9b;
			-webkit-text-security: disc;
			&::placeholder {
				font-family: Montserrat;
			}
		}
	}
	.auth__action {
		display: flex;
		justify-content: space-between;
	}
	.auth__err {
		color: red;
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
	.auth__forgot {
		font-size: ${rem(16)};
		line-height: 150%;
		text-decoration-line: underline;
		color: #0061df;
		:hover {
			color: #3d84e1;
		}
	}
	@media only screen and (max-width: ${em(767.98)}) {
		.auth__wrapper {
			padding: 30px 15px;
		}
	}
`;
