import React from "react";
import ClientDropdown from "./ClientDropDown";

const Landing = (props) => {
	
	

	return (
		<div className="tc fw6 mt7">
			<label className="f2 lh-copy">
				Please select the client that you would like to generate an
				invoice for
			</label>
			<form id="select-form" onSubmit={props.formHandler} className="pa4">
				<ClientDropdown clients={props.clients}/>
				<input name="submit" type="submit" value="Select" />
			</form>
		</div>
	);
};

export default Landing;
