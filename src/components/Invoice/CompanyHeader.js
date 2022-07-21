import React from "react";
import CompanyDetails from "./CompanyDetails";

const CompanyHeader = (props) => {
	const date = new Date();
	return (
		<div className="company-header">
			<CompanyDetails/>

			<div className="fr w-50">
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
					<div className="ba br1 br--top">
						{`${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`}
					</div>

					<div className="ba">00000001</div>
					<div className="ba">00000001</div>
					<div className="ba br2 br--bottom bg-washed-blue">
						<input className="bg-washed-blue" type="date" />{" "}
						{/*remember to link to form*/}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CompanyHeader;
