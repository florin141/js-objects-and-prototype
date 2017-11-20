'use strict';

// var foo = function () {
//
// };
// display(foo.prototype); // empty object
//
// var cat = {
//     name: 'Fluffy'
// };
// display(cat.prototype); // undefined
// display(cat.__proto__); // empty object
//

function Cat(name, color) {
    this.name = name;
    this.color = color;
}

Cat.prototype.age = 4;

var fluffy = new Cat('Fluffy', 'White');
var muffin = new Cat('Muffin', 'Brown');

Cat.prototype = { age: 5 };

display(fluffy.age);
display(muffin.age);
display(Cat.prototype.age);