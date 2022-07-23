import React, { useState } from "react";
import "./Invoice.css";
import Button from "./Button";
import LineItem from "./LineItem";

const Invoice = (props) => {
	const [lineItems, setLineItems] = useState([
		<LineItem
			products={props.products}
			randomNumGenerator={props.randomNumGenerator}
			total={props.total}
			totalVat={props.totalVat}
			subTotal={props.subTotal}
			setTotal={props.setTotal}
			setTotalVat={props.setTotalVat}
			setSubTotal={props.setSubTotal}
		/>,
	]);
	const date = new Date();

	const addLineItem = (event) => {
		const toPush = [...lineItems];
		toPush.push(
			<LineItem
				products={props.products}
				randomNumGenerator={props.randomNumGenerator}
				total={props.total}
				totalVat={props.totalVat}
				subTotal={props.subTotal}
				setTotal={props.setTotal}
				setTotalVat={props.setTotalVat}
				setSubTotal={props.setSubTotal}
			/>
		);
		setLineItems(toPush);
	};

	return (
		<div className="container mt5 mb5 center ba br1 w-70 bg-white">
			<div className="company-header w-100">
				<div className="company-details pl6 dib w-50">
					<h1>
						The Fruit and Veg
						<br /> Distributor (Pty) ltd
					</h1>
					<div className="pa1 ba mr7 br--top br3">
						<span>123 DownTheRoad street</span>
					</div>
					<div className="pa1 ba mr7">
						<span>Pretoria, Gauteng, 0157</span>
					</div>
					<div className="pa1 ba mr7">
						<span>Telephone: 061 034 0820</span>
					</div>
					<div className="pa1 ba mr7">
						<span>Fax: 061 034 0821</span>
					</div>
					<div className="pa1 ba mr7 br--bottom br3">
						<span>www.website.com</span>
					</div>
				</div>

				<div className="invoice-details-container dib pl7 w-40">
					<div className="invoice-details">
						<h1>Invoice</h1>
						<div className="pa1 ba br--top br3">
							<span>
								Date:{" "}
								{`${date.getFullYear()}/${
									date.getMonth() + 1
								}/${date.getDate()}`}
							</span>
						</div>

						<div className="pa1 ba">
							<span>Invoice #00000001</span>
						</div>
						<div className="pa1 ba">
							<span>Customer ID #{props.clientInfo.client_id}</span>
						</div>
						<div className="pa1 ba br--bottom br3 bg-washed-blue">
							<span>
								Due Date: <input className="bg-washed-blue" type="date" />
								{/*remember to link to form*/}
							</span>
						</div>
					</div>
				</div>
			</div>

			<div className="client-details-container center w-100 mt4">
				<div className="client-details ml6 w-30">
					<div className="pa1 ba bg-blue br--top br3">
						<span>BILL TO</span>
					</div>
					<div className="pa1 ba">
						<span>{props.clientInfo.representative}</span>
					</div>
					<div className="pa1 ba">
						<span>{props.clientInfo.company_name}</span>
					</div>
					<div className="pa1 ba">
						<span>{props.clientInfo.street_address}</span>
					</div>
					<div className="pa1 ba">
						<span>{`${props.clientInfo.city}, ${props.clientInfo.state}, ${props.clientInfo.postal_code}`}</span>
					</div>
					<div className="pa1 ba br--bottom br3">
						<span>{props.clientInfo.phone_number}</span>
					</div>
				</div>
			</div>

			<div className="items-container w-100 h7 mt3">
				<div id="items" className="items center w-80">
					<div className="pa2">
						<div className="overflow-auto">
							<table className="f6 w-100  center" cellSpacing="0">
								<thead>
									<tr>
										<th className="w-10 fw6 ba b--black-20 tl pb2 pr3 bg-blue">
											Item
										</th>
										<th className="w-20 fw6 ba b--black-20 tl pb2 pr3 bg-blue">
											name
										</th>
										<th className="w-40 fw6 ba b--black-20 tl pb2 pr3 bg-blue">
											Description
										</th>
										<th className="w-10 fw6 ba b--black-20 tl pb2 pr3 bg-blue">
											Quantity
										</th>
										<th className="w-10 fw6 ba b--black-20 tl pb2 pr3 bg-blue">
											Tax
										</th>
										<th className="w-10 fw6 ba b--black-20 tl pb2 pr3 bg-blue">
											Line Total
										</th>
									</tr>
								</thead>
								<tbody className="lh-copy">{[...lineItems]}</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>

			<div className="button-container mb4 mt4 w-100">
				<div className="dib ml6 buttons">
					<Button
						name="addBtn"
						type="submit"
						text="Add Item"
						styles=" w-15 pa3 mr3 ba bw1 br2 b--black grow"
						// randomNumGenerator={props.randomNumGenerator}
						addLineItem={addLineItem}
					/>
					<Button
						name="generateBtn"
						type="submit"
						text="Generate Invoice"
						styles="w-15 pa3  ba bw1 br2 b--black grow"
					/>
				</div>
			</div>

			<div className="comments dib ml6 w-60">
				<div className="ba pv2 br--top br3 bg-blue">
					<span>OTHER COMMENTS:</span>
				</div>
				<div className="ba br--bottom br3 ">
					<ol>
						<li>Total amount is due within 30 days.</li>
						<li>
							Please include your invoice number as a reference on any EFT
							payments or cheques
						</li>
					</ol>
				</div>
			</div>

			<div className="ml4 w-20 pr5 dib totals">
				<div className="dt dt--fixed">
					<div className="dt-row br3">
						<div className="dtc tc pv3 bg-black-10">Subtotal</div>
						<div className="dtc tc pv3 bg-black-05">R{props.subTotal}</div>
					</div>
					<div className="dt-row">
						<div className="dtc tc pv3 bg-black-10">VAT</div>
						<div className="dtc tc pv3 bg-black-05">R{props.totalVat}</div>
					</div>
					<div className="dt-row">
						<div className="dtc tc pv3 bg-black-10">Total</div>
						<div className="dtc tc pv3 bg-black-05">R{props.total}</div>
					</div>
				</div>
			</div>

			<div className="w-100 mt5">
				<div className="center w-80">
					<span>
						If you have any questions regarding this invoice please contact,
						Anthony on 0610340820 or antman.kruger@gmail.com
					</span>
				</div>
				<div className="center w-30 mt5">
					<span>THANK YOU FOR YOUR BUSINESS!</span>
				</div>
				<div className="center w-90 mt6">
					<span>
						Developed by Anthony Kruger, check out the{" "}
						<a
							href="https://github.com/AnthonyGKruger/d6_challenge"
							target="_blank"
							rel="noreferrer"
						>
							source code
						</a>{" "}
						or my{" "}
						<a
							href="https://www.linkedin.com/in/anthony-gordon-kruger-18950793"
							target="_blank"
							rel="noreferrer"
						>
							{" "}
							linkedIn page
						</a>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Invoice;
