import React, { Component } from "react";
import { Link } from "react-router-dom";

class Sidebar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section>
				<div className="sidebar">
					<div className="flex">
						<ul className="main-menu mt-1">
							<li>
								<span className="sidebar-item">
									<i className="fas fa-list"></i>&nbsp;&nbsp;View
								</span>
							</li>
							<li>
								<span className="sidebar-item">
									<i className="fas fa-search"></i>&nbsp;&nbsp;Search
								</span>
							</li>
						</ul>
					</div>
				</div>
			</section>
		);
	}
}

export default Sidebar;
