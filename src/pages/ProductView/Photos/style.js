import styled, { css } from "styled-components";
import { rem, em } from "../../../helpers/functions/functions";

/* ------------------------------------ */
// Общий адаптив сетки

const gridMedia = css`
	@media only screen and (max-width: ${em(767.98)}) {
		grid-template: 1fr 1fr / repeat(auto-fit, minmax(191px, 1fr));
	}
	@media only screen and (max-width: ${em(434.98)}) {
		grid-template: 1fr 1fr / repeat(auto-fit, minmax(130px, 1fr));
		gap: 10px;
	}
`;

/* ------------------------------------ */

// Основная сетка
const grid = css`
	grid-template: 1fr 1fr / repeat(auto-fit, minmax(223.5px, 1fr));
	${gridMedia}
`;

/* ------------------------------------ */

// Сетка для двуч фотографий
const gridTwo = css`
	grid-template: 1fr / repeat(auto-fit, minmax(290px, 1fr));
	.photos__photo_big {
		grid-column: 1 / 2;
		grid-row: 1 / 2;
	}
	@media only screen and (max-width: ${em(434.98)}) {
		gap: 10px;
	}
`;

/* ------------------------------------ */

// Сетка для трех фотографий
const gridThree = css`
	grid-template: 1fr 1fr / repeat(auto-fit, minmax(290px, 1fr));
	${gridMedia}
`;

/* ------------------------------------ */

// Сетка для четырех фотографий
const gridFour = css`
	grid-template: 1fr 1fr / repeat(auto-fit, minmax(223.5px, 1fr));
	grid-auto-flow: column;
	@media only screen and (max-width: ${em(767.98)}) {
		grid-auto-flow: dense;
	}
	${gridMedia}
	@media only screen and (min-width: ${em(991.98)}) {
		.photos__photo_last {
			grid-row: 1 / 3;
		}
	}
`;

/* ------------------------------------ */

export const PhotosStyle = styled.section`
	display: grid;
	gap: 20px;
	flex: 1 1 100%;
	margin: 0px 0px 24px 0px;
	.photos__photo {
		position: relative;
		border-radius: 5px;
		cursor: pointer;
		overflow: hidden;
		padding: 0px 0px 50% 0px;
		user-select: none;
		&_big {
			grid-row: 1 / 3;
			grid-column: 1 / 3;
		}
		img {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.photos__other {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		color: #fff;
		background-color: rgba(0, 0, 0, 0.657);
		font-weight: 600;
		font-size: ${rem(36)};
		line-height: 122%;
		letter-spacing: -0.02em;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.3s ease 0s;
		user-select: none;
		&:hover {
			background-color: rgba(0, 0, 0, 0.8);
		}
		&:active {
			background-color: rgba(0, 0, 0, 0.9);
		}
	}

	${(props) => {
		if (props.photosCount === 2) {
			return gridTwo;
		} else if (props.photosCount === 3) {
			return gridThree;
		} else if (props.photosCount === 4) {
			return gridFour;
		} else {
			return grid;
		}
	}}

	@media only screen and (max-width: ${em(767.98)}) {
		.photos__other {
			font-size: ${rem(25)};
		}
	}
`;
