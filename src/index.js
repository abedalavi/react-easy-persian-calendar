import React, { Fragment } from "react";
import MainDiv from './MainDiv';
class PersianCalendar extends React.Component {
  state = {
    IsVisible: false
  }
  onTextBoxClick = () => {
    const {IsVisible} = this.state;
    this.setState( {IsVisible: !IsVisible});
  }
  render() {
    return (
      <Fragment>
        <div style={{display: "inline-block"}}>
          <input type="text" onClick={() => this.onTextBoxClick()}></input>
          <MainDiv IsVisible={this.state.IsVisible}/>
        </div>
      </Fragment>
    );
    a;
  }
}
export default PersianCalendar;
