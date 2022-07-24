import React from "react";

const Comments = () => {
	return (
		<div className="comments dib ml6 w-60">
			<div className="ba br--top br3 bg-blue">
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
	);
};

export default Comments;
