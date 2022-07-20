import React from "react";
import "./Invoice.css";

const Invoice = () => {
	const date = new Date();

	return (
		<div className="container center ba br1 w-80">
			<div className="company-header ">
				<div className="fl w-50">
					<h1>Company Name</h1>
					<span>
						Street Address
						<br />
					</span>
					<span>
						City, state, zip
						<br />
					</span>
					<span>
						Phone: 00000000000
						<br />
					</span>
					<span>
						Website: somedomain.com
						<br />
					</span>
				</div>
				<div className="fr w-20">
					<h1>Invoice</h1>
					<div className="fl w-50">
						<span>
							Date
							<br />
						</span>
						<span>
							Invoice #
							<br />
						</span>
						<span>
							Customer ID
							<br />
						</span>
						<span>
							Due Date
							<br />
						</span>
					</div>
					<div className="fl w-50">
						<div className="ba br1 br--top">{`${date.getFullYear()}/${
							date.getMonth() + 1
						}/${date.getDate()}`}</div>
						<div className="ba">00000001</div>
						<div className="ba">00000001</div>
						<div className="ba br2 br--bottom bg-washed-blue">
							<input className="bg-washed-blue" type="date" /> {/*remember to link to form*/}
						</div>
					</div>
				</div>
			</div>


            <div className="fl w-50">
                <div><span>BILL TO</span></div>
                <div><span>Client name</span></div>
                <div><span>Client company name</span></div>
                <div><span>Client street address</span></div>
                <div><span>Client city, state, zip code</span></div>
                <div><span>Client phone</span></div>
            </div>

            
		</div>
	);
};

export default Invoice;
