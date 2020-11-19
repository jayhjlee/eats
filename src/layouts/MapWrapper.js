import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import mapboxgl from "mapbox-gl";

import secrets from "../../secrets";
import { fetchLocation } from "../store/actions/user";
import { fetchPlaces } from "../store/actions/places";

mapboxgl.accessToken = secrets.mapBoxKey;

class MapWrapper extends Component {
	constructor(props) {
		super(props);
		this.map = React.createRef();

		this.state = {
			isLoaded: false,
			restaurants: [],
			coordinates: [],
		};
	}

	componentDidMount() {
		this.props.fetchRestaurants(this.props.user.location);
		this.props.fetchLocation();
	}

	componentDidUpdate(prevProps) {
		const { coordinates, restaurants } = this.props;
		const newCoordinates = [coordinates.lng, coordinates.lat];

		if (newCoordinates[0] !== this.state.coordinates[0]) {
			this.setState({
				coordinates: newCoordinates,
				restaurants,
			});

			this.map = new mapboxgl.Map({
				container: "MapContainer",
				style: "mapbox://styles/mapbox/streets-v11",
				center: newCoordinates,
				zoom: 15,
			});
		}
		// console.log(this.state);
		// const { coordinates } = prevProps;
		// console.log(coordinates, this.props.coordinates);
		// if (coordinates !== this.props.coordinates) {
		// 	const newCoordinates = [coordinates.lng, coordinates.lat];

		// }
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
	const { coordinates } = state.user;
	const { restaurants } = state.places;

	return {
		coordinates,
		restaurants,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchRestaurants: location => dispatch(fetchPlaces(location)),
		fetchLocation: () => dispatch(fetchLocation()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MapWrapper);
