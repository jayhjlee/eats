import React, { useState } from "react";

const Input = ({ type, label, name, action, value }) => {
	return (
		<div className="form-control">
			<label className="py-2">{label ? label : null}</label>
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
