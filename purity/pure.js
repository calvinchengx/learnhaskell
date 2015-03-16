'use strict';

var values = { a: 1 };

function pureFunction (a) {

  var b = 1;
  a = a * b + 2;
  return a;

}

console.log(pureFunction(values.a));
console.log(values.a);
