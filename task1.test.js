const stringLength = require('./task1');

// if (stringLength(hello) !== 5) {
//     throw new Error('Length check failed')
// }

test ('Length of "hello" to equal 5' ,() => {
    expect(stringLength('hello')).toBe(5);
});