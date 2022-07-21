import React from "react";
import Comments from "./Comments";
import Totals from "./Totals";

const CommentsAndTotal = () => {
	return (
		<div className="comments-and-total-container w-100">
			<Comments/>
			<Totals/>

		
		</div>
	);
};

export default CommentsAndTotal;
