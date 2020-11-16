import React from "react";

const Button = ({ action, innerText }) => {
	return (
		<button onClick={action} className="btn btn-primary">
			<p>{innerText ? innerText : null}</p>
		</button>
	);
};

export default Button;
