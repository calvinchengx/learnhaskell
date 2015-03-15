'use strict';

var getQueryVariable = function (variable) {
  var query = window.location.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');
      if (decodeURIComponent(pair[0]) === variable) {
            return decodeURIComponent(pair[1]);
          }
    }
};

var random = function(mZ, mW) {
  mZ = 36969 * (mZ & 65535) + (mZ >> 16);
  mW = 18000 * (mW & 65535) + (mW >> 16);
  return (mZ >> 16) + mW;
};

var addAndShow = function (a, b, console) {
  var c = a + b;
  console.log(a, ' + ', b, ' = ', c);
  return c;
};

var number = 1;
var increment = function() {
  return number += 1;
};

var number = 1;
var incrementAlt = function(n) {
    return n + 1;
};

module.exports = {
  getQueryVariable: getQueryVariable,
  random: random,
  addAndShow: addAndShow,
  increment: increment,
  incrementAlt: incrementAlt
};
