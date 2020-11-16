import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import mapboxgl from "mapbox-gl";

import secrets from "../../secrets";

import { fetchPlaces } from "../store/actions/places";

mapboxgl.accessToken = secrets.mapBoxKey;

class MapWrapper extends Component {
	constructor(props) {
		super(props);
		this.map = React.createRef();

		this.state = {
			restaurants: [],
			coordinates: [-74.0567, 40.7992],
		};
	}

	componentDidMount() {
		this.map = new mapboxgl.Map({
			container: "MapContainer",
			style: "mapbox://styles/mapbox/streets-v11",
			center: this.state.coordinates,
			zoom: 15,
		});

		if (!navigator.geolocation) {
			alert("Please allow location sharing");
		} else {
			navigator.geolocation.getCurrentPosition(position => {
				const lng = position.coords.longitude;
				const lat = position.coords.latitude;

				this.setState({
					coordinates: [lng, lat],
				});
			});
		}

		this.props.fetchRestaurants(this.props.user.location);
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

const mapStateToProps = state => {
	const { restaurants } = state.places;

	return {
		restaurants,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchRestaurants: location => dispatch(fetchPlaces(location)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MapWrapper);
