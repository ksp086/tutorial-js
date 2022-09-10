// 1
// null
// equal to undefined but not identical
/*
console.log(null == undefined);
console.log(null === undefined);
console.log(typeof null);
*/

// 2
// testing for NaN using isNaN
// evaluates to NaN or not
// first check if value passed is number or number
// if not convert
/*
console.log(isNaN("45.3")); // converted to 45.3
console.log(isNaN("Infinity")); // converted to infinity
console.log(isNaN("10$")); // dollar sign is not a digit
console.log(isNaN(undefined));
console.log(isNaN());
console.log(isNaN(function() {})); // conversion fails
console.log(isNaN({})); // conversion fails
console.log(isNaN([1, 2])); // "1, 2" cannot be converted
*/

// 3
// Number.isNaN()
// values of the type number, that are also NaN, return true
// console.log(Number.isNaN(NaN));
// all other cases false

// 4
// undefined and null
// undefined - absence of a value in the compiler
// global value that represents the absence of an assigned value
// example unassigned variable
// null is an object that indicates that a variable has been explicitly assigned "no value"
/*
console.log(typeof undefined === 'undefined');
console.log(typeof null === 'object');
function foo() {return;}
console.log(foo() === undefined);
function fun(params) {
    console.log(params === undefined);
}
fun('a');
fun();
console.log(window.hasOwnProperty('undefined'));
*/

// 5
// infinity and -infinity
// Number.POSITIVE_INFINITY
// Number.NEGATIVE_INFINITY
// Infinity
// -Infinity
// it is a reference to Number.POSITIVE_INFINITY
// no division by 0 errors
/*
console.log(Infinity > 123192310293);
console.log(-Infinity < 123192310293);
console.log(1/0);
console.log(Number.MAX_VALUE*2);
console.log(-Infinity === Number.NEGATIVE_INFINITY);
console.log(0 === -0);
console.log(1/0 === 1/-0);
*/

// 6
// number constants
/*
console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.EPSILON);
console.log(Number.NaN);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
*/
// Number.EPSILON represents the difference between one and the smallest number greater than one
// smallest possible difference between two different number values
// how numbers are stored by js

// 7
// operations that return NaN
/*
console.log("b"*3);
console.log("cde"-"e");
console.log([1, 2, 3]*2);
console.log([2]*[3]); // 6
console.log("a"+"b"); // ab
console.log(0/0);
*/
// rest NaN

// 8
// math library functions that return NaN
// math functions that are given non-numeric arguments will return NaN
// sqrt function returns NaN for imaginary or complex
/*
console.log(Math.floor("a"));
console.log(Math.sqrt(-1));
*/