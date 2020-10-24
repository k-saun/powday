import React, { useState } from "react";
import "./index.css";
import MenuBar from "./MenuBar";
import ResortRanking from "./ResortRanking";
import InputFields from "./InputFields";
import ResultScroll from "./ResultScroll";
import ReactMapGL, {Marker} from "react-map-gl";
import * as resortData from "./exampleData/fake-resorts.json";

function App() {
  const [viewport, setViewport] = useState({
    latitude: 43.6515,
    longitude: -116.2023,
    width: "80vw",
    height: "45vh",
    zoom: 10
  });

  const mapBoxToken = "pk.eyJ1IjoiZXJpYy1wZXRlcnNvbjE3NSIsImEiOiJja2ZvbDcyemUwMWlrMnJudTNtd2F0a2VnIn0.423dDz6mycUHod5Y2rjWKg";
  const mapStyleLink = "mapbox://styles/eric-peterson175/ckfolrv1v07u91anrzyhk4jhd";

  return (
    <div className="mainDiv">
      <div className="menuBarDiv">
        <MenuBar />
      </div>
      <div className="mapAndResortDiv">
        <div className="mapColumn">
          <ReactMapGL
            {... viewport}
            mapboxApiAccessToken={mapBoxToken}
            mapStyle={mapStyleLink}
            onViewportChange={viewport => {
              setViewport(viewport);
            }}>
              {}
          </ReactMapGL>
        </div>
        <div className="resortRankingColumn">
          <ResortRanking />
        </div>
      </div>
      <div className="inputFieldDiv">
        <InputFields />
      </div>
      <div className="resultScrollDiv">
        <ResultScroll />
      </div>
    </div>
  );
}

export default App;
