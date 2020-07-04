import React, { Component } from "react";
import "./app.css";
class MainDiv extends Component {
  render() {
    const { currentTime } = this.props;
    // console.log(this.props.currentTime);
    return (
      <div
        className="divStyle"
        style={{ display: this.props.isVisible === true ? "block" : "none" }}
      >
        <div className="topBottonsDiv">
          <button className="topButton">&lt;</button>
          <button className="topButton">
            {currentTime.toLocaleString("fa-IR", { year: "numeric" })}
          </button>
          <button className="topButton">
            {currentTime.toLocaleString("fa-IR", { month: "long" })}{" "}
          </button>
          <button className="topButton">&gt;</button>
        </div>
      </div>
    );
  }
}

export default MainDiv;
