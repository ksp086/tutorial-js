// 1
// typeof
/*
console.log(typeof "string");
console.log(typeof Date(2011, 01, 01));
console.log(typeof 42);
console.log(typeof true);
console.log(typeof {});
console.log(typeof []);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof function () {});
var var1;
console.log(typeof var1);
*/

// 2
// finding an objects class
// primitive values are not considered instances of any class
/*
console.log(2 instanceof Number);
console.log('abc' instanceof String);
console.log(true instanceof Boolean);
console.log(Symbol() instanceof Symbol);
*/
// every value in js besides null and undefined also has a constructor property storing the function that was used to construct it
// this even works with primitive
// instanceof also catches instances of subclasses
// obj.constructor does not
/*
console.log([] instanceof Object, [] instanceof Array);
console.log([].constructor === Object, [].constructor === Array);
*/

// 3
// getting object type by constructor name
// obj constructor
// Object.prototype.toString.call()
/*
console.log(Object.prototype.toString.call("string"));
console.log(Object.prototype.toString.call(42));
console.log(Object.prototype.toString.call(true));
console.log(Object.prototype.toString.call({}));
console.log(Object.prototype.toString.call(Object()));
console.log(Object.prototype.toString.call(function() {}));
console.log(Object.prototype.toString.call(new Date(2015, 10, 21)));
console.log(Object.prototype.toString.call([]));
console.log(Object.prototype.toString.call(new RegExp()));
console.log(Object.prototype.toString.call(/foo/));
console.log(Object.prototype.toString.call(null));
console.log(Object.prototype.toString.call(undefined));
console.log(Object.prototype.toString.call(Error()));
*/