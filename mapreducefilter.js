'use strict';

// map, reduce and filter are built-in as methods of the Array class in JavaScript
var aList = [0, 1, 2];

var newList = aList.map(function (i) {
  return i + 1;
});
console.log(newList);
console.log(aList);

var reduceToSum = aList.reduce(function (a, b) {
  return a + b;
});
console.log(reduceToSum);
console.log(aList);

var lessThanTwo = aList.filter(function (i) {
  return i < 2;
});
console.log(lessThanTwo);
console.log(aList);

