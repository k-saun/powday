import React, { Component, useState } from "react";
import DatePicker from "react-datepicker";
import '../inputFields.css'

import "react-datepicker/dist/react-datepicker.css";

class InputFields extends Component {
  render() {
    return (
      <>
        <input type="submit" value="Search" />

        <table>
          <tr>
            <th>ZIP Code</th>
            <th>Miles From Zip</th>  
            <th>Select Dates</th>
          </tr>
          <tr>
            <td><ZIPinput /></td>
            <td><MilesInput /></td>
            <td id="DateTableCell"><DatePick /></td>
          </tr>
        </table>
      </>
    );
  }
}

export default InputFields;


const ZIPinput = () => {
  return (
  <form>
    <label>
      <input id="ZIP" type="text"/>
    </label>
  </form>
  );
};


const MilesInput = () => {
  return (
  <form>
    <label>
      <input type="text"/>
    </label>
  </form>
  );
};


const DatePick = () => {
  var today = new Date();
  var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
  const [startDate, setStartDate] = useState(new Date(date));
  today.setDate(today.getDate() + 7);
  date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
  const [endDate, setEndDate] = useState(new Date(date));
  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <DatePicker
        selected={endDate}
        onChange={date => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
    </>
  );
}; 