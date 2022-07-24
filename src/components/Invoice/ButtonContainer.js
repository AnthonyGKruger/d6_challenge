import React from "react";
import Button from "./Button";

const ButtonContainer = (props) => {
	return (
		<div className="button-container mb4 mt4 w-100">
			<div className="dib ml6 buttons">
				{props.children}
			</div>
		</div>
	);
};

export default ButtonContainer;
