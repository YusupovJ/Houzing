import styled from "styled-components";
import { rem, em } from "../../helpers/functions/functions";

export const ProductViewStyle = styled.main`
	padding: 24px 0px 96px 0px;
	.product-view__container {
		flex-wrap: wrap;
		display: flex;
	}
	.product-view__line {
		display: block;
		height: 1px;
		background: #e6e9ec;
		margin: 48px 0px;
	}
`;

export const ContainerLeft = styled.div`
	flex: 1 1 660px;
	margin: 0px 20px 0px 0px;
	padding: 0;
	min-height: 335px;
	.title {
		font-weight: 600;
		font-size: ${rem(18)};
		line-height: 156%;
		color: #0d263b;
	}
	@media only screen and (max-width: ${em(991.98)}) {
		margin: 0;
	}
`;

export const ContainerRight = styled.div`
	flex: 0 0 280px;
	padding: 0;
	@media only screen and (max-width: ${em(991.98)}) {
		flex: 0 0 0;
	}
`;
