const returnMonthInPersian = (month) => {
  switch (month) {
    case 1:
      return "فروردین";
      break;
    case 2:
      return "اردیبهشت";
      break;
    case 3:
      return "خرداد";
      break;
    case 4:
      return "تیر";
      break;
    case 5:
      return "مرداد";
      break;
    case 6:
      return "شهریور";
      break;
    case 7:
      return "مهر";
      break;
    case 8:
      return "آبان";
      break;
    case 9:
      return "آذر";
      break;
    case 10:
      return "دی";
      break;
    case 11:
      return "بهمن";
      break;
    case 12:
      return "اسفند";
      break;
  }
};

const convertEnglishDigitToArabic = (digits) => {
  var id = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return digits.toString().replace(/[0-9]/g, (i) => {
    return id[i];
  });
};
const convertPersianDigitToEnglish = (digits) => {
  var id = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  return digits.toString().replace(/[۰-۹]/g, (i) => {
    switch (i) {
      case `۰`:
        return 0;
      case `۱`:
        return 1;
      case `۲`:
        return 2;
      case `۳`:
        return 3;
      case `۴`:
        return 4;
      case `۵`:
        return 5;
      case `۶`:
        return 6;
      case `۷`:
        return 7;
      case `۸`:
        return 8;
      case `۹`:
        return 9;
      default:
        console.log("default");
    }
  });
};
export {
  returnMonthInPersian,
  convertEnglishDigitToArabic,
  convertPersianDigitToEnglish,
};
