import React from "react";

const InvoiceDetails = () => {
	const date = new Date();
	return (
		<div className="invoice-details fl w-40">
			<div className="fr ">
				<h1>Invoice</h1>
				<div className="ba br1 br--top">
					<span>
						Date:{" "}
						{`${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`}
					</span>
				</div>

				<div className="ba">
					<span>Invoice #00000001</span>
				</div>
				<div className="ba">
					<span>Customer ID #00000001</span>
				</div>
				<div className="ba br2 br--bottom bg-washed-blue">
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
