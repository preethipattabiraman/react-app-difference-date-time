import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { startDate: new Date(), endDate: new Date(), difference: 0 };
  }
  calculateDifference = () => {
    let date1 = new Date(this.state.startDate).getTime();
    let date2 = new Date(this.state.endDate).getTime();
    let difference = Math.abs(date1 - date2);

    difference = difference / 1000;
    let seconds = Math.floor(difference % 60);
    difference = difference / 60;
    let minutes = Math.floor(difference % 60);
    difference = difference / 60;
    let hours = Math.floor(difference % 24);
    let days = Math.floor(difference / 24);

    this.setState({
      difference:
        days +
        " days, " +
        hours +
        " hours, " +
        minutes +
        " minutes, " +
        seconds +
        " seconds."
    });
  };

  changeStartDate = (event) => {
    this.setState({ startDate: event.target.value });
  };

  changeEndDate = (event) => {
    this.setState({ endDate: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <h2>Let's find difference between two times, shall we?</h2>
        <label htmlFor="startDate">First Date</label>
        <input
          type="datetime-local"
          id="startDate"
          onChange={this.changeStartDate}
        />
        <br />
        <label htmlFor="endDate">Second Date</label>
        <input
          type="datetime-local"
          id="endDate"
          onChange={this.changeEndDate}
        />
        <br />
        <button onClick={this.calculateDifference}>Find difference!</button>
        <br />
        <label htmlFor="difference">Difference</label>
        <input
          id="difference"
          type="text"
          readOnly
          value={this.state.difference}
        />
      </div>
    );
  }
}
