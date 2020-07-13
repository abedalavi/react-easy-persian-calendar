# react_simple_persain_calendar

Here is a persian datepicker(calendar) React component that you are free to use in your project.

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

## Props
| props        | type           | default value  |
| ------------- |:-------------:| -----:|
| rtl      | boolean | true |
|onChange|function|There is no default value. You must specify a function.
