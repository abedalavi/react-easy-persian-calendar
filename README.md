# react-easy-persian-calendar

Here is a persian datepicker(calendar) React component that you are free to use in your project.  
This component is compatible with Bootstrap 4.5.0.

![alt text](https://github.com/abedalavi/react-easy-persian-calendar/blob/master/public/sampleImage1.png?raw=true)
            

## Installation
The component can be installed via npm:

```shell
$ npm i react-easy-persian-calendar
```


## Usage
Here is an simple example of usage:

```js
import React from "react";
import PersianCalendar from "react-easy-persian-calendar";

function App() {
  const [myTime, setMyTime] = React.useState(undefined);
  const onChangePersianDatePicker = (date) => {
    setMyTime(date);
    console.log(date);
  };

  return <PersianCalendar 
            onChange={onChangePersianDatePicker}   
            currentTime={new Date(myTime)}
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

If you click on 'پاک کردن تاریخ' to not have a date as return string, you will get **undefined** and you have to handle it like code below:
```js
if (date === undefined) console.log('No date has been chosen!');
```

## Props
| props        | type           | default value  | comment
| :-------------: |:-------------:| :-----:| :------:
| rtl      | boolean | true | If you have changed the direction of your web application to rtl in advance, you can use this prop to discard the repeated rtl.
| currentTime      | Date | new Date() | You can specify a current time with this prop. When the component is mounted, this date will be shown on the textbox. Make sure you send a ISO standard date like example above.
| currentPersianTime  *    | Date | undefined | You can specify a current time in persian date with this prop. When the component is mounted, this date will be shown on the textbox. Make sure you send a format such "۱۳۸۶/۱۲/۱۶".
|onChange|function| - |There is no default value. You must specify a function. When you click on a day, this function is executed with a parameter that show the date.
|startBlank|Boolean| - |If you set this props to true, the component start with a blank textbox.

\* If you set both the **currentTime** and **currentPersianTime** simultaneously, the **currentPersianTime** override the value and will be consider as current time. See the Demo page for an example.

## contribution
You can fork the repository and contribute to the project, If you find any problem or bug, or if you have any suggestion. I check your pull request as soon as possible.

## Demo
You can follow the link below to see a demo of component.  
http://abedalavi.ir/react-easy-persian-calendar/