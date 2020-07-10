import React, { Component } from "react";
import {
  returnMonthInPersian,
  convertEnglishDigitToArabic,
} from "./helperMethods";
class MainDiv extends Component {
  render() {
    const { currentTime, rtl, mainVisible, currentPersianTime } = this.props;
    const weekStyle = "flexJustifyCenter " + (rtl === true ? "rtl" : "ltr");
    return (
      <div
        className="divStyle"
        style={{ display: mainVisible === true ? "block" : "none" }}
      >
        <div className="flexJustifyCenter">
          <button className="topButton">&lt;</button>
          <button className="topButton">
            {convertEnglishDigitToArabic(currentPersianTime.jy)}
          </button>
          <button
            className="topButton"
            onClick={() => this.props.handleMonthClick()}
          >
            {returnMonthInPersian(currentPersianTime.jm)}
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
