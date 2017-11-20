'use strict';

function Animal(voice) {
    this.voice = voice || 'grunt';
}

Animal.prototype.speak = function () {
    display(this.voice);
};

function Cat(name, color) {
    Animal.call(this, 'Meow');                      /// creating the prototype chain
    this.name = name;
    this.color = color;
}
Cat.prototype = Object.create(Animal.prototype);    /// creating the prototype chain
Cat.prototype.constructor = Cat;                    /// creating the prototype chain

var fluffy = new Cat('Fluffy', 'White');

fluffy.speak();

display(fluffy);
display(fluffy instanceof Cat);
display(fluffy instanceof Animal);

display(fluffy.__proto__);
display(fluffy.__proto__.__proto__);