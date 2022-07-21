import React from "react";

const ClientDetails = (props) => {
	return (
		<div className="client-details-container center w-100 mt4">
			<div className="client-details ml6 w-30">
				<div className="ba bg-blue br--top br3">
					<span>BILL TO</span>
				</div>
				<div className="ba">
					<span>{props.clientInfo.representative}</span>
				</div>
				<div className="ba">
					<span>{props.clientInfo.company_name}</span>
				</div>
				<div className="ba">
					<span>{props.clientInfo.street_address}</span>
				</div>
				<div className="ba">
					<span>{`${props.clientInfo.city}, ${props.clientInfo.state}, ${props.clientInfo.postal_code}`}</span>
				</div>
				<div className="ba br--bottom br3">
					<span>{props.clientInfo.phone_number}</span>
				</div>
			</div>
		</div>
	);
};

export default ClientDetails;
