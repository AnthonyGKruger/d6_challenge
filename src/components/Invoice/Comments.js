import React from "react";
import LineItem from "./LineItem";

const InvoiceItems = () => {
	return (
		<div className="items ba w-80 center">
			<div>
				<div className="ba fl w-70 bg-blue">
					<span>Description</span>
				</div>
				<div className="ba fl w-10 bg-blue">
					<span>Tax</span>
				</div>
				<div className="ba fl w-10 bg-blue">
					<span>Quantity</span>
				</div>
				<div className="ba fl w-10 bg-blue">
					<span>Line Total</span>
				</div>
			</div>

			<LineItem/>
		</div>
	);
};

export default InvoiceItems;