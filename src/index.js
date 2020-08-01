import React, { Fragment } from "react";
import MainDiv from "./MainDiv";
import MonthDiv from "./MonthDiv";
import jalaali from "jalaali-js";
import YearDiv from "./YearDiv";
import "./app.css";
import {
  convertEnglishDigitToArabic,
  convertPersianDigitToEnglish,
} from "./helperMethods";
class PersianCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.generalDivRef = React.createRef();
  }

  componentWillMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if(this.generalDivRef && !this.generalDivRef.current.contains(event.target)){
        this.setState({mainVisible:false,monthVisible:false,yearVisible: false})
    }
  };

  state = {
    mainVisible: this.props.mainVisible,
    currentTime: this.props.currentTime,
    monthVisible: this.props.monthVisible,
    yearVisible: this.props.yearVisible,
    currentPersianTime: jalaali.toJalaali(this.props.currentTime),
    monthDays: [],
    currentDateInTextBox: "",
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    let currentDateInTextBox, currentTime;
    if (this.props.currentPersianTime === undefined) {
      return;
    }
    if (this.props.currentPersianTime !== prevProps.currentPersianTime) {
      let { currentPersianTime } = this.props;
      currentDateInTextBox = currentPersianTime;
      currentPersianTime = convertPersianDigitToEnglish(currentPersianTime);
      let year = currentPersianTime.substring(
        0,
        currentPersianTime.indexOf("/")
      );
      let month = currentPersianTime.substring(
        currentPersianTime.indexOf("/") + 1,
        currentPersianTime.indexOf("/", currentPersianTime.indexOf("/") + 1)
      );
      let day = currentPersianTime.substring(
        currentPersianTime.indexOf("/", currentPersianTime.indexOf("/") + 1) + 1
      );
      currentTime = jalaali.toGregorian(
        parseInt(year),
        parseInt(month),
        parseInt(day)
      );
      currentTime = new Date(
        currentTime.gy,
        currentTime.gm - 1,
        currentTime.gd
      );
      let currentPersianTimeState = jalaali.toJalaali(currentTime);

      this.setState({
        currentTime,
        currentPersianTime: currentPersianTimeState,
        currentDateInTextBox,
      });
      this.props.onChange(currentTime.toISOString());
    }
  }

  componentDidMount() {
    if(this.props.startBlank === true){
      this.blankClick();
      return;
    }
    let currentDateInTextBox, currentTime;
    if (this.props.currentPersianTime === undefined) {
      currentDateInTextBox =
        this.state.currentPersianTime.jy +
        "/" +
        this.state.currentPersianTime.jm +
        "/" +
        this.state.currentPersianTime.jd;
    }
    if (this.props.currentPersianTime !== undefined) {
      let { currentPersianTime } = this.props;
      currentDateInTextBox = currentPersianTime;
      currentPersianTime = convertPersianDigitToEnglish(currentPersianTime);
      let year = currentPersianTime.substring(
        0,
        currentPersianTime.indexOf("/")
      );
      let month = currentPersianTime.substring(
        currentPersianTime.indexOf("/") + 1,
        currentPersianTime.indexOf("/", currentPersianTime.indexOf("/") + 1)
      );
      let day = currentPersianTime.substring(
        currentPersianTime.indexOf("/", currentPersianTime.indexOf("/") + 1) + 1
      );
      currentTime = jalaali.toGregorian(
        parseInt(year),
        parseInt(month),
        parseInt(day)
      );
      currentTime = new Date(
        currentTime.gy,
        currentTime.gm - 1,
        currentTime.gd
      );
      let currentPersianTimeState = jalaali.toJalaali(currentTime);

      this.setState({
        currentTime,
        currentPersianTime: currentPersianTimeState,
      });
    }
    this.setState({ currentDateInTextBox });
  }

  blankClick = () => {
    const { mainVisible } = this.state;
    const currentDateInTextBox = "";
    this.setState({ mainVisible: false, currentDateInTextBox });
    this.props.onChange(undefined);
  };

  onTextBoxClick = () => {
    const { mainVisible, currentPersianTime } = this.state;
    let monthDays = this.fillDayArray(currentPersianTime);
    this.setState({
      mainVisible: !mainVisible,
      monthDays,
    });
  };

  findFirstDayOfMonth = (currentPersianTime) => {
    let gregDate = jalaali.toGregorian(
      currentPersianTime.jy,
      currentPersianTime.jm,
      1
    );
    return new Date(gregDate.gy, gregDate.gm - 1, gregDate.gd).getDay();
  };

  findLastDayOfMonth = (currentPersianTime) => {
    return jalaali.jalaaliMonthLength(
      currentPersianTime.jy,
      currentPersianTime.jm
    );
  };

  fillDayArray = (currentPersianTime) => {
    let monthDays = [];
    for (
      let day = 0;
      day <= this.findFirstDayOfMonth(currentPersianTime);
      day++
    ) {
      monthDays[day] = "";
    }

    for (
      let day = this.findFirstDayOfMonth(currentPersianTime) + 1, j = 1;
      j <= this.findLastDayOfMonth(currentPersianTime);
      day++, j++
    ) {
      monthDays[day] = j;
    }

    for (let day = monthDays.length; day < 42; day++) {
      monthDays[day] = "";
    }
    return monthDays;
  };

  handleYearClick = () => {
    this.setState({
      mainVisible: !this.state.mainVisible,
      yearVisible: !this.state.yearVisible,
    });
  };

  handleYearInYearClick = (year) => {
    this.setState({
      mainVisible: !this.state.mainVisible,
      yearVisible: !this.state.yearVisible,
    });
    let newYear = year;
    let month = this.state.currentPersianTime.jm;
    let day = this.state.currentPersianTime.jd;
    let currentTime = jalaali.toGregorian(newYear, month, day);
    currentTime = new Date(currentTime.gy, currentTime.gm - 1, currentTime.gd);
    const currentPersianTime = {
      jy: year,
      jm: this.state.currentPersianTime.jm,
      jd: this.state.currentPersianTime.jd,
    };
    let monthDays = this.fillDayArray(currentPersianTime);
    this.setState({ currentPersianTime, currentTime, monthDays });
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
    let currentTime = jalaali.toGregorian(year, newMonth, day);
    currentTime = new Date(currentTime.gy, currentTime.gm - 1, currentTime.gd);
    const currentPersianTime = {
      jy: this.state.currentPersianTime.jy,
      jm: month,
      jd: this.state.currentPersianTime.jd,
    };
    let monthDays = this.fillDayArray(currentPersianTime);
    this.setState({ currentTime, currentPersianTime, monthDays });
  };

  handlePrevClick = () => {
    let currentPersianTime = {};
    if (this.state.currentPersianTime.jm === 1) {
      currentPersianTime = {
        jy: this.state.currentPersianTime.jy - 1,
        jm: 12,
        jd: this.state.currentPersianTime.jd,
      };
    } else {
      currentPersianTime = {
        jy: this.state.currentPersianTime.jy,
        jm: this.state.currentPersianTime.jm - 1,
        jd: this.state.currentPersianTime.jd,
      };
    }
    let monthDays = this.fillDayArray(currentPersianTime);
    this.setState({ currentPersianTime, monthDays });
  };

  handleNextClick = () => {
    let currentPersianTime = {};
    if (this.state.currentPersianTime.jm === 12) {
      currentPersianTime = {
        jy: this.state.currentPersianTime.jy + 1,
        jm: 1,
        jd: this.state.currentPersianTime.jd,
      };
    } else {
      currentPersianTime = {
        jy: this.state.currentPersianTime.jy,
        jm: this.state.currentPersianTime.jm + 1,
        jd: this.state.currentPersianTime.jd,
      };
    }
    let monthDays = this.fillDayArray(currentPersianTime);
    this.setState({ currentPersianTime, monthDays });
  };

  handleDayClick = (day) => {
    this.setState({
      mainVisible: !this.state.mainVisible,
    });
    let year = this.state.currentPersianTime.jy;
    let month = this.state.currentPersianTime.jm;
    let newDay = day;
    let currentTime = jalaali.toGregorian(year, month, newDay);
    currentTime = new Date(currentTime.gy, currentTime.gm - 1, currentTime.gd);
    const currentPersianTime = {
      jy: this.state.currentPersianTime.jy,
      jm: this.state.currentPersianTime.jm,
      jd: day,
    };
    let currentDateInTextBox =
      this.state.currentPersianTime.jy +
      "/" +
      this.state.currentPersianTime.jm +
      "/" +
      day;
    this.setState({ currentTime, currentPersianTime, currentDateInTextBox });
    this.props.onChange(currentTime.toISOString());
  };

  generalStyle = {
    all: "initial",
    display: "inline-block",
    textAlign: "center",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',    sans-serif",
  };

  render() {
    return (
      <Fragment>
        <div style={this.generalStyle} ref={this.generalDivRef}>
          <input
            type="text"
            onClick={() => this.onTextBoxClick()}
            value={convertEnglishDigitToArabic(this.state.currentDateInTextBox)}
            onChange={() => {}}
            onKeyUp={() => {
              return true;
            }}
          ></input>
          <MainDiv
            mainVisible={this.state.mainVisible}
            currentTime={this.state.currentTime}
            rtl={this.props.rtl}
            handleMonthClick={this.handleMonthClick}
            handleYearClick={this.handleYearClick}
            handleDayClick={this.handleDayClick}
            currentPersianTime={this.state.currentPersianTime}
            handlePrevClick={this.handlePrevClick}
            handleNextClick={this.handleNextClick}
            monthDays={this.state.monthDays}
            blankClick={this.blankClick}
            onBlur={this.onBlur}
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
  currentPersianTime: undefined,
  monthVisible: false,
  yearVisible: false,
  rtl: true,
};

PersianCalendar.displayName = "PersianCalendar";

export default PersianCalendar;
