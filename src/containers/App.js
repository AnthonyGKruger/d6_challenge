import "./App.css";

import Invoice from "../components/Invoice/Invoice";
import React, { useEffect, useState } from "react";
import Landing from "../components/landing/Landing";

function App() {
	const [clients, setClients] = useState([]);
	const [showInvoice, setShowInvoice] = useState(false);
	const clientsToPush = [];

	async function getClients() {
		const response = await fetch(
			`http://localhost/d6_challenge/backend/helpers/clientFetcher.php`,
			{
				method: "GET",
				Content: "application/json",
			}
		);

		const json = await response.json();
		json.map((client, i) =>
			clientsToPush.push(
				<option key={i} name={client}>
					{client}
				</option>
			)
		);
		console.log(clients);
		setClients(clientsToPush);
	}

	useEffect(() => {
		getClients();
	}, []);

	const submitHandler = (event) => {
		event.preventDefault();
		// console.log(event)
		setShowInvoice(true);
	};

	return (
		<React.Fragment>
			{showInvoice ? (
				<Invoice />
			) : clients.length > 0 ? (
				<Landing clients={clients} formHandler={submitHandler} />
			) : (
				<h2>Loading...</h2>
			)}

			{/* {clients && <Landing clients={clients} />} */}
		</React.Fragment>
	);
}

export default App;
