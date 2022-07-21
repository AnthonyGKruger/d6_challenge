import React from "react";

const ClientDropDown = (props) => {

    
	const options = props.clients;
	console.log(options);
	return <select>{[...options]}</select>;
};

export default ClientDropDown;
