import React from "react";
import "./LineItem.css";

const LineItem = (props) => {
	const randomID = props.randomNumGenerator(1, 1000);

	const roundToTwo = (num) => {
		return +(Math.round(num + "e+2") + "e-2");
	};

	const getItemInformation = () => {
		const select = document.getElementById(`product-drop-down${randomID}`);
		if (select === "Please Select...") {
			document.getElementById(`description${randomID}`).innerHTML = "";
			document.getElementById(`product-quantity${randomID}`).innerHTML = "";
			document.getElementById(`tax-amount${randomID}`).innerHTML = "";
			document.getElementById(`line-total${randomID}`).innerHTML = "";
			return;
		}
		const itemName = select.options[select.selectedIndex].value;
		return props.products.filter((product, i) => {
			// console.log(props.products[i].product_name);
			return props.products[i].product_name === itemName;
		});
	};

	const updateLineItemDescription = (event) => {
		// const select = document.getElementById("product-drop-down");
		// const itemName = select.options[select.selectedIndex].value;
		const itemInformation = getItemInformation();
		// console.log(itemInformation);
		document.getElementById(`description${randomID}`).innerHTML =
			itemInformation[0].product_description;
		document.getElementById(`product-quantity${randomID}`).value = "0";

		updateLineItemPricing();
	};

	const productList = props.products.map((product, i) => {
		return (
			<option key={props.products[i].product_id}>
				{props.products[i].product_name}
			</option>
		);
	});

	const updateLineItemPricing = (event) => {
		const productQuantity = parseInt(
			document.getElementById(`product-quantity${randomID}`).value
		);

		if (isNaN(productQuantity)) {
			document.getElementById(`product-quantity${randomID}`).value = 0;
			updateLineItemPricing();
		} else {
			const productInformation = getItemInformation();
			const priceExcludingVat = productInformation[0].price_excluding_vat;
			const vat = priceExcludingVat * 0.15 * productQuantity;
			const lineTotal = vat + priceExcludingVat * productQuantity;

			document.getElementById(`tax-amount${randomID}`).innerHTML =
				roundToTwo(vat);
			document.getElementById(`line-total${randomID}`).innerHTML =
				"R" + roundToTwo(lineTotal);
		}
	};

	// console.log(productList);

	const productOptions = (
		<select
			onChange={updateLineItemDescription}
			id={`product-drop-down${randomID}`}
			name="product-select"
		>
			{" "}
			<option>Please Select...</option>
			{[...productList]}
		</select>
	);

	return (
		<div className="line-item">
			<div className="inventory-cell ba dib w-20">{productOptions}</div>
			<div className="inventory-cell ba dib w-50">
				<span id={`description${randomID}`}></span>
			</div>
			<div className="inventory-cell ba dib w-10">
				<input
					onChange={updateLineItemPricing}
					className="w-100"
					min="0"
					type="number"
					id={`product-quantity${randomID}`}
					defaultValue="0"
				/>
			</div>
			<div className="inventory-cell ba dib w-10">
				<span id={`tax-amount${randomID}`}>0</span>
			</div>

			<div className="inventory-cell ba dib w-10">
				<span id={`line-total${randomID}`}>0</span>
			</div>
		</div>
	);
};

export default LineItem;
