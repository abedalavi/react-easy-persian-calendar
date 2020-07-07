import React, { Component } from "react";
class MonthDiv extends Component {
  state = {};
  render() {
    const { currentTime, rtl, monthVisible } = this.props;
    const monthStyle = "grid-container monthStyle " + (rtl === true ? "rtl" : "ltr");
    return (
      <div
        className="divStyle"
        style={{ display: monthVisible === true ? "block" : "none" }}
      >
        <div className={monthStyle}>
          <div>
            <button onClick={() => this.props.handleMonthInMonthClick(1)}>
              فروردین
            </button>
          </div>
          <div>
            <button onClick={() => this.props.handleMonthInMonthClick(2)}>
              اردیبهشت
            </button>
          </div>
          <div>
            <button onClick={() => this.props.handleMonthInMonthClick(3)}>
              خرداد
            </button>
          </div>

          <div>
            <button onClick={() => this.props.handleMonthInMonthClick(4)}>
              تیر
            </button>
          </div>
          <div>
            <button onClick={() => this.props.handleMonthInMonthClick(5)}>
              مرداد
            </button>
          </div>
          <div>
            <button onClick={() => this.props.handleMonthInMonthClick(6)}>
              شهریور
            </button>
          </div>

          <div>
            <button onClick={() => this.props.handleMonthInMonthClick(7)}>
              مهر
            </button>
          </div>
          <div>
            <button onClick={() => this.props.handleMonthInMonthClick(8)}>
              آبان
            </button>
          </div>
          <div>
            <button onClick={() => this.props.handleMonthInMonthClick(9)}>
              آذر
            </button>
          </div>
          <div>
            <button onClick={() => this.props.handleMonthInMonthClick(10)}>
              دی
            </button>
          </div>
          <div>
            <button onClick={() => this.props.handleMonthInMonthClick(11)}>
              بهمن
            </button>
          </div>
          <div>
            <button onClick={() => this.props.handleMonthInMonthClick(12)}>
              اسفند
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MonthDiv;
