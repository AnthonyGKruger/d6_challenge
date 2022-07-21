import React from "react";

const Totals = () => {
	return (
		<div className="ml4 w-20 pr5 dib totals">
			<div className="ba br--top br3 subtotal">
				<span>Subtotal: 0000</span>
			</div>
			<div className="ba vat">
				<span>VAT: 0000</span>
			</div>
			<div className="ba br--bottom br3 total">
				<span>Total: 0000</span>
			</div>
		</div>
	);
};

export default Totals;
