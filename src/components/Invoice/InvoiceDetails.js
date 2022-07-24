import React from "react";

const InvoiceDetails = (props) => {
	const date = new Date();
	return (
		<div className="invoice-details-container dib pl7 w-40">
			<div className="invoice-details">
				<h1>Invoice</h1>
				<div className="ba br--top br3">
					<span>
						Date:{" "}
						{`${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`}
					</span>
				</div>

				<div className="ba">
					<span>Invoice #00000001</span>
				</div>
				<div className="ba">
					<span>Customer ID #{props.clientInfo.client_id}</span>
				</div>
				<div className="ba br--bottom br3 bg-washed-blue">
					<span>
						Due Date: <input className="bg-washed-blue" type="date" />
						{/*remember to link to form*/}
					</span>
				</div>
			</div>
		</div>
	);
};

export default InvoiceDetails;
