import React from "react";

const ClientDetails = () => {
	return (
		<div className="client-details-container ba fl w-50">
			<div className="ba">
				<span>BILL TO</span>
			</div>
			<div className="ba">
				<span>Client name</span>
			</div>
			<div className="ba">
				<span>Client company name</span>
			</div>
			<div className="ba">
				<span>Client street address</span>
			</div>
			<div className="ba">
				<span>Client city, state, zip code</span>
			</div>
			<div className="ba">
				<span>Client phone</span>
			</div>
		</div>
	);
};

export default ClientDetails;
