const stringLength = require('../task1.js');

test ('Length of "hello" to equal 5' , () => {
    expect(stringLength('hello')).toBe(5);
});

test ('Length of "hello jenna" and "" to throw error', () => {
    expect(() => stringLength('hello jenna') && stringLength(''))
    .toThrow('String length out of range');
});