'use strict';

function addOne(value) {
  return value + 1;
}

console.log(addOne(10));  // 11

function addTwo(value) {
  return value + 2;
}

console.log(addTwo(10));  // 12

// A not-quite-there Functor
function aFunctor(value, fn) {
  return fn(value);
}

console.log(aFunctor(10, addOne)); // 11, works as expected

console.log(aFunctor([1, 2, 3], addOne));  // '1,2,31' is returned, which is not what we want

function betterFunctor(value, fn) {
  if (typeof value === 'number') {
    return fn(value); 
  } else {
    var map = Array.prototype.map;
    return map.call(value, fn);
  }
}

console.log(betterFunctor([1, 2, 3], addOne));  // [2, 3, 4] is what we expected
console.log(betterFunctor(10, addOne));         // 11 is what we expected

// JavaScript's Array's map method is a functor! :-)
var map = Array.prototype.map;
console.log(map.call([1, 2, 3], addOne));       // [2, 3, 4] is what we expected. 
console.log([].map.call([1, 2, 3], addOne));    // This works too
