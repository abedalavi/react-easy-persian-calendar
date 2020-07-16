import React, { Component } from "react";
import jalaali from "jalaali-js";
class MonthDiv extends Component {
  state = {};
  render() {
    const { currentTime, rtl, monthVisible } = this.props;
    const monthStyle =
      "grid-container monthStyle " + (rtl === true ? "rtl" : "ltr");
    let monthStyle_button = "monthStyle_button";
    const currentMonth = jalaali.toJalaali(currentTime).jm;
    return (
      <div
        className="divStyle"
        style={{ display: monthVisible === true ? "block" : "none" }}
      >
        <div className={monthStyle}>
          <div>
            <button
              onClick={() => this.props.handleMonthInMonthClick(1)}
              className={currentMonth === 1 ?  'monthStyle_button thin-border' : monthStyle_button}
            >
              فروردین
            </button>
          </div>
          <div>
            <button
              onClick={() => this.props.handleMonthInMonthClick(2)}
              className={currentMonth === 2 ?  'monthStyle_button thin-border' : monthStyle_button}
            >
              اردیبهشت
            </button>
          </div>
          <div>
            <button
              onClick={() => this.props.handleMonthInMonthClick(3)}
              className={currentMonth === 3 ?  'monthStyle_button thin-border' : monthStyle_button}
            >
              خرداد
            </button>
          </div>

          <div>
            <button
              onClick={() => this.props.handleMonthInMonthClick(4)}
              className={currentMonth === 4 ?  'monthStyle_button thin-border' : monthStyle_button}
            >
              تیر
            </button>
          </div>
          <div>
            <button
              onClick={() => this.props.handleMonthInMonthClick(5)}
              className={currentMonth === 5 ?  'monthStyle_button thin-border' : monthStyle_button}
            >
              مرداد
            </button>
          </div>
          <div>
            <button
              onClick={() => this.props.handleMonthInMonthClick(6)}
              className={currentMonth === 6 ?  'monthStyle_button thin-border' : monthStyle_button}
            >
              شهریور
            </button>
          </div>

          <div>
            <button
              onClick={() => this.props.handleMonthInMonthClick(7)}
              className={currentMonth === 7 ?  'monthStyle_button thin-border' : monthStyle_button}
            >
              مهر
            </button>
          </div>
          <div>
            <button
              onClick={() => this.props.handleMonthInMonthClick(8)}
              className={currentMonth === 8 ?  'monthStyle_button thin-border' : monthStyle_button}
            >
              آبان
            </button>
          </div>
          <div>
            <button
              onClick={() => this.props.handleMonthInMonthClick(9)}
              className={currentMonth === 9 ?  'monthStyle_button thin-border' : monthStyle_button}
            >
              آذر
            </button>
          </div>
          <div>
            <button
              onClick={() => this.props.handleMonthInMonthClick(10)}
              className={currentMonth === 10 ?  'monthStyle_button thin-border' : monthStyle_button}
            >
              دی
            </button>
          </div>
          <div>
            <button
              onClick={() => this.props.handleMonthInMonthClick(11)}
              className={currentMonth === 11 ?  'monthStyle_button thin-border' : monthStyle_button}
            >
              بهمن
            </button>
          </div>
          <div>
            <button
              onClick={() => this.props.handleMonthInMonthClick(12)}
              className={currentMonth === 12 ?  'monthStyle_button thin-border' : monthStyle_button}
            >
              اسفند
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MonthDiv;
