'use strict';

var arr = ['red', 'blue', 'green'];

// // New array does not have the last property
// Object.defineProperty(arr, 'last', {
//     get: function () {
//         return this[this.length-1];
//     }
// });
//
// var last = arr.last;
// display(last);
//
// var arr2 = ['one', 'two', 'tree'];
// display(arr2.last);     // returns undefined

// New array does have the last property
Object.defineProperty(Array.prototype, 'last', {
    get: function () {
        return this[this.length-1];
    }
});

display(arr.last);

var arr2 = ['one', 'two', 'tree'];
display(arr2.last);     // returns tree