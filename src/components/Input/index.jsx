import React, { useState } from "react";
import { InputStyle } from "./style";

const Input = (props) => {
	const [correctToSlide, setCorrectToSlide] = useState(false);

	const slideUpPlaceholder = (e) => {
		const { value } = e.target;

		if (value) {
			setCorrectToSlide(true);
		} else {
			setCorrectToSlide(false);
		}
	};

	return (
		<InputStyle textArea={props?.textArea} className={`${props?.className} input${correctToSlide ? " focus" : ""}`}>
			<label htmlFor={props?.id} className="input__placeholder">
				{props?.placeholder}
			</label>
			{props?.textArea ? (
				<textarea
					name={props?.name}
					id={props?.id}
					onBlur={props?.onBlur}
					onFocus={slideUpPlaceholder}
					onChange={slideUpPlaceholder}
					className={`input__field input__field_textarea${props?.err ? " input__field_err" : ""}`}
				></textarea>
			) : (
				<input
					ref={props?.ref}
					onChange={slideUpPlaceholder}
					onFocus={slideUpPlaceholder}
					autoComplete="off"
					id={props?.id}
					type={props?.type}
					tabIndex={props?.tabIndex}
					onBlur={props?.onBlur}
					defaultValue={props?.defaultValue}
					name={props?.name}
					className={`input__field${props?.err ? " input__field_err" : ""}`}
				/>
			)}
		</InputStyle>
	);
};

export default Input;
