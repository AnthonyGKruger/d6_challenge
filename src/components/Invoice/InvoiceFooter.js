import React from "react";

const InvoiceFooter = () => {
	return (
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
	);
};

export default InvoiceFooter;
