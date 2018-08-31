//Use destructuring to obtain the length of the input string str, and assign the length to len in line.
//Original
function getLength(str) {
  "use strict";
  const length = 0; // change this

  return len; // you must assign length to len in line
}

//Solution
function getLength(str) {
  "use strict";
  const {length:len } = str; // change this

  return len; // you must assign length to len in line
}
//test
console.log(getLength('FreeCodeCamp'));

/*****************************************************************/

//Destructuring Nested Objects. Use destructuring assignment to obtain max of forecast.tomorrow and assign it to maxOfTomorrow.
//Original

const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";
  const maxOfTomorrow = undefined; // change this line

  return maxOfTomorrow;

//Solution
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";
  const {tomorrow: { max :maxOfTomorrow}} = forecast;  // changed this
  return maxOfTomorrow;
}
console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6

/*********************************************************/

//Pass an Object as a Function's Parameters
//Use destructuring assignment within the argument to the function half to send only max and min inside the function.
//Original
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = (function() {
  "use strict"; // do not change this line
  // change code below this line
  return function half(stats) {
    // use function argument destructuring
    return (stats.max + stats.min) / 2.0;
  };

//Solution
const half = ({max, min}) => ((max + min) / 2.0);
//test
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015
