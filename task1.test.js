const stringLength = require('./task1');

test ('Length of "hello" to equal 5' , () => {
    expect(stringLength('hello')).toBe(5);
});

test ('Length of "hello jenna" to throw error', () => {
    expect(() => stringLength('hello jenna'))
    .toThrow('String length out of range');
});