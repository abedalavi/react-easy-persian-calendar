import React, { Fragment } from "react";
import MainDiv from "./MainDiv";
import MonthDiv from "./MonthDiv";
import "./app.css";
class PersianCalendar extends React.Component {
  state = {
    mainVisible: this.props.mainVisible,
    currentTime: this.props.currentTime,
    monthVisible: this.props.monthVisible,
  };
  onTextBoxClick = () => {
    const { mainVisible, currentTime } = this.state;
    if (this.state.mainVisible === true || this.state.monthVisible === true)
      return;
    this.setState({ mainVisible: !mainVisible, currentTime: new Date() });
  };
  handleMonthClick = () => {
    this.setState({
      mainVisible: !this.state.mainVisible,
      monthVisible: !this.state.monthVisible,
    });
  };
  handleMonthInMonthClick = () => {
    this.setState({
      mainVisible: !this.state.mainVisible,
      monthVisible: !this.state.monthVisible,
    });
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
          />
          <MonthDiv
            monthVisible={this.state.monthVisible}
            currentTime={this.state.currentTime}
            rtl={this.props.rtl}
            handleMonthInMonthClick={this.handleMonthInMonthClick}
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
