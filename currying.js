'use strict';

var f = function(a, b) {
  return a + b;
};

var applyFirst = function (f, a) {
  return function(b) { 
    return f(a, b);
  };
};

console.log(applyFirst(f, 1));
