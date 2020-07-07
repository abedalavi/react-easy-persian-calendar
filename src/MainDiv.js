import React, { Component } from "react";
class MainDiv extends Component {
  render() {
    const { currentTime, rtl, mainVisible } = this.props;
    const weekStyle = "weekDiv " + (rtl === true ? "rtl" : "ltr");
    return (
      <div
        className="divStyle"
        style={{ display: mainVisible === true ? "block" : "none" }}
      >
        <div className="topBottonsDiv">
          <button className="topButton">&lt;</button>
          <button className="topButton">
            {currentTime.toLocaleString("fa-IR", { year: "numeric" })}
          </button>
          <button
            className="topButton"
            onClick={() => this.props.handleMonthClick()}
          >
            {currentTime.toLocaleString("fa-IR", { month: "long" })}
          </button>
          <button className="topButton">&gt;</button>
        </div>
        <div className={weekStyle}>
          <span className="weekIcon">ش</span>
          <span className="weekIcon">ی</span>
          <span className="weekIcon">د</span>
          <span className="weekIcon">س</span>
          <span className="weekIcon">چ</span>
          <span className="weekIcon">پ</span>
          <span className="weekIcon">ج</span>
        </div>
      </div>
    );
  }
}

MainDiv.defaultProps = {
  mainVisible: false,
  currentTime: new Date(),
  rtl: true,
};

export default MainDiv;
