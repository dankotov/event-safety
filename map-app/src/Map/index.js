import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: ${props => props.width};
	height: ${props => props.height};
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

		var circleDanger = L.circle([43.657998, -79.378355], {
			color: 'red',
			fillColor: '#f03',
			fillOpacity: 0.5,
			radius: 17,
		}).addTo(this.map);
		circleDanger.bindPopup("Agressive homeless man");

		var circleInterference = L.circle([43.659366, -79.379605], {
			color: '#ff8c00',
			fillColor: '#ffa500',
			fillOpacity: 0.5,
			radius: 17,
		}).addTo(this.map);
		circleInterference.bindPopup("Some construction on");

		var circleFun = L.circle([43.656122, -79.380933], {
			color: 'green',
			fillColor: '#90ee90',
			fillOpacity: 0.5,
			radius: 17,
		}).addTo(this.map);
		circleFun.bindPopup("Nice guitarist performing");

		console.log("points in map", this.props.points)

		/*var circleTest = L.circle([this.props.points[0].latitude, this.props.points[0].longitude], {
			color: 'red',
			fillColor: '#f03',
			fillOpacity: 0.5,
			radius: 19,
		}).addTo(this.map);
		circleTest.bindPopup("Agressive homeless man");*/

	}

	render() {
		return <Wrapper width="100%" height="600px" id="map" />
	}
}