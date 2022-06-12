import styled from "styled-components";
import { rem } from "../../helpers/functions/functions";

export const CardStyle = styled.div`
	border-radius: 3px;
	overflow: hidden;
	transition: all 0.3s ease 0s;
	border: 1px solid #e6e9ec;
	cursor: pointer;
	&:hover {
		box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.06);
	}
	.card__image {
		position: relative;
		img {
			display: inline-block;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.card__ava {
		position: absolute;
		bottom: 0;
		right: 20px;
		width: 42px;
		height: 42px;
		transform: translate(0, 50%);
		border-radius: 50%;
		overflow: hidden;
		border: 2px solid #fff;
		box-shadow: 0px 0px 10px rgba(13, 38, 59, 0.2);
		img {
			max-width: 100%;
		}
	}
	.card__body {
		padding: 24px 20px 0px;
	}
	.card__title {
		font-weight: 600;
		font-size: ${rem(16)};
		line-height: 150%;
		color: #0d263b;
	}
	.card__address {
		font-size: ${rem(14)};
		line-height: 143%;
		color: #696969;
	}
	.card__ownership {
		flex-wrap: wrap;
		display: flex;
		justify-content: space-between;
		gap: 15px;
		margin: 15px 0px 0px 0px;
	}
	.card__own {
		text-align: center;
		svg {
			fill: #696969;
		}
		p {
			margin: 0px 0px 0px 0px;
			font-size: ${rem(14)};
			line-height: 143%;
			color: #696969;
		}
	}
	.card__info {
		border-top: 1px solid #e6e9ec;
		margin: 16px 0px 0px 0px;
		padding: 8px 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.card__price {
		margin: 0px 15px 0px 0px;
	}
	.card__sale-price {
		font-size: ${rem(12)};
		line-height: 167%;
		text-decoration-line: line-through;
		color: #696969;
	}
	.card__real-price {
		font-weight: 600;
		font-size: ${rem(16)};
		line-height: 150%;
		color: #0d263b;
	}
	.card__action {
		display: flex;
		align-items: center;
	}
	.card__fav {
		background: #f6f8f9;
		border-radius: 60px;
		padding: 10px;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		transition: all 0.3s ease 0s;
		align-items: center;
		svg {
			fill: #696969;
			transition: all 0.3s ease 0s;
		}
		&:hover {
			svg {
				fill: red;
			}
		}
		:active {
			transform: scale(0.8);
		}
	}
	.card__zoom {
		display: flex;
		background-color: transparent;
		justify-content: center;
		align-items: center;
		margin: 0px 20px 0px 0px;
		transition: all 0.2s ease 0s;
		width: 35px;
		height: 35px;
		svg {
			transition: all 0.3s ease 0s;
		}
		:active {
			transform: scale(1.1);
		}
	}
	.card__zoom:hover {
		svg {
			transform: scale(1.1);
		}
	}
`;