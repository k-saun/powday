import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Container from 'react-bootstrap/Container';

class Ranks extends Component {
  render() {
    return this.props.top3.map((resort) => (
      <ListGroup.Item className="text-center">{resort.name}, {resort.basedepth}</ListGroup.Item>
    ));
  }
}

export default Ranks;
