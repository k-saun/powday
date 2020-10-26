import React, { useState } from 'react'
import ReactMapGL, {Marker} from "react-map-gl";
import * as resortData from "../exampleData/fake-resorts.json";
import "../map.css";

export const Map = () => {
    const [viewport, setViewport] = useState({
        width: "100%",
        height: "50vh",
        latitude: 43.6515,
        longitude: -116.2023,
        zoom: 10
    });

    const mapBoxToken = "pk.eyJ1IjoiZXJpYy1wZXRlcnNvbjE3NSIsImEiOiJja2ZvbDcyemUwMWlrMnJudTNtd2F0a2VnIn0.423dDz6mycUHod5Y2rjWKg";
    const mapStyleLink = "mapbox://styles/eric-peterson175/ckfolrv1v07u91anrzyhk4jhd";

    return (
        <ReactMapGL
            {... viewport}
            mapboxApiAccessToken={mapBoxToken}
            mapStyle={mapStyleLink}
            onViewportChange={viewport => {
            setViewport(viewport);
            }}>
                {resortData.features.map((resort) =>(
                    <Marker key={resort.properties.RESORT_ID}
                            latitude={resort.geometry.coordinates[0]}
                            longitude={resort.geometry.coordinates[1]}>
                        <button class="resort-btn">
                            <img src="../../static/react/map-icon.svg"></img>
                        </button>
                    </Marker>
                ))}
        </ReactMapGL>
    )
}