import styled from "styled-components";
import { em, rem } from "../../../helpers/functions/functions";

export const CommentsCardStyle = styled.div`
	.comments__comment {
		background-color: #fff;
		box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
		border-radius: 3px;
		padding: ${em(40)} ${em(48)} ${em(61)};
		p {
			font-size: ${rem(16)};
			line-height: 150%;
			text-align: center;
			color: #696969;
		}
	}
	.comments__user {
		text-align: center;
		transform: translate(0, -22px);
	}
	.comments__avatar {
		width: 42px;
		height: 42px;
		border: 2px solid #fff;
		border-radius: 50%;
		margin: 0px auto 16px;
		overflow: hidden;
	}
	.comments__name {
		font-weight: 600;
		font-size: ${rem(16)};
		line-height: 150%;
		color: #0d263b;
	}
	.comments__job {
		margin: ${em(4)} 0px 0px 0px;
		font-size: ${rem(16)};
		line-height: 150%;
		color: #696969;
	}
	@media only screen and (max-width: ${em(1179.98)}) {
		.comments__comment {
			padding: ${em(40)} ${em(20)} ${em(61)};
		}
	}
	@media only screen and (max-width: ${em(767.98)}) {
		.comments__comment {
			padding: ${em(30)} ${em(12)} ${em(61)};
		}
	}
`;
