'use strict';

var none = {
    map: function() {
        return none;
    },
    bind: function() {
        return none;
    },
    
    toString: function() {
        return 'none';
    }
};

function some(value) {
    return {
        map: function(func) {
            return some(func(value));
        },
        
        bind: function(func) {
            return func(value);
        },
        
        toString: function() {
            return "some(" + value + ")";
        }
    };
}

var functor = {
    map: function(func, option) {
        return option.map(func);
    },
    unit: some,
    applyFunctor: function(funcOption, argOption) {
        return funcOption.bind(function(func) {
            return argOption.map(func);
        });
    }
};

function curry(func, numberOfArguments) {
  return function(value) {
    if (numberOfArguments === 1) {
      return func(value);
    } else {
      return curry(func.bind(null, value), numberOfArguments - 1);
    }
  };
}

// Usage
var four = some(4);
var six = some(6);
console.log(four.toString());
console.log(six.toString());

function add(a, b) {
  return a + b;
}

var result = functor.applyFunctor(functor.map(curry(add, 2), four), six);
console.log(result.toString());

result = functor.applyFunctor(functor.map(curry(add, 2), none), six);
console.log(result.toString());

result = functor.applyFunctor(functor.map(curry(add, 2), four), none);
console.log(result.toString());

// A cleaner API for our applicative functor operations
functor.applyFunctorUncurried = function(func) {
  var args = Array.prototype.slice.call(arguments, 1);
  return args.reduce(
    functor.applyFunctor,
    functor.unit(curry(func, args.length))
  );
};

var result2 = functor.applyFunctorUncurried(add, four, six);
console.log(result2.toString());
result2 = functor.applyFunctorUncurried(add, none, six);
console.log(result2.toString());
result2 = functor.applyFunctorUncurried(add, four, none);
console.log(result2.toString());
