const reverseString = require ('../task2.js');

test ('"hello" returns "olleh"', () => {
    expect(reverseString('hello')).toBe('olleh');
});
