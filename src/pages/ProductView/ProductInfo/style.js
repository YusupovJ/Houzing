import styled from "styled-components";
import { rem, em } from "../../../helpers/functions/functions";

export const ProductInfoStyle = styled.section`
	.product-info__row {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
	}
	.product-info__text-block {
		> * {
			text-align: left;
		}
	}
	.product-info__action {
		display: flex;
		gap: 26px;
	}
	.product-info__button {
		display: flex;
		align-items: center;
		background-color: transparent;
	}
	.product-info__icon {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0px 10px 0px 0px;
		background: #f6f8f9;
		border-radius: 50%;
		width: 35px;
		height: 35px;
		transition: all 0.3s ease 0s;
		svg {
			fill: #696969;
			width: 15px;
			height: 15px;
			transition: all 0.3s ease 0s;
		}
		&:hover {
			background-color: #dde2e5;
		}
		&_fav {
			:hover svg {
				fill: red;
			}
		}
	}
`;
