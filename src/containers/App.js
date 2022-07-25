import "./App.css";

import Invoice from "../components/Invoice/Invoice";
import React, { useEffect, useState } from "react";
import Landing from "../components/landing/Landing";

function App(props) {
	const [clientList, setClientList] = useState([]);
	const [showInvoice, setShowInvoice] = useState(false);
	const [clientInfo, setClientInfo] = useState("");
	const [products, setProducts] = useState("");
	const [invoiceId, setInvoiceId] = useState("");
	const [total, setTotal] = useState(0);
	const [totalVat, setTotalVat] = useState(0);
	const [subTotal, setSubTotal] = useState(0);
	const [invoicePayload, setInvoicePayload] = useState([]);

	const clientsToPush = [];

	const screenWidth = window.innerWidth;

	const getInvoiceID = async () => {
		const response = await fetch(
			`http://localhost/d6_challenge/backend/helpers/invoiceFetcher.php`,
			{
				method: "GET",
				Content: "application/json",
			}
		);
		const json = await response.json();
		// console.log(json);
		setInvoiceId(parseInt(json[0].invoice_id) + 1);
	};

	const getClientList = async () => {
		const response = await fetch(
			`http://localhost/d6_challenge/backend/helpers/clientNameListFetcher.php`,
			{
				method: "GET",
				Content: "application/json",
			}
		);
		const json = await response.json();
		json.map((client, i) =>
			clientsToPush.push(
				<option key={i} name={client} value={client}>
					{client}
				</option>
			)
		);
		setClientList(clientsToPush);
	};

	const getRandomInt = (minNum, maxNum) => {
		var num = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
		return num;
	};

	const getAllClientInfo = async (event) => {
		const select = document.getElementById("client-drop-down");
		const payload = { name: select.options[select.selectedIndex].value };
		const response = await fetch(
			`http://localhost/d6_challenge/backend/helpers/clientFetcher.php`,
			{
				method: "POST",
				body: JSON.stringify(payload),
				headers: {
					"Content-Type": "application/json; charset=UTF-8",
				},
			}
		);
		const json = await response.json();
		const clientData = json[0];
		setClientInfo(clientData);
	};

	const getProducts = async () => {
		const response = await fetch(
			`http://localhost/d6_challenge/backend/helpers/productFetcher.php`,
			{
				headers: {
					"Content-Type": "application/json; charset=UTF-8",
				},
			}
		);
		const products = await response.json();
		setProducts(products);
	};

	const generateInvoice = async () => {
		const currentLineItems = document.querySelectorAll(".inventory-cell");

		let filteredItems = [];

		let arr = [];

		currentLineItems.forEach((element, i) => {
			if (currentLineItems[i].id.includes("line-total")) {
				arr.push(parseFloat(currentLineItems[i].innerHTML.replace("R", "")));
				filteredItems.push(arr.map((item) => item));
				arr = [];
			} else if (currentLineItems[i].id.includes("product-quantity")) {
				arr.push(parseInt(currentLineItems[i].value));
			} else if (currentLineItems[i].id.includes("product-name")) {
				products.forEach((product) => {
					if (product.product_name === currentLineItems[i].innerHTML) {
						arr.push(parseInt(product.product_id));
					}
				});
			}
		});

		// console.log("array", filteredItems);

		const date = new Date();
		const payload = [];

		if (document.getElementById("invoice-due-date").value === "") {
			alert("You need to set the due date before generating an invoice.");
		} else if (
			Date.parse(document.getElementById("invoice-due-date").value) <
			Date.parse(
				`${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
			)
		) {
			alert("You cant back date the due date for an invoice");
		} else {
			filteredItems.forEach((item) => {
				payload.push({
					invoiceId,
					clientID: parseInt(clientInfo.client_id),
					productID: item[0],
					productQuantity: item[1],
					lineTotal: item[2],
					dueDate: document.getElementById("invoice-due-date").value,
				});
			});
		}

		const response = await fetch(
			`http://localhost/d6_challenge/backend/helpers/invoiceGenerator.php`,
			{
				method: "POST",
				body: JSON.stringify(payload),
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
			}
		);
		const json = await response.text();
		console.log(json);
		// possibly reset screen here
	};

	useEffect(() => {
		getClientList();
		getProducts();
	}, []);

	const submitHandler = (event) => {
		event.preventDefault();
		getAllClientInfo(event);
		getInvoiceID();
		setShowInvoice(true);
	};

	return (
		<React.Fragment>
			{screenWidth < 1024 ? (
				"This app is optimized for desktop, please use a device with a larger screen"
			) : showInvoice ? (
				<Invoice
					clientInfo={clientInfo}
					products={products}
					randomNumGenerator={getRandomInt}
					total={total}
					totalVat={totalVat}
					subTotal={subTotal}
					setTotal={setTotal}
					setTotalVat={setTotalVat}
					setSubTotal={setSubTotal}
					invoiceId={invoiceId}
					invoicePayload={invoicePayload}
					setInvoicePayload={setInvoicePayload}
					getAllClientInfo={getAllClientInfo}
					generateInvoice={generateInvoice}
					// addLineItem={addLineItem}
					// lineItems={lineItems}
				/>
			) : clientList.length > 0 ? (
				<Landing clients={clientList} formHandler={submitHandler} />
			) : (
				<h2>Loading...</h2>
			)}
		</React.Fragment>
	);
}

export default App;
