'use strict';

var cat = {
    name: {
        first: 'Fluffy',
        last: 'LaBeouf'
    },
    color: 'White'
};

Object.defineProperty(cat, 'name', {enumerable: false});

for (var prop in cat) {
    display(prop + ': ' + cat[prop]);
}

display(Object.keys(cat));

display(JSON.stringify(cat));