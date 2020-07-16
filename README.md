# react_simple_persain_calendar

Here is a persian datepicker(calendar) React component that you are free to use in your project.  
This component is compatible with Bootstrap 4.5.0.



## Installation
The component can be installed via npm:

```shell
$ npm i react_simple_persain_calendar
```


## Usage
Here is an simple example of usage:

```js
import React from "react";
import PersianCalendar from "react_simple_persain_calendar";

function App() {
  const onChangePersianDatePicker = (date) => {
    console.log(date);
  };

  return <PersianCalendar onChange={onChangePersianDatePicker} />;
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
| props        | type           | default value  |
| ------------- |:-------------:| -----:|
| rtl      | boolean | true |
|onChange|function|There is no default value. You must specify a function.


## contribution
You can fork the repository and contribute to the project, If you find any problem or bug, or if you have any suggestion. I check your pull request as soon as possible.