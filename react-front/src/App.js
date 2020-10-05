import React from "react";
import "./index.css";
import MapDisplay from "./MapDisplay";
import MenuBar from "./MenuBar";
import ResortRanking from "./ResortRanking";
import InputFields from "./InputFields";
import ResultScroll from "./ResultScroll";

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
