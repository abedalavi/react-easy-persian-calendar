import React, { Fragment } from "react";
import MainDiv from "./MainDiv";
class PersianCalendar extends React.Component {
  state = {
    isVisible: false,
    currentTime: new Date(),
  };
  onTextBoxClick = () => {
    const { isVisible } = this.state;
    this.setState({ isVisible: !isVisible, currentTime: new Date() });
  };
  render() {
    return (
      <Fragment>
        <div style={{ display: "inline-block" }}>
          <input type="text" onClick={() => this.onTextBoxClick()}></input>
          <MainDiv
            isVisible={this.state.isVisible}
            currentTime={this.state.currentTime}
          />
        </div>
      </Fragment>
    );
    a;
  }
}
export default PersianCalendar;
