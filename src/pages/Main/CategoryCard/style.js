import styled from "styled-components";
import { em, rem } from "../../../helpers/functions/functions";

export const CategoryCardStyle = styled.div`
	padding: 145px 30px 93px;
	position: relative;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06),
		0px 7px 46px rgba(0, 0, 0, 0.06), 0px 8px 15px rgba(0, 0, 0, 0.06);
	border-radius: 3px;
	.category-card__bg {
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: -1;
		top: 0;
		left: 0;
		object-fit: cover;
		filter: brightness(35%);
	}
	.category-card__text {
		margin: ${em(24, 18)} 0px 0px 0px;
		font-weight: 600;
		font-size: ${rem(18)};
		line-height: 156%;
		color: #ffffff;
	}
	@media only screen and (max-width: ${em(767.98)}) {
		padding: 50px;
	}
`;
