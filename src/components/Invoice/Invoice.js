import React from "react";
import ClientDetails from "./ClientDetails";
import CompanyHeader from "./CompanyHeader";
import InvoiceItems from "./InvoiceItems";
import "./Invoice.css";

const Invoice = () => {

	return (
		<div className="container center br1 w-70 h-100">
			<CompanyHeader />
			<ClientDetails />
			<InvoiceItems />
		</div>
	);
};

export default Invoice;
