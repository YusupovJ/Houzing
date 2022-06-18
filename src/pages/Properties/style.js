import styled from "styled-components";
import { em, rem } from "../../helpers/functions/functions";

export const PropertiesStyle = styled.main`
	.results__text-block {
		margin: 64px 0px 70px;
	}
	.results__cards {
		display: flex;
		flex-wrap: wrap;
		gap: 20px 1%;
		justify-content: center;
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
		margin: 48px auto 96px;
		padding: 12px 84px;
	}
	.card {
		flex: 0 1 380px;
	}
	.results__loading {
		width: 100px;
		height: 100px;
		margin: 0px auto;
		margin: 0px 0px 200px 0px;
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
			margin: 24px auto 64px;
		}
	}
`;
