import styled from "styled-components";
import { em, rem } from "../../helpers/functions/functions";

export const NotFoundStyle = styled.main`
	padding: 74px 0px 150px;
	.not-found__container {
	}
	.not-found__image {
		width: 100%;
		margin: 0px 0px 88.58px 0px;
	}
	.not-found__body {
		text-align: center;
		font-family: "Cerebri Sans";
	}
	.not-found__title {
		font-weight: 600;
		font-size: ${rem(30)};
		line-height: ${30 / 38};
		color: #0d263b;
		margin: 0px 0px 17.45px 0px;
	}
	.not-found__text {
		margin: 0px 0px 17.55px 0px;
		font-size: ${rem(14)};
		line-height: ${14 / 18};
		line-height: 18px;
		color: #696969;
	}
	.not-found__link {
		font-size: ${rem(14)};
		line-height: ${14 / 18};
		text-decoration-line: underline;
		color: #0061df;
	}
	@media only screen and (max-width: ${em(1439.98)}) {
		padding: 50px 0px 80px;
	}
	@media only screen and (max-width: ${em(767.98)}) {
		padding: 40px 0px 70px;
	}
`;
