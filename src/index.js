import React, { Fragment } from "react";
import MainDiv from "./MainDiv";
class PersianCalendar extends React.Component {
  state = {
    isVisible: this.props.isVisible,
    currentTime: this.props.currentTime,
  };
  onTextBoxClick = () => {
    const {isVisible,currentTime} = this.state;
    this.setState({ isVisible: !isVisible, currentTime: new Date() });
  };
  render() {
    console.log(this.state.isVisible);
    return (
      <Fragment>
        <div style={{ display: "inline-block" }}>
          <input type="text" onClick={() => this.onTextBoxClick()}></input>
          <MainDiv
            isVisible={this.state.isVisible}
            currentTime={this.state.currentTime}
            rtl={this.props.rtl}
          />
        </div>
      </Fragment>
    );
    a;
  }
}

PersianCalendar.defaultProps = {
  isVisible: false,
  currentTime: new Date(),
  rtl:true
}

export default PersianCalendar;
