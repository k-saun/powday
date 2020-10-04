import React from "react";
import "./index.css";
import MapDisplay from "./MapDisplay";
import MenuBar from "./MenuBar";
import ResortRanking from "./ResortRanking";

function App() {
  return (
    <div>
      <div className="menuBarDiv">
        <MenuBar />
      </div>
      <div className="mapAndResortDiv">
        <div className="mapColumn">
          <MapDisplay />
        </div>
        <div className="resortRankingColumn">
          <ResortRanking />
        </div>
      </div>
    </div>
  );
}

export default App;
