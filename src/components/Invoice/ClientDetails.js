import React from "react";

const ClientDetails = () => {
	return (
		<div className="client-details-container mt4 mb4 ml6 fl w-50">
			<div className="ba mr7 bg-blue">
				<span>BILL TO</span>
			</div>
			<div className="ba mr7">
				<span>Client name</span>
			</div>
			<div className="ba mr7">
				<span>Client company name</span>
			</div>
			<div className="ba mr7">
				<span>Client street address</span>
			</div>
			<div className="ba mr7">
				<span>Client city, state, zip code</span>
			</div>
			<div className="ba mr7">
				<span>Client phone</span>
			</div>
		</div>
	);
};

export default ClientDetails;
