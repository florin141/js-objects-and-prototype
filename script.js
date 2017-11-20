'use strict';

var cat = {
    name: {
        first: 'Fluffy',
        last: 'LaBeouf'
    },
    color: 'White'
};

Object.defineProperty(cat, 'name', {writable: false});
Object.freeze(cat.name);
cat.name.first = 'Scratchy';
display(cat.name);