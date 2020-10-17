import React, { Component, useState } from "react";
import DatePicker from "react-datepicker";
import './InputFields.css'

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
      <input type="text"/>
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
  const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  const [endDate, setEndDate] = useState(new Date("2014/02/10"));
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