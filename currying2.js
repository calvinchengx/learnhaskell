'use strict';

var people = [
  { name: 'Calvin' },
  { name: 'John' },
  { name: 'Thomas' }
];

// function with hardcoded key 'name'
function getPersonName(obj) {
  return obj['name'];
}

// mapping to the hardcoded function
var names = people.map(getPersonName);
console.log(names);

// Specify the key on-the-fly by using a generic function.
function getByKey(key, obj) {
  return function(obj) {
    return obj[key];
  };
}

var getByKeyPartial = getByKey('name');
console.log(getByKeyPartial);

var names2 = people.map(getByKeyPartial);
console.log(names2);

var names3 = people.map(getByKey('name'));
console.log(names3);

// mapping to anonymous function that uses generic get
//var names2 = people.map(function(obj) { 
  //return getByKey('name', obj);
//});
//console.log(names2);

//var getByKeyPartial = getByKey('name');
//console.log(getByKeyPartial);

//// We can nest our generic get function further to achieve a simpler interface
//function get(key) {
  //return people.map(function(obj){
    //return getByKey(key, obj);
  //});
//}

//var names3 = get('name');
//console.log(names3);

//// the people array is still hardcoded so we can make it even more generic, like this
//function g(key, arr) {
  //return arr.map(function(obj) {
    //return getByKey(key, obj);
  //});
//}

//var names4 = g('name', people);
//console.log(names4);
