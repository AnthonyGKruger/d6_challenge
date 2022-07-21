import React from "react";
import LineItem from "./LineItem";

const InvoiceDetails = () => {
	return (
		<div className="items ba w-80 center">
			<div>
				<div className="ba fl w-70">
					<span>Description</span>
				</div>
				<div className="ba fl w-10">
					<span>Tax</span>
				</div>
				<div className="ba fl w-10">
					<span>Quantity</span>
				</div>
				<div className="ba fl w-10">
					<span>Line Total</span>
				</div>
			</div>

			<LineItem/>
		</div>
	);
};

export default InvoiceDetails;
