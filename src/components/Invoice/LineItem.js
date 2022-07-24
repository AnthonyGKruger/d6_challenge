import React from "react";
import "./LineItem.css";

const LineItem = (props) => {
	const randomID = props.randomNumGenerator(1, 1000);

	const productList = props.products.map((product, i) => {
		return (
			<option key={props.randomNumGenerator(1,1000)}>
				{props.products[i].product_name}
			</option>
		);
	});

	const roundToTwo = (num) => {
		return +(Math.round(num + "e+2") + "e-2");
	};

	const getItemInformation = () => {
		const select = document.getElementById(`product-drop-down${randomID}`);

		if (select.options[select.selectedIndex].value === "Please Select...") {
			console.log("select is on please select");
			document.getElementById(`description${randomID}`).innerHTML = "";
			document.getElementById(`product-quantity${randomID}`).innerHTML = "";
			document.getElementById(`tax-amount${randomID}`).innerHTML = "";
			document.getElementById(`line-total${randomID}`).innerHTML = "";
			document.getElementById(`product-name${randomID}`).innerHTML = "";
			return;
		}

		return props.products.filter((product, i) => {
			return (
				props.products[i].product_name ===
				select.options[select.selectedIndex].value
			);
		});
	};

	const updateLineItemDescription = (event) => {
		const selectValue = document.getElementById(`product-drop-down${randomID}`)
			.options[
			document.getElementById(`product-drop-down${randomID}`).selectedIndex
		].value;

		const itemInformation = getItemInformation(selectValue);

		if (!(itemInformation === undefined)) {
			document.getElementById(`description${randomID}`).innerHTML =
				itemInformation[0].product_description;

			document.getElementById(`product-quantity${randomID}`).value = 1;

			document.getElementById(`product-name${randomID}`).innerHTML =
				itemInformation[0].product_name;

			updateLineItemPricing();
		}
	};

	const updateTotals = (event, lineTotal, vat) => {
		console.log("updating totals");
		props.setTotalVat(roundToTwo(props.totalVat + vat));
		props.setSubTotal(roundToTwo(props.subTotal + lineTotal));
		props.setTotal(roundToTwo(props.total + lineTotal + vat));
	};

	const updateLineItemPricing = (event) => {
		const productQuantity = parseInt(
			document.getElementById(`product-quantity${randomID}`).value
		);

		if (isNaN(productQuantity)) {
			document.getElementById(`product-quantity${randomID}`).value = 1;
			updateLineItemPricing();
		} else {
			const productInformation = getItemInformation();
			const priceExcludingVat = parseFloat(
				productInformation[0].price_excluding_vat
			);
			const vat = priceExcludingVat * 0.15 * productQuantity;
			const lineTotal = priceExcludingVat * productQuantity;

			document.getElementById(`tax-amount${randomID}`).innerHTML =
				"R" + roundToTwo(vat);
			document.getElementById(`line-total${randomID}`).innerHTML =
				"R" + roundToTwo(lineTotal);

			const lineItemInfo = getItemInformation()[0];
			const prevPayload = [props.payload];
			prevPayload.push({
				productID: lineItemInfo.product_id,
				lineTotal: lineTotal,
				dueDate: document.getElementById("invoice-due-date").value,
			})
			props.setInvoicePayload(
				prevPayload
			);

			updateTotals(event, priceExcludingVat, lineTotal, vat);
		}
	};

	const productOptions = (
		<select
			onChange={updateLineItemDescription}
			id={`product-drop-down${randomID}`}
			name="product-select"
		>
			<option key={props.randomNumGenerator(1,1000)}>Please Select...</option>
			{[...productList]}
		</select>
	);

	return (
			<tr id={`line-item${props.lastLineItemIndex}`}  className="line-item">
				<td
					className={`inventory-cell product-option${randomID}  pv3 pr2 ba b--black-20`}
				>
					{productOptions}
				</td>
				<td
					id={`product-name${randomID}`}
					className="inventory-cell w-20 pv3  ba b--black-20"
				></td>
				<td
					id={`description${randomID}`}
					className="inventory-cell w-40 pv3 ba b--black-20"
				></td>
				<td className="pv3 ba b--black-20">
					<input
						onChange={updateLineItemPricing}
						className="inventory-cell w-100"
						min="1"
						type="number"
						id={`product-quantity${randomID}`}
						defaultValue="0"
					/>
				</td>
				<td
					id={`tax-amount${randomID}`}
					className="inventory-cell pv3 pr3 ba b--black-20"
				></td>
				<td
					id={`line-total${randomID}`}
					className="inventory-cell w-10 pv3 pr3 ba b--black-20"
				></td>
			</tr>
	);
};

export default LineItem;
