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

display(Cat.prototype);

var fluffy = new Cat('Fluffy', 'White');

Cat.prototype.age = 3;

display(fluffy.__proto__);

var muffin = new Cat('Muffin', 'Brown');

display(muffin.__proto__);

display(Cat.prototype === fluffy.__proto__);