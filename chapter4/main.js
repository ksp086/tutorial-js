// 2
// checking compatibility
// to check whether console is open or not
/*
if (typeof window.console !== 'undefined') {
    console.log("Hello, World");
}
*/
// to stop all console logs even if developer window is open
/*
if (! window.console) {
    console = {log: function() {}};
}
*/

// 4
// formatting console output
// %s string
// %i or %d integer
// %f float
// %c css styling
// %s %d
/*
console.log(
    '%s has %d pts',
    'Sam',
    100
);
*/
// %c
// console.log(
//     "%cHello %cWorld%c", // string to be printed
//     "color: blue;", // applies color formatting to the 1st substring
//     "font-size: xx-large;", // applies font formatting to the 2nd substring 
//     "/* no css rule */" // no css rule applied to remaining substring
// );

// 6
// tabulating values
// tabular format
/*
console.table(['Hello', 'World']);
console.table({foo:'foo', bar:'bar'});
var personArr = [
    {
        "personId": 123,
        "name": "john",
        "city": "melbourne",
        "phoneNo": "1234567890"
    },
    {
        "personId": 124,
        "name": "amelia",
        "city": "sydney",
        "phoneNo": "1234567890"
    },{
        "personId": 125,
        "name": "emily",
        "city": "perth",
        "phoneNo": "1234567890"
    },{
        "personId": 126,
        "name": "abraham",
        "city": "perth",
        "phoneNo": "1234567890"
    },
]
console.table(personArr, ['name', 'personId']);
*/

// 7
// counting
// console.count([obj])
// [label]: X
// increments count when label is passed to count
/*
console.count(42.3);
console.count(Number('42.3')); 
console.count('42.3');
*/

// 8
// clearing the console
// console.clear();

// 9
// displaying objects and xml interactively
// dir(object)
// interactive list of properties
/*
var myObj = {
    "foo":{
        "bar":"data"
    }
};
console.dir(myObj);
*/
// dirxml(object)
// xml representation of the descendant elements of obj if possible
// else js representation
// console.dirxml(myObj);

// 10
// debugging with assertions
// write error if assertion is false
// if true does nothing
// console.assert('one' === 1);
// this method is incompatible with most testing frameworks and code execution will not break on a failed assertion