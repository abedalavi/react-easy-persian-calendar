import React, { Component } from "react";
class MonthDiv extends Component {
  state = {};
  render() {
    const { currentTime, rtl, monthVisible } = this.props;
    const monthStyle = "monthRow " + (rtl === true ? "rtl" : "ltr");
    return (
      <div
        className="divStyle"
        style={{ display: monthVisible === true ? "block" : "none" }}
      >
        <div className="flexJustifyCenter">
          <div className={monthStyle}>
            <button onClick={() => this.props.handleMonthInMonthClick()}>
              فروردین
            </button>
            <button onClick={() => this.props.handleMonthInMonthClick()}>
              اردیبهشت
            </button>
            <button onClick={() => this.props.handleMonthInMonthClick()}>
              خرداد
            </button>
          </div>
          <div className={monthStyle}>
            <button onClick={() => this.props.handleMonthInMonthClick()}>
              تیر
            </button>
            <button onClick={() => this.props.handleMonthInMonthClick()}>
              مرداد
            </button>
            <button onClick={() => this.props.handleMonthInMonthClick()}>
              شهریور
            </button>
          </div>
          <div className={monthStyle}>
            <button onClick={() => this.props.handleMonthInMonthClick()}>
              مهر
            </button>
            <button onClick={() => this.props.handleMonthInMonthClick()}>
              آبان
            </button>
            <button onClick={() => this.props.handleMonthInMonthClick()}>
              آذر
            </button>
          </div>
          <div className={monthStyle}>
            <button onClick={() => this.props.handleMonthInMonthClick()}>
              دی
            </button>
            <button onClick={() => this.props.handleMonthInMonthClick()}>
              بهمن
            </button>
            <button onClick={() => this.props.handleMonthInMonthClick()}>
              اسفند
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MonthDiv;
