var a = [1,"2","abacus"];
//       0  1  2

var b = {
    // key value pairs
    "name": "Example McExampleface",  // 0
    // key    value
    "email": "example@example.com",  // 1
    "phone": 1837129
}

var c = true;

var d = {
    "thing1": a,
    "thing2": b,
    "thing3": [a, b, c]
}

var e = null;
var f = undefined;

// numbers
// float 2.3
// booleans true / false (truthy and falsy in javascript)

// null
// undefined

// strings "text"
// array []

// objects {} key value pairs

// conditions (if else)
// loops (for / while)
// objects (classes  / oop)
// functions and return

// console.log(typeof a[1]);
// console.log(typeof a[2]);
// console.log(typeof a);
// console.log(Array.isArray(a));
// console.log(typeof b);
// console.log(typeof b.name);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof d.thing1);
// console.log(Array.isArray(d.thing1));
// console.log(typeof d.thing1[2]);
// console.log(typeof d.thing2);
console.log(typeof d.thing3);
console.log(typeof d.thing3[3]);
console.log(typeof d.thing3[2]);

// console.log(d);