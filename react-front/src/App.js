import React, { Component } from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import MenuBar from "./components/MenuBar";
import { Map }  from "./components/Map"; 
import Ranks from "./components/Ranks";
import InputFields from "./components/InputFields";
import ResultScroll from "./components/ResultScroll";
import ReactMapGL from "react-map-gl";
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup'
import Col from 'react-bootstrap/Col';

import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css'

// class App extends Component {
//   const [viewport, setViewport] = useState({
//     latitude: 43.6515,
//     longitude: -116.2023,
//     width: "80vw",
//     height: "45vh",
//     zoom: 10
//   });

//   const mapBoxToken = "pk.eyJ1IjoiZXJpYy1wZXRlcnNvbjE3NSIsImEiOiJja2ZvbDcyemUwMWlrMnJudTNtd2F0a2VnIn0.423dDz6mycUHod5Y2rjWKg";
//   const mapStyleLink = "mapbox://styles/eric-peterson175/ckfolrv1v07u91anrzyhk4jhd";

//   return (
//     <div className="mainDiv">
//       <div className="menuBarDiv">
//         <MenuBar />
//       </div>
//       <div className="mapAndResortDiv">
//         <div className="mapColumn">
//           <ReactMapGL
//             {... viewport}
//             mapboxApiAccessToken={mapBoxToken}
//             mapStyle={mapStyleLink}
//             onViewportChange={viewport => {
//               setViewport(viewport);
//             }}>
//           </ReactMapGL>
//         </div>
//         <div className="resortRankingColumn">
//           <ResortRanking />
//         </div>
//       </div>
//       <div className="inputFieldDiv">
//         <InputFields />
//       </div>
//       <div className="resultScrollDiv">
//         <ResultScroll />
//       </div>
//     </div>
//   );
// }
export class App extends Component {
  state = {
    top3: [
      {
        id:0,
        name:'Bogus Basin',
        basedepth:41
      },
      {
        id:1,
        name:'Targee',
        basedepth:70
      }
    ]
  }
  
    render() {
      return (
        <Router>
        <div className="App">
          <div>
            <MenuBar/>
          </div>
          <Jumbotron fluid>
            <div className="mapAndResortDiv">
                <div className="mapColumn">
                  <Map/>
                </div>
                <div className="resortRankingColumn">
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <h3 className="text-center">leaders</h3>
                    </ListGroup.Item>
                    <Ranks top3={this.state.top3}/>
                  </ListGroup>
                </div>
            </div>
          </Jumbotron>
          <div className="inputFieldDiv">
            <InputFields />
          </div>
          <div className="resultScrollDiv">
            <ResultScroll />
          </div>
        </div>
        </Router>
      );
    }
  }
  
export default App;
