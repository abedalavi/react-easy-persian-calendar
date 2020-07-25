import React, { Component, Fragment } from "react";
import jalaali from "jalaali-js";
import {
  returnMonthInPersian,
  convertEnglishDigitToArabic,
} from "./helperMethods";
class YearDiv extends Component {
  state = {};

  constructor(props) {
    super();
    this.myRef = React.createRef();
  }

  componentDidUpdate() {
    if (this.myRef.current !== null) {
      this.myRef.current.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
    }
  }

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
                return (
                  <button
                    onClick={() => this.props.handleYearInYearClick(year)}
                    key={year}
                    ref={currentPersianTime.jy === year ? this.myRef : null}
                    className={
                      currentPersianTime.jy === year
                        ? `yearRow_button thin-border`
                        : `yearRow_button`
                    }
                  >
                    {convertEnglishDigitToArabic(year)}
                  </button>
                );
              }
            })}
          </div>
          <div className="flexJustifyCenter yearRow">
            {arrayOfYear.map((year) => {
              if (
                year >= currentYearJalaali - 100 + 22 &&
                year < currentYearJalaali - 100 + 44
              ) {
                return (
                  <button
                    onClick={() => this.props.handleYearInYearClick(year)}
                    key={year}
                    ref={currentPersianTime.jy === year ? this.myRef : null}
                    className={
                      currentPersianTime.jy === year
                        ? `yearRow_button thin-border`
                        : `yearRow_button`
                    }
                  >
                    {convertEnglishDigitToArabic(year)}
                  </button>
                );
              }
            })}
          </div>
          <div className="flexJustifyCenter yearRow">
            {arrayOfYear.map((year) => {
              if (
                year >= currentYearJalaali - 100 + 44 &&
                year < currentYearJalaali - 100 + 66
              ) {
                return (
                  <button
                    onClick={() => this.props.handleYearInYearClick(year)}
                    key={year}
                    ref={currentPersianTime.jy === year ? this.myRef : null}
                    className={
                      currentPersianTime.jy === year
                        ? `yearRow_button thin-border`
                        : `yearRow_button`
                    }
                  >
                    {convertEnglishDigitToArabic(year)}
                  </button>
                );
              }
            })}
          </div>
          <div className="flexJustifyCenter yearRow">
            {arrayOfYear.map((year) => {
              if (
                year >= currentYearJalaali - 100 + 66 &&
                year < currentYearJalaali - 100 + 88
              ) {
                return (
                  <button
                    onClick={() => this.props.handleYearInYearClick(year)}
                    key={year}
                    ref={currentPersianTime.jy === year ? this.myRef : null}
                    className={
                      currentPersianTime.jy === year
                        ? `yearRow_button thin-border`
                        : `yearRow_button`
                    }
                  >
                    {convertEnglishDigitToArabic(year)}
                  </button>
                );
              }
            })}
          </div>
          <div className="flexJustifyCenter yearRow">
            {arrayOfYear.map((year) => {
              if (
                year >= currentYearJalaali - 100 + 88 &&
                year < currentYearJalaali - 100 + 110
              ) {
                return (
                  <button
                    onClick={() => this.props.handleYearInYearClick(year)}
                    key={year}
                    ref={currentPersianTime.jy === year ? this.myRef : null}
                    className={
                      currentPersianTime.jy === year
                        ? `yearRow_button thin-border`
                        : `yearRow_button`
                    }
                  >
                    {convertEnglishDigitToArabic(year)}
                  </button>
                );
              }
            })}
          </div>
          <div className="flexJustifyCenter yearRow">
            {arrayOfYear.map((year) => {
              if (
                year >= currentYearJalaali - 100 + 110 &&
                year < currentYearJalaali - 100 + 132
              ) {
                return (
                  <button
                    onClick={() => this.props.handleYearInYearClick(year)}
                    key={year}
                    ref={currentPersianTime.jy === year ? this.myRef : null}
                    className={
                      currentPersianTime.jy === year
                        ? `yearRow_button thin-border`
                        : `yearRow_button`
                    }
                  >
                    {convertEnglishDigitToArabic(year)}
                  </button>
                );
              }
            })}
          </div>
          <div className="flexJustifyCenter yearRow">
            {arrayOfYear.map((year) => {
              if (
                year >= currentYearJalaali - 100 + 132 &&
                year < currentYearJalaali - 100 + 154
              ) {
                return (
                  <button
                    onClick={() => this.props.handleYearInYearClick(year)}
                    key={year}
                    ref={currentPersianTime.jy === year ? this.myRef : null}
                    className={
                      currentPersianTime.jy === year
                        ? `yearRow_button thin-border`
                        : `yearRow_button`
                    }
                  >
                    {convertEnglishDigitToArabic(year)}
                  </button>
                );
              }
            })}
          </div>
        </div>
      </Fragment>
    );
  }
}

YearDiv.displayName = "YearDiv"

export default YearDiv;
