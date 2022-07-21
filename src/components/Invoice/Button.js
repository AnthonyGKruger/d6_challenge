import React from "react";

const Button = (props) => {
	return (
		<button name={props.name} type={props.type} onSubmit={props.onSubmit} className={props.styles}>
			{props.text}
		</button>
	);
};

export default Button;
