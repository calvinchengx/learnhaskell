'use strict';

function factorial(n, accumulator) {
  if (n === 0) {
    return accumulator;
  }
  return factorial(n - 1, n * accumulator);
}

// recursively call itself from 5 to 0, breaking at n === 0
factorial(5, 1) 
