import React from "react";
import { CommentsCardStyle } from "./style";

const CommentsCard = (props) => {
	return (
		<CommentsCardStyle className="comments">
			<div className="comments__comment">
				<p>{props.children}</p>
			</div>
			<div className="comments__user">
				<div className="comments__avatar">
					<img src={props.ava} alt="User" />
				</div>
				<h4 className="comments__name">{props.name}</h4>
				<p className="comments__job">{props.job}</p>
			</div>
		</CommentsCardStyle>
	);
};

export default CommentsCard;
