import React, { Fragment } from "react";
import MainDiv from "./MainDiv";
import MonthDiv from "./MonthDiv";
import jalaali from 'jalaali-js';
import "./app.css";
class PersianCalendar extends React.Component {
  state = {
    mainVisible: this.props.mainVisible,
    currentTime: this.props.currentTime,
    monthVisible: this.props.monthVisible,
    currentPersianTime: ''
  };
  onTextBoxClick = () => {
    const { mainVisible, currentTime } = this.state;
    if (this.state.mainVisible === true || this.state.monthVisible === true)
      return;
    this.setState({ mainVisible: !mainVisible, currentTime: new Date() , currentPersianTime: jalaali.toJalaali(new Date())});
  };
  handleMonthClick = () => {
    this.setState({
      mainVisible: !this.state.mainVisible,
      monthVisible: !this.state.monthVisible,
    });
  };
  handleMonthInMonthClick = (month) => {
    this.setState({
      mainVisible: !this.state.mainVisible,
      monthVisible: !this.state.monthVisible,
    });
    let year = this.state.currentPersianTime.jy;
    let newMonth = month;
    let day = this.state.currentPersianTime.jd;
    let currentTime = jalaali.toGregorian(year,newMonth,day);
    console.log(currentTime);
    currentTime = new Date(currentTime.gy,currentTime.gm-1,currentTime.gd);
    console.log(currentTime);
    this.setState({currentTime});
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
  rtl: true,
};

export default PersianCalendar;
