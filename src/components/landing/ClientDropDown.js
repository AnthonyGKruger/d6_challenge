import React from "react";

const ClientDropDown = (props) => {

    
	const options = props.clients;
	// console.log(options);
	return <select id="client-drop-down" form="select-form">{[...options]}</select>;
};

export default ClientDropDown;