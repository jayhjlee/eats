import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import store from "../store";

import Header from "../layouts/Header";
import Home from "../layouts/Home";
import Alerts from "./Alerts";

// Alert options
const alertOptions = {
	timeout: 3000,
	position: "top center",
	offset: "50px",
};

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<AlertProvider template={AlertTemplate} {...alertOptions}>
					<Fragment>
						<Header />
						<Alerts />
						<Home />
					</Fragment>
				</AlertProvider>
			</Provider>
		);
	}
}

export default App;
