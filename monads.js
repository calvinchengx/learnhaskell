'use strict';

// container
var Maybe = function(value) {
  this.value = value;
};

// return
Maybe.prototype.ret = function() {
  return this.value;
};

// bind
Maybe.prototype.bind = function(func) {
  if (this.value !== null) {
    return func(this.value);
  }
  return this.value;
};

// lift: takes in a function that returns a normal value and changes it in a monad
Maybe.lift = function(func) {
  return function(value) {
    return new Maybe(func(value));
  };
};

// Usage
var addOne = function(value) {
  return value + 1;
};

// we can use this with bind
var maybeAddOne = Maybe.lift(addOne);

// lift2 use closures to get values from the two monads 
// before running it through function, handling the undefined cases
Maybe.lift2 = function(func) {
  return function(M1, M2) {
    return new Maybe(M1.bind(function(value1){
      return M2.bind(function(value2) {
        return func(value1, value2);
      });
    }));
  };
};

var add = function(a, b) {return a + b;};
var m1 = new Maybe(1);
var m2 = new Maybe(2);
var m3 = new Maybe(undefined);

var liftM2Add = Maybe.lift2(add);

liftM2Add(m1, m2).ret(); //3
liftM2Add(m3, m2).ret(); //undefined
liftM2Add(m1, m3).ret(); //undefined

// monad is just a container. 
// we pass in a function to operate on the values in it
// and get a returned value
// some people refer to it as a code design pattern
