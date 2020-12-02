import React, { useState } from "react";

const Input = ({ type, label, name, action, value, classes, asterisk }) => {
	return (
		<div className={classes ? "form-control " + classes : "form-control"}>
			<label className="py-2">{label && asterisk ? "*" + label : label}</label>
			<input
				name={name}
				type={type ? type : "text"}
				value={value}
				onChange={action}
			/>
		</div>
	);
};

export default Input;
