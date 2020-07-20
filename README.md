# react_simple_persian_calendar

Here is a persian datepicker(calendar) React component that you are free to use in your project.  
This component is compatible with Bootstrap 4.5.0.



## Installation
The component can be installed via npm:

```shell
$ npm i react_simple_persian_calendar
```


## Usage
Here is an simple example of usage:

```js
import React from "react";
import PersianCalendar from "react_simple_persian_calendar";

function App() {
  const onChangePersianDatePicker = (date) => {
    console.log(date);
  };

  return <PersianCalendar 
            onChange={onChange}   
            currentTime={new Date("1987,01,22")}
          />;
}

export default App;
```

## Retrun type
This calendar return ISO 8601 standart time format (i.e, YYY-MM-DDTHH:mm:ss:sssZ).  
You can convert it to any Locale like the example below:

```js
new Date(date).toLocaleDateString('fa-IR'); // "۱۳۹۹/۴/۲۶"
```


## Props
| props        | type           | default value  | comment
| :-------------: |:-------------:| :-----:| :------:
| rtl      | boolean | true | If you have changed the direction of your web application to rtl in advance, you can use this prop to discard the repeated rtl.
| currentTime      | Date | new Date() | You can specify a current time with this prop. When the component is mounted, this date will be shown on the textbox. Make sure you send a ISO standard date like example above.
|onChange|function| - |There is no default value. You must specify a function. When you click on a day, this function is executed with a parameter that show the date.


## contribution
You can fork the repository and contribute to the project, If you find any problem or bug, or if you have any suggestion. I check your pull request as soon as possible.

## Demo
You can follow the link below to see a demo of component.  
http://abedalavi.ir/ReactSimplePersianCalendarTest/