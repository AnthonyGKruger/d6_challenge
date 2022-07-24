import React,{useState} from "react";
import LineItem from "./LineItem";

const InvoiceItems = (props) => {

	// const [lineItems, setLineItems] = useState([]);

	// const addLineItem = (event) => {
	// 	const toPush = lineItems;
	// 	toPush.push(
	// 		<LineItem products={props.products} randomNumGenerator={props.randomNumGenerator} />
	// 	);
	// 	console.log(toPush);
	// 	setLineItems(toPush);
	// };

	return (
		<div className="items-container w-100 mt5">
			<div id="items" className="items center w-80">
				<div className="ba w-20 dib bg-blue">
					<span>Item</span>
				</div>
				<div className="ba w-50 dib bg-blue">
					<span>Description</span>
				</div>
				<div className="ba w-10 dib bg-blue">
					<span>Quantity</span>
				</div>
				<div className="ba w-10 dib bg-blue">
					<span>Tax</span>
				</div>

				<div className="ba w-10 dib bg-blue">
					<span>Line Total</span>
				</div>

				{/* line item here */}
			</div>
		</div>
	);
};

export default InvoiceItems;
