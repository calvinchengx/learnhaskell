'use strict';

var aList = [1, 2, 3];

function compose(f, g) {
  return function (x) {
    return f(g(x));
  };
}

function addOne(value) {
  return value + 1;
}

function addTwo(value) {
  return value + 2;
}

console.log(aList.map(compose(addOne, addTwo)));
console.log(aList.map(addTwo).map(addOne));

function mayBe(value, fn) {
  return value === null || value === undefined ? value : fn(value);
}

console.log(mayBe(undefined, compose(addOne, addTwo)));     // returns expected result undefined
console.log(mayBe(mayBe(undefined, addTwo), addOne));       // returns expected result undefined
console.log(mayBe(1, compose(addOne, addTwo)));             // returns expected result 4 
console.log(mayBe(mayBe(1, addTwo), addOne));               // returns expected result 4
