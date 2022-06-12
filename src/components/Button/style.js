import styled from "styled-components";
import { rem } from "../../helpers/functions/functions";

export const ButtonStyle = styled.button`
	border-radius: 2px;
	padding: 12px 40px;
	position: relative;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 10;
	transition: all 0.2s ease 0s;
	user-select: none;
	cursor: pointer;
	&:active {
		transform: scale(0.95);
	}
	svg {
		margin: 0px 8px 0px 0px;
		min-width: 18px;
		min-height: 18px;
	}
	p {
		margin: 0;
		font-size: ${rem(14)};
		line-height: 143%;
		position: relative;
		z-index: 1;
	}
	${(props) => {
		if (props.type === "blue") {
			return `
                padding: 12px 30px;
                background: #0061df;
                border: 1px solid #0061df;
                p {
                    color: #ffffff;
                }
                &:hover {
                    background-color: #1053a9;
                }
            `;
		} else if (props.type === "white") {
			return `
                border: 1px solid #e6e9ec;
                background-color: transparent;
                p {
                    color: #0d263b;
                }
                &:hover {
                    background-color: #d7cdcd;
                }
            `;
		} else {
			return `
                border: 1px solid #ffffff;
                background-color: transparent;
                p {
                    color: #fff;
                    transition: all 0.4s ease 0s;
                }
                &::before {
                    content: "";
                    display: inline-block;
                    position: absolute;
                    top: 0;
                    transition: all 0.6s ease 0s;
                    left: 0;
                    transform: skew(-20deg) translate(-120%, 0);
                    width: 120%;
                    height: 100%;
                    background-color: #fff;
                }
                &:hover {
                    p {
                        color: #0d263b;
                    }
                    &::before {
                        transform: translate(0, 0);
                    }
                }
            `;
		}
	}}
`;
