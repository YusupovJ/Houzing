import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { LocationStyle } from "./style";
import { useShowAlert } from "../../../helpers/functions/functions";

const Location = (props) => {
	const showAlert = useShowAlert();

	const { isLoaded, loadError } = useJsApiLoader({
		id: "location",
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API,
	});

	const position = {
		lat: props?.lat || 41.534532,
		lng: props?.lng || 60.624889,
	};

	if (loadError) {
		showAlert("error", "Map cannot be loaded right now, sorry");
	}

	return (
		<LocationStyle className="location">
			<h3 className="location__title title">Location</h3>
			<ul className="location__info">
				<li className="location__property">
					<strong>Address: </strong>
					<span>{props?.locProperties?.address || "null"}</span>
				</li>
				<li className="location__property">
					<strong>Country: </strong>
					<span>{props?.locProperties?.country || "null"}</span>
				</li>
				<li className="location__property">
					<strong>City: </strong>
					<span>{props?.locProperties?.city || "null"}</span>
				</li>
				<li className="location__property">
					<strong>Region: </strong>
					<span>{props?.locProperties?.region || "null"}</span>
				</li>
				<li className="location__property">
					<strong>Zip: </strong>
					<span>{props?.locProperties?.zip || "null"}</span>
				</li>
			</ul>
			<div className="location__map">
				<GoogleMap
					mapContainerStyle={{
						width: "100%",
						height: "100%",
					}}
					center={position}
					zoom={14}
					onLoad={isLoaded}
				>
					<Marker position={position} />
				</GoogleMap>
			</div>
		</LocationStyle>
	);
};

export default Location;
