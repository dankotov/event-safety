import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: ${props => props.width};
	height: ${props => props.height};
`;

const Map = ({ points }) => {

	const mapRef = useRef(null);

//Creation of map

	useEffect(() => {

		mapRef.current = L.map('map', {
			center: [43.657998, -79.378355],
			zoom: 17,
			zoomControl: false
		});

		L.tileLayer('https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
			detectRetina: true,
			maxZoom: 20,
			maxNativeZoom: 17,
		}).addTo(mapRef.current);


	}, [])


//Put points on map

	useEffect(() => {
		points.map(point => {
			if (point.type === "danger") {
				const circle = L.circle([point.latitude, point.longitude], {
					color: 'red',
					fillColor: '#f03',
					fillOpacity: 0.5,
					radius: 17,
				}).addTo(mapRef.current);
				circle.bindPopup(point.content);
			}
			else if (point.type === "interference") {
				const circle = L.circle([point.latitude, point.longitude], {
					color: '#ff8c00',
					fillColor: '#ffa500',
					fillOpacity: 0.5,
					radius: 17,
				}).addTo(mapRef.current);
				circle.bindPopup(point.content);
			}
			else {
				const circle = L.circle([point.latitude, point.longitude], {
					color: 'green',
					fillColor: '#90ee90',
					fillOpacity: 0.5,
					radius: 17,
				}).addTo(mapRef.current);
				circle.bindPopup(point.content);
			}
		})
	}, [])

	return (
		<>
			<Wrapper width="100%" height="600px" id="map" />
		</>
	)

}

export default Map;