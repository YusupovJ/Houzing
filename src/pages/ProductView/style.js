import styled from "styled-components";
import { rem, em } from "../../helpers/functions/functions";

export const ProductViewStyle = styled.main`
	padding: 24px 0px 96px 0px;
	.product-view__container {
		flex-wrap: wrap;
		display: flex;
	}
`;

export const ContainerLeft = styled.div`
	flex: 1 1 660px;
	margin: 0px 20px 0px 0px;
	padding: 0;
	@media only screen and (max-width: ${em(991.98)}) {
		margin: 0;
	}
`;

export const ContainerRight = styled.div`
	flex: 0 0 280px;
	padding: 0;
	@media only screen and (max-width: ${em(991.98)}) {
		display: none;
	}
`;
