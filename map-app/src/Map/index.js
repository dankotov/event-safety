import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: ${props => props.width};
	height: ${props => props.height};
	@media only screen and (max-width: 840px) {
		width: 700px;
		height: 600px;
	}
	@media only screen and (max-width: 740px) {
		width: 600px;
		height: 600px;
	}
	@media only screen and (max-width: 640px) {
		width: 540px;
		height: 600px;
	}
	@media only screen and (max-width: 540px) {
		width: 440px;
		height: 500px;
	}
	@media only screen and (max-width: 450px) {
		width: 100%;
		height: 500px;
	}
`;

export default class Map extends React.Component {
	componentDidMount() {
		this.map = L.map('map', {
			center: [43.657998, -79.378355],
			zoom: 17,
			zoomControl: false
		});
		
		L.tileLayer('https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
			detectRetina: true,
			maxZoom: 20,
			maxNativeZoom: 17,
		}).addTo(this.map);
	}

	render() {
		return <Wrapper width="800px" height="600px" id="map" />
	}
}