import React, { Component } from "react";
import ListGroup from 'react-bootstrap/ListGroup'
import ZIPinput from "./InputFields"
import * as resorts from "../exampleData/fake-resorts.json";
import * as zipCodes from "../exampleData/us-zip-code-latitude-and-longitude.json";


class ResultScroll extends Component {
  state = {
    listitems: []
  };


  constructor(props) {
    super(props)
    var i;
    var items = [];
    for (i = 0; i < Object.keys(resorts.features).length; i++) {
      var item = (resorts.features[i].properties.NAME) + 
      "\t\t    Depth: " + 
      (resorts.features[i].properties.depth) + 
      "    Location: " +
      (resorts.features[i].geometry.coordinates[0]) + " " +
      (resorts.features[i].geometry.coordinates[1])

      items.push(item);
    }
    this.state = {
      listitems: items
    };
  }

  render() {
    return (
      <React.Fragment>
        <pre class="tab">
        <ul className="list-group">
          {this.state.listitems.map(listitem => (
            <li
              key={listitem}
              class="text-center list-group-item"
            >
              {listitem}
            </li>
          ))}
        </ul>
        </pre>
      </React.Fragment>
    );
  }
}



//zipCodes[0].fields.geopoint
var temp = Object.keys(resorts.features).length;


export default ResultScroll;
