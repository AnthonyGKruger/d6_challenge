import "./App.css";

import Invoice from "../components/Invoice/Invoice";
import React, { useEffect, useState } from "react";
import Landing from "../components/landing/Landing";

function App(props) {
	const [clientList, setClientList] = useState([]);
	const clientsToPush = [];
	const [showInvoice, setShowInvoice] = useState(false);
	const [clientInfo, setClientInfo] = useState("");
	const [products, setProducts] = useState("");
	
	const [total, setTotal] = useState(0);
	const [totalVat, setTotalVat] = useState(0);
	const [subTotal, setSubTotal] = useState(0);

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
		// const products = json[0];
		//		console.log(products);
		setProducts(products);
		// addLineItem()
	};

	useEffect(() => {
		getClientList();
		getProducts();
	}, []);

	const submitHandler = (event) => {
		event.preventDefault();
		getAllClientInfo(event);
		setShowInvoice(true);
	};

	return (
		<React.Fragment>
			{showInvoice ? (
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
