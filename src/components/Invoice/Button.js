import React from "react";
import LineItem from "./LineItem";

const Button = (props) => {
	// const addLineItem = (event) => {
	// 	let items = document.getElementById("items").innerHTML;
	// 	console.log("items", items);

	// 	items += (
	// 		<LineItem
	// 			products={props.products}
	// 			randomNumGenerator={props.randomNumGenerator}
	// 		/>
	// 	);
	// 	document.getElementById("items").innerHTML = items;
	// };

	return (
		<button
			name={props.name}
			type={props.type}
			onClick={props.addLineItem}
			className={props.styles}
		>
			{props.text}
		</button>
	);
};

export default Button;
