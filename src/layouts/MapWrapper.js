import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import mapboxgl from "mapbox-gl";
import secrets from "../../secrets";

mapboxgl.accessToken = secrets.mapBoxKey;

class MapWrapper extends Component {
	constructor(props) {
		super(props);
		this.map = React.createRef();
	}

	componentDidMount() {
		this.map = new mapboxgl.Map({
			container: "MapContainer",
			style: "mapbox://styles/mapbox/streets-v11",
			center: [-74.0567, 40.7992],
			zoom: 15,
		});
	}

	render() {
		const { isLoggedIn, token, user } = this.props;
		if (!isLoggedIn && !token && !user) return <Redirect to="/log-in" />;

		return (
			<section>
				<div id="MapContainer" className="mapContainer" />
			</section>
		);
	}
}

export default MapWrapper;
