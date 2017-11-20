'use strict';

class Animal {
    constructor(voice) {
        this.voice = voice || 'grunt';
    }

    speak() {
        display(this.voice);
    }
}


class Cat extends Animal {
    constructor(name, color) {
        super('Meow');
        this.name = name;
        this.color = color;
    }
}

var fluffy = new Cat('Fluffy', 'White');

// fluffy.speak();

display(fluffy.constructor);

display(Object.keys(fluffy.__proto__.__proto__));               /// members of classes are note
display(fluffy.__proto__.__proto__.hasOwnProperty('speak'));    /// enumerable by default