import React, { useState } from "react";

const Input = ({ type, label, name, action, value, classes, required }) => {
	return (
		<div className={classes ? "form-control " + classes : "form-control"}>
			<label className="py-2">{label && required ? "*" + label : label}</label>
			<input
				name={name}
				type={type ? type : "text"}
				required={required ? required : null}
				value={value}
				onChange={action}
			/>
		</div>
	);
};

export default Input;
