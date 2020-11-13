import React, { Component } from "react";
import { Link } from "react-router-dom";

class Sidebar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			createSubMenu: "hidden",
			querySubMenu: "hidden",
			updateSubMenu: "hidden",
			deleteSubMenu: "hidden",
		};

		this.viewSubMenus = this.viewSubMenus.bind(this);
	}

	viewSubMenus(e) {
		const { name } = e.target;

		if (this.state[name] === "hidden") {
			this.setState({
				[e.target.name]: "visible",
			});
		} else {
			this.setState({
				[e.target.name]: "hidden",
			});
		}
	}

	render() {
		const {
			createSubMenu,
			querySubMenu,
			updateSubMenu,
			deleteSubMenu,
		} = this.state;

		return (
			<section>
				<div className="sidebar">
					<div className="flex">
						<ul className="main-menu mt-1">
							<li>
								<a name="createSubMenu" onClick={this.viewSubMenus}>
									Create
								</a>
								<ul className={createSubMenu}>
									<li className="submenus">
										<Link to="/create-schema">Schema</Link>
									</li>
									<li className="submenus">
										<a>Column</a>
									</li>
									<li className="submenus">
										<a>Record</a>
									</li>
								</ul>
							</li>
							<li>
								<a>Query</a>
							</li>
							<li>
								<a>Update</a>
							</li>
							<li>
								<a>Delete</a>
							</li>
							<li>
								<a>Account</a>
							</li>
						</ul>
					</div>
				</div>
			</section>
		);
	}
}

export default Sidebar;
