import React, { Component, Fragment } from "react";
import jalaali from "jalaali-js";
class YearDiv extends Component {
  state = {};
  render() {
    const { yearVisible, currentPersianTime } = this.props;
    let currentYearJalaali = jalaali.toJalaali(new Date()).jy;
    let arrayOfYear = [];
    for (let i = currentYearJalaali - 100; i < currentYearJalaali + 54; i++) {
      arrayOfYear.push(i);
    }
    return (
      <Fragment>
        <div
          className="divStyle overflowOverlay"
          style={{ display: yearVisible === true ? "block" : "none" }}
        >
          <div className="flexJustifyCenter yearRow">
            {arrayOfYear.map((year) => {
              if (year < currentYearJalaali - 100 + 22) {
                return <button>{year}</button>;
              }
            })}
          </div>
          <div className="flexJustifyCenter yearRow">
          {arrayOfYear.map((year) => {
              if (year >= currentYearJalaali - 100 + 22 &&  year < currentYearJalaali - 100 + 44) {
                return <button>{year}</button>;
              }
            })}
          </div>
          <div className="flexJustifyCenter yearRow">
          {arrayOfYear.map((year) => {
              if (year >= currentYearJalaali - 100 + 44 && year < currentYearJalaali - 100 + 66) {
                return <button>{year}</button>;
              }
            })}
          </div>
          <div className="flexJustifyCenter yearRow">
          {arrayOfYear.map((year) => {
              if (year >= currentYearJalaali - 100 + 66 && year < currentYearJalaali - 100 + 88) {
                return <button>{year}</button>;
              }
            })}
          </div>
          <div className="flexJustifyCenter yearRow">
          {arrayOfYear.map((year) => {
              if (year >= currentYearJalaali - 100 + 88 && year < currentYearJalaali - 100 + 110) {
                return <button>{year}</button>;
              }
            })}
          </div>
          <div className="flexJustifyCenter yearRow">
          {arrayOfYear.map((year) => {
              if (year >= currentYearJalaali - 100 + 110 && year < currentYearJalaali - 100 + 132) {
                return <button>{year}</button>;
              }
            })}
          </div>
          <div className="flexJustifyCenter yearRow">
          {arrayOfYear.map((year) => {
              if (year >= currentYearJalaali - 100 + 132 && year < currentYearJalaali - 100 + 154) {
                return <button>{year}</button>;
              }
            })}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default YearDiv;
