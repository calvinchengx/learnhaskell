'use strict';

var f = function(a, b) {
  return a + b;
};

var callFunctionAndArgs = function(f, a, b) {
  return f(a, b);
};

callFunctionAndArgs(f, 1, 2);
console.log(callFunctionAndArgs(f, 1, 2));
