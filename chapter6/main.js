// 1
// basic info and string concatenation
/*
var hello = "Hello";
var world = "World";
var helloW = `hello world`; // ES6
*/
// toString
/*
var intString = (32).toString();
console.log(intString);
var boolString = (true).toString();
console.log(boolString);
var objString = ({}).toString();
console.log(objString);
*/
// fromCharCode
// console.log(String.fromCharCode(104, 101, 108, 108, 111));
// creating string using new
// not recommended as it behaves like objects unlike primitive strings
/*
var objString2 = new String("Yes, I am a string object");
console.log(objString2);
console.log(typeof objString2);
console.log(typeof objString2.valueOf());
*/
// concatenate
/*
var foo = "foo";
var bar = "bar";
console.log(foo + bar);
console.log(foo + " " + bar);
*/
// concat
// console.log("a".concat("b", " ", "c"));
// concatenating non-string variables
/*
var string = "string";
var number = 32;
var bool = true;
console.log(string + number + bool);
*/
// string templates
// `` backticks
/*
var greeting = `Hello`;
console.log(greeting);
*/
// string interpolation
// ${variable}
/*
var place = `World`;
var greet = `Hello ${place}!`
console.log(greet);
*/

// 2
// reverse string
/*
function reverseString(str) {
    return str.split('').reverse('').join('');
}
console.log(reverseString('string'));
*/
// spread operator
/*
function reverseString2(str) {
    return [...String(str)].reverse().join('');
}
console.log(reverseString2('stackoverflow'));
*/

// 3
// comparing strings lexicographically
// alphabetically
// negative before
// 0 equal
// positive after
/*
var a = "Hello";
var b = "World";
console.log(a.localeCompare(b));
*/
// localCompare look alike
/*
function strCmp(a, b) {
    if(a === b) return 0;
    if(a > b) return 1;
    return -1;
}
console.log(strCmp("hello", "world"));
console.log(strCmp("world", "hello"));
*/
// useful when using a sorting function that compares based on the sign of the return value
/*
var arr = ["bananas", "cranberries", "apples"];
arr.sort(function(a, b) {
    return a.localeCompare(b);
});
console.log(arr);
*/

// 4
// access character at index
// charAt
/*
var string = "Hello, World";
console.log(string.charAt(4));\
*/
// indexing
// console.log(string[4]);
// charCodeAt
// console.log(string.charCodeAt(4));
// all above methods are getter methods
// strings in js are immutable

// 5
// escaping quotes
/*
var text = 'L\'albero means tree in italian';
console.log(text);
text = "I feel \"high\"";
console.log(text);
text = `"Hello" 'World'`;
console.log(text);
*/

// 6
// trim whitespace
/*
console.log("     some text     ".trim());
console.log("     some text     ".trimStart());
console.log("     some text     ".trimEnd());
*/
// non-standard methods
/*
console.log("     some text     ".trimLeft());
console.log("     some text     ".trimRight());
*/

// 7
// substring with slice
/*
var s = "0123456789abcdefg";
console.log(s.slice(0, 5));
console.log(s.slice(5, 6));
console.log(s.slice(10)); // 10 -> end
*/

// 8
// string find and replace functions
// to search for a string inside a string
// indexOf
// -1 if not found
// lastIndexOf\
// -1 if not found
// var string = "Hello, World";
// indexOf
/*
console.log(string.indexOf("o"));
console.log(string.indexOf("foo"));
*/
// lastIndexOf
/*
console.log(string.lastIndexOf("o"));
console.log(string.lastIndexOf("foo"));
*/
// includes
// exists true
// false
/*
console.log(string.includes("Hello"));
console.log(string.includes("foo"));
*/
// replace
/*
string = string.replace("Hello", "Bye");
console.log(string);
*/

// 9
// finding the index of a substring inside a string
// indexOf
// -1 if not present
// console.log('Hello World'.indexOf('Wor'));
// 2nd argument a number
// from where to start searching
// console.log('Hello World'.indexOf('Hell', 5));
// case sensitive
// console.log('Hello World'.indexOf('WOR'));

// 10
// upper case
// console.log('hello'.toUpperCase());

// 11
// lower case
// console.log('HELLO'.toLowerCase());

// 12
// repeat a string
/*
console.log("abc".repeat(3));
console.log("abc".repeat(0));
*/
// console.log("abc".repeat(-1)); // range error