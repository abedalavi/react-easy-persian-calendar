import React, { Fragment } from "react";
import MainDiv from "./MainDiv";
import MonthDiv from "./MonthDiv";
import jalaali from 'jalaali-js';
import YearDiv from './YearDiv';
import "./app.css";
class PersianCalendar extends React.Component {
  state = {
    mainVisible: this.props.mainVisible,
    currentTime: this.props.currentTime,
    monthVisible: this.props.monthVisible,
    yearVisible: this.props.yearVisible,
    currentPersianTime: jalaali.toJalaali(new Date())
  };
  onTextBoxClick = () => {
    const { mainVisible } = this.state;
    this.setState({ mainVisible: !mainVisible, currentTime: new Date() , currentPersianTime: jalaali.toJalaali(new Date())});
  };
  handleMonthClick = () => {
    this.setState({
      mainVisible: !this.state.mainVisible,
      monthVisible: !this.state.monthVisible,
    });
  };
  handleYearInYearClick = (year) => {
    console.log('handleYearInYearClick', year);
  }
  handleMonthInMonthClick = (month) => {
    this.setState({
      mainVisible: !this.state.mainVisible,
      monthVisible: !this.state.monthVisible,
    });
    let year = this.state.currentPersianTime.jy;
    let newMonth = month;
    let day = this.state.currentPersianTime.jd;
    let currentTime = jalaali.toGregorian(year,newMonth,day);
    currentTime = new Date(currentTime.gy,currentTime.gm-1,currentTime.gd);
    const  currentPersianTime = {
      jy: this.state.currentPersianTime.jy,
      jm: month,
      jd: this.state.currentPersianTime.jd
    };
    this.setState({currentTime,currentPersianTime});
  };
  render() {
    return (
      <Fragment>
        <div style={{ display: "inline-block" }}>
          <input type="text" onClick={() => this.onTextBoxClick()}></input>
          <MainDiv
            mainVisible={this.state.mainVisible}
            currentTime={this.state.currentTime}
            rtl={this.props.rtl}
            handleMonthClick={this.handleMonthClick}
            currentPersianTime={this.state.currentPersianTime}
            />
          <MonthDiv
            monthVisible={this.state.monthVisible}
            currentTime={this.state.currentTime}
            rtl={this.props.rtl}
            handleMonthInMonthClick={this.handleMonthInMonthClick}
            currentPersianTime={this.state.currentPersianTime}
          />
          <YearDiv
            yearVisible={this.state.yearVisible}
            currentTime={this.state.currentTime}
            rtl={this.props.rtl}
            handleYearInYearClick={this.handleYearInYearClick}
            currentPersianTime={this.state.currentPersianTime}
          />
        </div>
      </Fragment>
    );
    a;
  }
}

PersianCalendar.defaultProps = {
  mainVisible: false,
  currentTime: new Date(),
  monthVisible: false,
  yearVisible: false,
  rtl: true,
};

export default PersianCalendar;
