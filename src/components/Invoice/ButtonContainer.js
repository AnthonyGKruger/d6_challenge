import React from "react";
import Button from "./Button";

const ButtonContainer = (props) => {
	return (
		<div className="button-container mb4 mt4 w-100">
			<div className="dib ml6 buttons">
				<Button
					name="addBtn"
					type="submit"
					text="Add Item"
					styles=" w-15 pa3 mr3 ba bw1 br2 b--black grow"
                    // randomNumGenerator={props.randomNumGenerator}
                    addLineItem={props.addLineItem}
				/>
				<Button
					name="generateBtn"
					type="submit"
					text="Generate Invoice"
					styles="w-15 pa3  ba bw1 br2 b--black grow"
                    randomNumGenerator={props.randomNumGenerator}
				/>
			</div>
		</div>
	);
};

export default ButtonContainer;
