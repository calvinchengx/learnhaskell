'use strict';

var values = { a: 1 };

function impureFunction (items) {

  var b = 1;
  items.a = items.a * b + 2;
  return items;
}

console.log(impureFunction(values));
console.log(values);
