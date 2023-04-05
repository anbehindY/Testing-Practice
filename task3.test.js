const calculator = require('./task3.js');
const calculation = new calculator;

describe ( 'add method', () => {
    test('adding 1 to 2 equals 3', () => {
        expect(calculation.add(1,2)).toBe(3);
    })
    test('input validity', () => {
        expect(() => calculation.add('a',2)).toThrow('Enter a valid number');
    })
    test('input validity', () => {
        expect(() => calculation.add(undefined,null)).toThrow('Enter a valid number');
    })
});

describe ( 'subtract method', () => {
    test('subtracting 1 from 2 equals -1', () => {
        expect(calculation.subtract(1,2)).toBe(-1);
    })
    test('input validity', () => {
        expect(() => calculation.subtract('a',2)).toThrow('Enter a valid number');
    })
    test('input validity', () => {
        expect(() => calculation.subtract(undefined,null)).toThrow('Enter a valid number');
    })
});

describe ( 'divide method', () => {
    test('dividing 2 by 2 equals 1', () => {
        expect(calculation.divide(2,2)).toBe(1);
    })
    test('input validity', () => {
        expect(() => calculation.divide('a',2)).toThrow('Enter a valid number');
    })
    test('input validity', () => {
        expect(() => calculation.divide(undefined,null)).toThrow('Enter a valid number');
    })
});

describe ( 'multiply method', () => {
    test('multiplying 1 with 2 equals 2', () => {
        expect(calculation.multiply(1,2)).toBe(2);
    })
    test('input validity', () => {
        expect(() => calculation.multiply('a',2)).toThrow('Enter a valid number');
    })
    test('input validity', () => {
        expect(() => calculation.multiply(undefined,null)).toThrow('Enter a valid number');
    })
});
