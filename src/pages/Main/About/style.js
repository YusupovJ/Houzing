import styled from "styled-components";
import { rem, em } from "../../../helpers/functions/functions";

export const AboutStyle = styled.section`
	p {
		margin: 0;
	}
	.about__container {
		position: relative;
		z-index: 2;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 600px;
		padding: 30px 16px;
		text-align: center;
	}
	.about__bg {
		position: absolute;
		display: inline-block;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		filter: brightness(35%);
	}
	.about__slide-item {
		position: relative;
	}
	.about__title {
		font-weight: 700;
		font-size: ${rem(44)};
		line-height: 109%;
		letter-spacing: -0.02em;
		color: #ffffff;
		margin: 0px 0px ${em(8, 44)} 0px;
	}
	.about__text {
		color: #fff;
		line-height: 150%;
		margin: 0px 0px ${em(24, 16)} 0px;
	}
	.about__ownerships {
		margin: 0px 0px 24px 0px;
		display: flex;
		gap: 20px;
	}
	.about__own {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: #fff;
		line-height: 150%;
		svg {
			fill: white;
		}
	}
	.about__price {
		margin: 0px 0px ${em(48, 28)} 0px;
		color: #fff;
		font-size: ${rem(28)};
		font-weight: 600;
		line-height: 129%;
		letter-spacing: -0.02em;
	}
	.about__wrapper {
		position: relative;
	}
	.about__slider-control {
		position: absolute;
		top: 50%;

		&_next {
			right: 15px;
			.about__arrow {
				transform: rotate(180deg);
			}
			&:active {
				transform: translate(5px, -50%);
			}
		}
		&_previos {
			left: 15px;
			&:active {
				transform: translate(-5px, -50%);
			}
		}
		&:hover {
			box-shadow: 0px 0px 0px 5px rgba(181, 178, 178, 0.2);
		}
	}

	.swiper-pagination-bullet {
		background-color: #fff;
		opacity: 1;
		transition: all 0.3s ease 0s;
		margin: 0px 13px 0px 0px !important;
		&:last-child {
			margin: 0 !important;
		}
	}
	.swiper-pagination-bullet-active {
		transform: scale(1.3);
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
			color: #fff;
		}
	}
	.swiper-button-prev {
		left: 30px;
	}
	.swiper-button-next {
		right: 30px;
		&:active {
			transform: translate(5px, 0);
		}
		&::after {
			transform: translate(1px, 0);
		}
	}
	.about__wrapper {
		position: relative;
	}

	@media only screen and (max-width: ${em(767.98)}) {
		.about__slider-control {
			display: none;
		}
		.about__title {
			font-size: ${rem(24)};
		}
		.about__text {
			font-size: ${rem(14)};
		}
		.about__ownerships {
			flex-wrap: wrap;
			justify-content: center;
			margin: 0px 0px 16px 0px;
		}
		.about__price {
			margin: 0px 0px ${em(24, 28)} 0px;
		}
		.about__container {
			margin: 0px auto 142px;
		}
	}
`;
