import React, { Component } from "react";
import Input from "../components/Input";

class AddPlaceForm extends Component {
	render() {
		return (
			<div className="add-place-form">
				<div className="card">
					<form className="flex wrap">
						<Input
							classes="full-width"
							label="Name"
							value="ABC Napoli"
							action={() => console.log("hello")}
							name="example"
						/>
						<Input
							classes="half-width"
							label="Name"
							value="ABC Napoli"
							action={() => console.log("hello")}
							name="example"
						/>
						<Input
							classes="half-width"
							label="Name"
							value="ABC Napoli"
							action={() => console.log("hello")}
							name="example"
						/>
					</form>
				</div>
			</div>
		);
	}
}

export default AddPlaceForm;
