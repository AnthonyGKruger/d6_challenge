import React from "react";
import ClientDetails from "./ClientDetails";
import CompanyHeader from "./CompanyHeader";
import InvoiceItems from "./InvoiceItems";
import Button from "./Button";
import "./Invoice.css";

const Invoice = () => {
	return (
		<div className="container center ba br1 w-70 bg--white">
			<CompanyHeader />
			<ClientDetails />
			<InvoiceItems />
			<Button
				name="addBtn"
				type="submit"
				text="Add Item"
				styles="fr w-15 pa3 mt4 mr6 ba bw1 br2 b--black grow"
			/>
			<Button
				name="addBtn"
				type="submit"
				text="Generate Invoice"
				styles="w-15 fl pa3 ml6 mt4 ba bw1 br2 b--black grow"
			/>

			{/*onSubmit={}*/}


      
		</div>
	);
};

export default Invoice;
