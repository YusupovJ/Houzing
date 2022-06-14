import styled from "styled-components";
import { em } from "../../helpers/functions/functions";

export const ProductsStyle = styled.section`
	padding: 96px 0px 48px;
	.swiper-pagination-bullet {
		background: #0061df;
		border: 2px solid #fff;
		box-sizing: content-box;
		opacity: 1;
		transition: border 0.3s ease 0s;
		margin: 0px 13px 0px 0px !important;
		&:last-child {
			margin: 0 !important;
		}
	}
	.swiper-pagination-bullet-active {
		border: 2px solid #0061df;
		background-color: #fff;
	}
	.swiper-pagination-bullet-active-next,
	.swiper-pagination-bullet-active-next-next,
	.swiper-pagination-bullet-active-prev,
	.swiper-pagination-bullet-active-prev-prev {
		transform: scale(1);
	}
	.swiper {
		padding: 0px 0px 65px 0px;
		display: flex;
		overflow: visible;
		position: relative;
		&::before,
		&::after {
			content: "";
			width: 100vw;
			height: 100%;
			position: absolute;
			background-color: #fff;
			top: 0;
		}
		&::before {
			z-index: 10;
			left: 0;
			transform: translate(-100%, 0);
		}
		&::after {
			transform: translate(100%, 0);
			z-index: 10;
			right: 0;
		}
	}
	.swiper-button-prev,
	.swiper-button-next {
		padding: 0;
		width: 45px;
		height: 45px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.2);
		transition: all 0.2s ease 0s;
		padding: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		background: #ffffff;
		border: 1px solid #e6e9ec;
		box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
		z-index: 11;
		&:hover {
			box-shadow: 0px 0px 0px 5px rgba(181, 178, 178, 0.2);
		}
		&:active {
			transform: translate(-5px, 0);
		}
		&::after {
			transform: translate(-1px, 0);
			font-size: 16px;
			font-weight: 700;
			color: #000;
			opacity: 1;
		}
	}
	.swiper-button-prev {
		left: -98px;
	}
	.swiper-button-next {
		right: -98px;
		&:active {
			transform: translate(5px, 0);
		}
		&::after {
			transform: translate(1px, 0);
		}
	}
	@media only screen and (max-width: ${em(1439.98)}) {
		.swiper-button-prev,
		.swiper-button-next {
			top: 100%;
			transform: translate(0, -50%);
		}
		.swiper-button-prev {
			left: 0px;
			&:active {
				transform: translate(-5px, -50%);
			}
		}
		.swiper-button-next {
			right: 0px;
			&:active {
				transform: translate(5px, -50%);
			}
		}
	}
	@media only screen and (max-width: ${em(767.98)}) {
		padding: 64px 0px 32px;
	}
`;
