import React from "react";

import CompanyDetails from "./CompanyDetails";
import InvoiceDetails from "./InvoiceDetails";

const CompanyHeader = (props) => {
	
	return (
		<div className="company-header w-100">
			<CompanyDetails clientInfo={props.clientInfo}/>
            <InvoiceDetails clientInfo={props.clientInfo}/>
			
		</div>
	);
};

export default CompanyHeader;
