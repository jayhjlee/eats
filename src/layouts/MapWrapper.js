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
			isLoaded: false,
			restaurants: [],
			coordinates: [],
		};
	}

	componentDidMount() {
		this.props.fetchRestaurants(this.props.user.location);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.coordinates !== this.props.coordinates) {
			const { coordinates, restaurants } = this.props;
			this.setState({
				coordinates,
				restaurants,
			});
		}
	}

	render() {
		const { isLoggedIn, token, user } = this.props;
		if (!isLoggedIn && !token && !user) return <Redirect to="/log-in" />;

		if (this.state.coordinates.length) {
			this.map = new mapboxgl.Map({
				container: "MapContainer",
				style: "mapbox://styles/mapbox/streets-v11",
				center: this.state.coordinates,
				zoom: 14,
			});
		}

		return (
			<section>
				<div id="MapContainer" className="mapContainer" />
			</section>
		);
	}
}

const mapStateToProps = state => {
	const { restaurants, coordinates } = state.places;

	return {
		restaurants,
		coordinates,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchRestaurants: location => dispatch(fetchPlaces(location)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MapWrapper);
