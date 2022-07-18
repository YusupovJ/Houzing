import styled, { keyframes } from "styled-components";
import { Swiper } from "swiper/react";
import { rem, em } from "../../../helpers/functions/functions";

const hello = keyframes`
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`;
const bye = keyframes`
	0% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
`;

export const GalleryStyle = styled(Swiper)`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10000;
	width: 100%;
	height: 100%;
	padding: 0px 50px;
	background-color: rgba(0, 0, 0, 0.7);
	animation: ${hello} 0.4s ease 0s 1 forwards;
	&.closing {
		animation: ${bye} 0.4s ease 0s 1 forwards;
	}
	.swiper-pagination {
		color: #fff;
		background-color: #2a2a2a;
		font-size: ${rem(20)};
		width: 200px;
		padding: 3px 0px;
		bottom: 0;
		left: 50%;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		transform: translate(-50%, 0);
	}
	.swiper-button-next,
	.swiper-button-prev {
		transition: all 0.3s ease 0s;
	}
	.swiper-button-prev:active {
		transform: translate(-5px, 0);
	}
	.swiper-button-next:active {
		transform: translate(5px, 0);
	}
	.swiper-button-prev::after,
	.swiper-button-next::after {
		color: #fff;
	}
	.gallery__slide {
		img {
			user-select: none;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.gallery__close {
		position: absolute;
		cursor: pointer;
		top: 10px;
		right: 10px;
		width: 30px;
		height: 30px;
		stroke: #fff;
		transition: all 0.4s ease 0s;
		&:active {
			transform: scale(0.9);
		}
	}
	@media only screen and (max-width: ${em(767.98)}) {
		padding: 0px 15px;
		.gallery__close {
			z-index: 10000;
			background-color: #2a2a2a;
			padding: 6px;
			border-radius: 7px;
			right: 30px;
			width: 40px;
			height: 40px;
		}
		.swiper-button-next,
		.swiper-button-prev {
			display: none;
		}
	}
`;
