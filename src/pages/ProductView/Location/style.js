import styled from "styled-components";

export const LocationStyle = styled.section`
	.location__map {
		height: calc(300px + 116 * ((100vw - 320px) / (1280 - 320)));
		/* Делаем светлее, потому что без api все становиться темным */
		> div > div:nth-child(1) {
			filter: brightness(179%);
		}
		/* Скрываем оповещение в начале */
		> div > div:nth-child(2) {
			display: none;
		}
		/* Саму ссылку затемняем, чтобы хорошо было видно */
		a {
			filter: brightness(50%);
		}
	}
	/* Скрываем элементы управления */
	.gmnoprint:not(:last-child) {
		display: none;
	}

	.location__info {
		margin: 24px 0px;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: 24px 60px;
	}
	.location__property {
		display: flex;
		flex: 0 1 auto;
		span {
			margin: 0px 0px 0px 8px;
		}
	}
`;
