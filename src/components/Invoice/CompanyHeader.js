import React from "react";

import CompanyDetails from "./CompanyDetails";
import InvoiceDetails from "./InvoiceDetails";

const CompanyHeader = (props) => {
	
	return (
		<div className="company-header">
			<CompanyDetails/>
            <InvoiceDetails/>
			
		</div>
	);
};

export default CompanyHeader;
