/* eslint-env mocha */
'use strict';

const assert = require('assert');

const {
    abProblem,
    centuryByYearProblem,
    colorsProblem,
    fibonacciProblem,
    matrixProblem,
    numberSystemProblem,
    phoneProblem,
    smilesProblem,
    ticTacToeProblem
} = require('./warmup');

describe('A+B problem', () => {
    it('Должна вернуть `2`', () => {
        assert.strictEqual(abProblem(1, 1), 2);
    });

    it('Должна вернуть `100`', () => {
        assert.strictEqual(abProblem(40, 60), 100);
    });

    it('should throw when not a nan value given', () => {
        assert.throws(() => abProblem('a', 60), TypeError);
        assert.throws(() => abProblem(60, 'b'), TypeError);
    });
});

describe('Century by year problem', () => {
    it('Должна вернуть `21`', () => {
        assert.strictEqual(centuryByYearProblem(2018), 21);
    });

    it('Должна вернуть `21`', () => {
        assert.strictEqual(centuryByYearProblem(2000), 20);
    });

    it('Должна вернуть `20`', () => {
        assert.strictEqual(centuryByYearProblem(1999), 20);
    });

    it('should throw when not integer value given', () => {
        assert.throws(() => centuryByYearProblem('a'), TypeError);
    });

    it('should throw when year less then 0', () => {
        assert.throws(() => centuryByYearProblem(-100), RangeError);
    });
});

describe('Colors problem', function () {
    it('Должна вернуть (255, 255, 255)', function () {
        assert.strictEqual(colorsProblem('#FFFFFF'), '(255, 255, 255)');
    });

    it('Должна вернуть (123, 15, 88)', function () {
        assert.strictEqual(colorsProblem('#7B0F58'), '(123, 15, 88)');
    });

    it('should throw when color not a string', () => {
        assert.throws(() => colorsProblem(123), TypeError);
    });

    it('should throw when color out of range', () => {
        assert.throws(() => colorsProblem('#FFFFFFF'), RangeError);
    });
});

describe('Fibonacci problem', () => {
    it('Для n=1 должна вернуть `1`', () => {
        assert.strictEqual(fibonacciProblem(1), 1);
    });

    it('Для n=6 должна вернуть `8`', () => {
        assert.strictEqual(fibonacciProblem(6), 8);
    });

    it('should throw when not a number given', () => {
        assert.throws(() => fibonacciProblem('asd'), TypeError);
    });

    it('should throw when number is not a integer', () => {
        assert.throws(() => fibonacciProblem(1.1), RangeError);
    });

    it('should throw when number less then 1', () => {
        assert.throws(() => fibonacciProblem(0), RangeError);
        assert.throws(() => fibonacciProblem(-10), RangeError);
    });
});

describe('Matrix problem', () => {
    it('Должна транспонировать квадратную матрицу 3x3', () => {
        assert.deepStrictEqual(
            matrixProblem([
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
            ]), [
                [1, 4, 7],
                [2, 5, 8],
                [3, 6, 9]
            ]);

        assert.deepStrictEqual(
            matrixProblem([
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ]), [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ]);
        assert.deepStrictEqual(
            matrixProblem([
                [0, 4, 5],
                [1, 0, 6],
                [2, 3, 0]
            ]), [
                [0, 1, 2],
                [4, 0, 3],
                [5, 6, 0]
            ]);
    });

    it('Должна транспонировать квадратную матрицу 3x2', () => {
        assert.deepStrictEqual(
            matrixProblem([
                [1, 2, 3],
                [4, 5, 6]
            ]), [
                [1, 4],
                [2, 5],
                [3, 6]
            ]);
    });

    it('should throw non squared matrix given', () => {
        assert.throws(() => matrixProblem([1, 2, 3]), TypeError);
        assert.throws(() => matrixProblem([
            [0, 0, 0],
            'asd',
            [0, 0, 0]
        ]), TypeError);
    });
});

describe('Number System Problem', () => {
    it('Должна вернуть "101"', () => {
        assert.strictEqual(numberSystemProblem(5, 2), '101');
    });

    it('Должна вернуть "5"', () => {
        assert.strictEqual(numberSystemProblem(5, 10), '5');
    });

    it('Должна вернуть "64"', () => {
        assert.strictEqual(numberSystemProblem(100, 16), '64');
    });
});

describe('Phone problem', () => {
    it('Для "8-800-333-51-73" должна вернуть `true`', () => {
        assert.strictEqual(phoneProblem('8-800-333-51-73'), true);
    });

    it('Для "123 123 123" должна вернуть `false`', () => {
        assert.strictEqual(phoneProblem('123 123 123'), false);
        assert.strictEqual(phoneProblem('8-800-333-51-73 8-800-333-51-73'), false);
    });
});

describe('Smiles problem', () => {
    it('Должна вернуть `1`', () => {
        assert.strictEqual(smilesProblem(':-)'), 1);
    });

    it('Должна вернуть `3`', () => {
        assert.strictEqual(smilesProblem(':-) sdasd :-) sadas sdasd :-)'), 3);
    });

    it('Должна вернуть `0`', () => {
        assert.strictEqual(smilesProblem('sdasd sadas sdasd'), 0);
    });
});

describe('Tic-tac-toe problem', () => {
    it('Должна вернуть `x`', () => {
        assert.strictEqual(ticTacToeProblem([
            ['x', 'x', 'x'],
            ['o', 'o', 'x'],
            ['o', 'x', 'o']
        ]), 'x');
    });

    it('Должна вернуть "draw"', () => {
        assert.strictEqual(ticTacToeProblem([
            ['x', 'o', 'x'],
            ['x', 'o', 'x'],
            ['o', 'x', 'o']
        ]), 'draw');
    });
});
