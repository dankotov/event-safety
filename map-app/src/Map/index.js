import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import servicePoints from '../services/points';
import styled from 'styled-components';
import './index.css';

const Wrapper = styled.div`
	width: ${props => props.width};
	height: ${props => props.height};
`;

const Map = ({ points }) => {

	const [latlng, setLatLng] = useState([]);
	const [type, setType] = useState("");
	const [description, setDescription] = useState("");


	const mapRef = useRef(null);

	//Creation of map

	useEffect(() => {

		delete L.Icon.Default.prototype._getIconUrl;
		L.Icon.Default.mergeOptions({
			iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
			iconUrl: require("leaflet/dist/images/marker-icon.png"),
			shadowUrl: require("leaflet/dist/images/marker-shadow.png")
		});

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

		const marker = L.marker();
		function onMapClick(e) {
			marker.setLatLng(e.latlng).addTo(mapRef.current);
			console.log(marker.getLatLng());
			const latlng = marker.getLatLng();
			setLatLng([latlng.lat, latlng.lng]);
			console.log("state", latlng);
		}
		mapRef.current.on('click', onMapClick);


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


	const handleTypeChange = (e) => {
		setType(e.target.value);
	}

	const handleDescriptionChange = (e) => {
		setDescription(e.target.value);
	}

	const handleFormSubmission = async (e) => {
		try {
			const newPoint = await servicePoints.submitPoint({ "type": type, "content": description, "latitude": latlng[0], "longitude": latlng[1] });
			points.concat(newPoint);
		}
		catch (ex) {
			console.log('error', ex);
		}
		setDescription("");
		setType("");
		setLatLng([]);
	}


	return (
		<>
			<div style={{ display: "block", width: "100%" }}>
				<Wrapper style={{ display: "block" }} width="100%" height="600px" id="map" />
				<h2>See something - say something</h2>
				{
					latlng.length > 0 && type && description ?
						<>
							<p style={{ opacity: 0 }}>Please</p>
						</> :
						<p>Please {latlng.length === 0 ? "pin a point on the map" : ""} {type ? "" : ", select the type of an event"} {description ? "" : ", provide a short description"}</p>

				}
				<div className="formContainer">
					<form className="myForm" onSubmit={handleFormSubmission}>
						<select onChange={(e) => handleTypeChange(e)}>
							<option value="">Select type</option>
							<option value="danger">Danger</option>
							<option value="interference">Interference</option>
							<option value="event">Event</option>
						</select>
						<br />
						<input className="inText" type="text" placeholder="short description" onChange={(e) => handleDescriptionChange(e)} /> <br />
						<button disabled={!type || latlng.length == 0 || !description} type="submit">submit</button>
					</form>
				</div>
			</div>
		</>
	)

}

export default Map;