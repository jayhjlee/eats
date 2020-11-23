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

	render() {
		const { isLoggedIn, token, user, restaurants, coordinates } = this.props;
		if (!isLoggedIn && !token && !user) return <Redirect to="/log-in" />;

		if (coordinates.length) {
			this.map = new mapboxgl.Map({
				container: "MapContainer",
				style: "mapbox://styles/mapbox/streets-v11",
				center: coordinates,
				zoom: 12,
			});
		}

		return (
			<section>
				<div className="mapWrapper flex content-even">
					<div id="MapContainer" className="mapContainer" />
					<div>list of places</div>
				</div>
			</section>
		);
	}
}

export default MapWrapper;
