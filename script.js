'use strict';

var cat = {
    name: {
        first: 'Fluffy',
        last: 'LaBeouf'
    },
    color: 'White'
};

// Object.defineProperty(cat, 'name', {configurable: false});
// Object.defineProperty(cat, 'name', {enumerable: false});    // error
// Object.defineProperty(cat, 'name', {configurable: true});    // error
// delete cat.name;                                             // error
// display(cat.name);

// Object.defineProperty(cat, 'name', {writable: false});    // no error