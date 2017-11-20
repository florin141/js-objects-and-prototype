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

fluffy.age = 5;     // we did not change the prototype age property
                    // we added a new property to the fluffy object

display(fluffy.age);
display(fluffy.__proto__.age);
display(muffin.age);

display(Object.keys(fluffy));
display(Object.keys(muffin));

display(fluffy.hasOwnProperty('age'));
display(muffin.hasOwnProperty('age'));