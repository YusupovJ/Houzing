import styled from "styled-components";
import { em, per, rem } from "../../helpers/functions/functions";

export const PropertiesStyle = styled.main`
	.results__text-block {
		margin: 64px 0px 70px;
	}
	.results__container {
		max-width: 1190px;
		padding: 0px 5px;
	}
	.results__cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(310px, ${({ cardsLength }) => (cardsLength ? "380px" : "1fr")}));
		gap: 20px ${per(20, 1180)};
		margin: 0px 0px 48px 0px;
	}
	.results__count {
		font-size: ${rem(14)};
		line-height: 143%;
		color: #0d263b;
		margin: 0px 0px ${em(16)} 0px;
		span {
			color: #696969;
		}
	}
	.results__button {
		margin: 0px auto 96px;
		padding: 12px 84px;
	}
	.results__not-found {
		display: flex;
		align-items: center;
		width: 100%;
		justify-content: center;
		margin: 0px 0px 104.5px 0px;
		gap: 15px;
		img {
			max-width: 200px;
			object-fit: cover;
		}
		h3 {
			font-family: "Cerebri Sans";
			font-size: ${rem(20)};
		}
	}
	.results__loading {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		margin: 0px 0px 130px;
		position: relative;
		svg {
			flex-basis: 100px;
			height: 100px;
		}
	}
	@media only screen and (max-width: ${em(767.98)}) {
		.results__text-block {
			margin: 64px 0px 32px;
		}
		.filter {
			position: relative;
			z-index: 10;
			bottom: 0;
			left: 0;
			transform: translate(0, 0);
		}
		.results__button {
			margin: 0px auto 64px;
		}
	}
	@media only screen and (max-width: ${em(574.98)}) {
		.results__not-found {
			flex-direction: column;
			text-align: center;
		}
	}
`;
