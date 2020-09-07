/*
  Exercise 2
  JavaScript quirks and tricks
*/

var schoolName = "Parsons";
var schoolYear = 1936;

// Task
// What is the value of test3? undefined 
var test1;   // if = 1 test1 = true 
if (1 == true) {
  test1 = true;
} else {
  test1 = false;
}

var test2;   // if 
if (1 === true) {
  test2 = true;
} else {
  test2 = false;
}
console.log(test3)
var test3 = test1 === test2;

// Task
// Change this code so test4 is false and test5 is true. Use console.log() to confirm your cod works.

var test4 = 0 == "5"; // = false// 0 === ""
var test5 = 1 == "1"; // == true 



console.log("test4 is", test4, "and test 5 is", test5);

// Task
// What are the values of p, q, and r? Research what is going on here.
var w = 0.1;
var x = 0.2;
var y = 0.4;
var z = 0.5;

///

var p = w + x;
console.log(p) // .1 + .2 = .30000004  // rounding when .1 is present?


var q = z - x;
console.log(q) // .5 - .2 = .3 


var r = y - w;
console.log(r) // .4 -.1 = .300000004 
