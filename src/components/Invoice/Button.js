import React from "react";

const Button = (props) => {
	return (
		<button
			name={props.name}
			type={props.type}
			onClick={props.onClick}
			className={props.styles}
			id={props.id}
		>
			{props.text}
		</button>
	);
};

export default Button;
