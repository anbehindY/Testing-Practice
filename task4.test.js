const capitalizeString = require('./task4.js');

test ('Capitalize "h" in "hello"', () => {
    expect(capitalizeString('hello')).toBe('Hello');
});
