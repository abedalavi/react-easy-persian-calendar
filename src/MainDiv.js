import React, { Component } from "react";
class MainDiv extends Component {
  render() {
    const divStyle = {
      position: "absolute",
      width: "200px",
      height: "200px",
      backgroundColor: "#e7f1f9",
      display: this.props.IsVisible === true ? 'block' : 'none',
      zIndex: '100',
      borderRadius: "5px",
      boxShadow: "0px 0px 3px 0px black"
    };
    return <div style={divStyle}></div>;
  }
}

export default MainDiv;
