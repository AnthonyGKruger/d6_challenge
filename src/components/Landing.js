import React from "react";
import ClientDropdown from "./ClientDropDown";

const Landing = (props) => {
	
	

	return (
		<div className="tc">
			<h1>
				Please select the client that you would like to generate an
				invoice for:
			</h1>
			<form id="select-form" action="" onSubmit={props.formHandler}>
				<ClientDropdown clients={props.clients}/>
				<input type="submit" value="Select" />
			</form>
		</div>
	);
};

export default Landing;
