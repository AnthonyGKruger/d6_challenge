import React from "react";
import ClientDetails from "./ClientDetails";
import CompanyHeader from "./CompanyHeader";
import InvoiceItems from "./InvoiceItems";
import Comments from "./CommentsAndTotal";
import "./Invoice.css";
import ButtonContainer from "./ButtonContainer";
import InvoiceFooter from "./InvoiceFooter";

const Invoice = (props) => {
  

	return (
		<div className="container mt5 mb5 center ba br1 w-70 bg-white">
			<CompanyHeader clientInfo={props.clientInfo}/>
			<ClientDetails clientInfo={props.clientInfo}/>
			<InvoiceItems products={props.products} randomNumGenerator={props.randomNumGenerator}/>
			<ButtonContainer randomNumGenerator={props.randomNumGenerator} addLineItem={props.addLineItem} />
			<Comments />
      <InvoiceFooter/>
		</div>
	);
};

export default Invoice;
