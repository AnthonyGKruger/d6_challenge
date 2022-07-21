import React from "react";

const LineItem = () => {
	return (
		<div className="line-item">
			<div className="ba fl w-70">
				<span>item description (should be something long)</span>
			</div>
			<div className="ba fl w-10">
				<span>15%</span>
			</div>
			<div className="ba fl w-10">
				<span>1</span>
			</div>
			<div className="ba fl w-10">
				<span>R----</span>
			</div>
		</div>
	);
};

export default LineItem;
