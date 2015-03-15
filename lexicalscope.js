'use strict';

function add(x) {
  console.log('x is ' + x);
  return function(y) {
    return x + y; 
  };
}

var add10 = add(10);
console.log(add10);
// console.log('x is ' + x); x is not defined in outside of the `add` function
console.log(add10(20));
