import React from "react";

const Button = ({ action, innerText, classes }) => {
	return (
		<button
			onClick={action}
			className={classes ? classes + " btn btn-primary" : "btn btn-primary"}>
			<p>{innerText ? innerText : null}</p>
		</button>
	);
};

export default Button;
