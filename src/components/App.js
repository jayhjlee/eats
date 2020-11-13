import React, { Component } from "react";
import { Provider } from "react-redux";

import store from "../store";

import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import Home from "../layouts/Home";

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Header />
				<Home />
			</Provider>
		);
	}
}

export default App;
