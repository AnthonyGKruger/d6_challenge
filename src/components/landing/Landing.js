import React from "react";
import ClientDropdown from "./ClientDropDown";

const Landing = (props) => {
	
	

	return (
		<div className="tc">
			<label>
				Please select the client that you would like to generate an
				invoice for:
			</label>
			<form id="select-form" onSubmit={props.formHandler}>
				<ClientDropdown clients={props.clients}/>
				<input name="submit" type="submit" value="Select" />
			</form>
		</div>
	);
};

export default Landing;
