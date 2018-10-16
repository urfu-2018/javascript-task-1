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
    it('should handle minus values', () => {
        assert.strictEqual(abProblem(-1, 1), 0);
    });
    it('should throw at string', () => {
        assert.throws(() => abProblem('kek', 34), TypeError);
    });
});

describe('Century by year problem', () => {
    it('Должна вернуть `21`', () => {
        assert.strictEqual(centuryByYearProblem(2018), 21);
    });
    it('should return 20 on 2000', () => {
        assert.strictEqual(centuryByYearProblem(2000), 20);
    });
    it('should throw at -1', () => {
        assert.throws(() => centuryByYearProblem(-1), RangeError);
    });
    it('should throw at string', () => {
        assert.throws(() => centuryByYearProblem('sf'), TypeError);
    });
});

describe('Colors problem', function () {
    it('Должна вернуть (255, 255, 255)', function () {
        assert.strictEqual(colorsProblem('#FFFFFF'), '(255, 255, 255)');
    });
    it('should calculate correct values', () => {
        assert.strictEqual(colorsProblem('#000000'), '(0, 0, 0)');
        assert.strictEqual(colorsProblem('#010101'), '(1, 1, 1)');
        assert.strictEqual(colorsProblem('#101010'), '(16, 16, 16)');
    });
    it('should throw on invalid', () => {
        assert.throws(() => colorsProblem('#'), RangeError);
        assert.throws(() => colorsProblem(234), TypeError);
        assert.throws(() => colorsProblem('#234dfn'), RangeError);
    });
});

describe('Fibonacci problem', () => {
    it('Для n=1 должна вернуть `1`', () => {
        assert.strictEqual(fibonacciProblem(1), 1);
    });
    it('should correctly calculate', () => {
        assert.strictEqual(fibonacciProblem(2), 1);
        assert.strictEqual(fibonacciProblem(3), 2);
        assert.strictEqual(fibonacciProblem(4), 3);
        assert.strictEqual(fibonacciProblem(5), 5);
        assert.strictEqual(fibonacciProblem(6), 8);
    });
    it('should throw', () => {
        assert.throws(() => fibonacciProblem('d'), TypeError);
        assert.throws(() => fibonacciProblem(-23), RangeError);
        assert.throws(() => fibonacciProblem(0), RangeError);
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
    });
    it('should handle 3x2 matrix', () => {
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
    it('should handle 2x1', () => {
        assert.deepStrictEqual(
            matrixProblem([
                [0, 1]
            ]), [
                [0], [1]
            ]
        );
    });
    it('should handle 1x2', () => {
        assert.deepStrictEqual(
            matrixProblem([
                [0], [1]
            ]), [
                [0, 1]
            ]
        );
    });
    it('should throw on invalid', () => {
        assert.throws(() => matrixProblem('sdfsd'), TypeError);
        assert.throws(() => matrixProblem(['sd', 'sdf']), TypeError);
        assert.throws(() => matrixProblem([234, 1, 2, 3, 4]));
    });
});

describe('Number System Problem', () => {
    it('Должна вернуть "101"', () => {
        assert.strictEqual(numberSystemProblem(5, 2), '101');
    });
    it('should correctly calculate', () => {
        assert.strictEqual(numberSystemProblem(4, 2), '100');
        assert.strictEqual(numberSystemProblem(9, 8), '11');
        assert.strictEqual(numberSystemProblem(-1, 5), '-1');
        assert.strictEqual(numberSystemProblem(17, 18), 'h');
    });
    it('should throw on invalid', () => {
        assert.throws(() => numberSystemProblem(100, 100), RangeError);
        assert.throws(() => numberSystemProblem('sdf', 234), TypeError);
        assert.throws(() => numberSystemProblem(34, []), TypeError);
    });
});

describe('Phone problem', () => {
    it('Для "8-800-333-51-73" должна вернуть `true`', () => {
        assert.strictEqual(phoneProblem('8-800-333-51-73'), true);
    });
    it('should return false on 8234', () => {
        assert.strictEqual(phoneProblem('8234'), false);
    });
    it('should throw on invalid', () => {
        assert.throws(() => phoneProblem(34));
        assert.throws(() => phoneProblem([]));
    });
});

describe('Smiles problem', () => {
    it('Должна вернуть `1`', () => {
        assert.strictEqual(smilesProblem(':-)'), 1);
    });
    it('should handle reversed', () => {
        assert.strictEqual(smilesProblem('(-:'), 1);
    });
    it('should correctly calculate', () => {
        assert.strictEqual(smilesProblem(':-) :-) :-)'), 3);
        assert.strictEqual(smilesProblem('(-: :-)'), 2);
        assert.strictEqual(smilesProblem('sdf:-sd) :-)'), 1);
    });
});

describe('Tic-tac-toe problem', () => {
    it('Должна вернуть "x"', () => {
        assert.strictEqual(ticTacToeProblem([
            ['x', 'x', 'x'],
            ['o', 'o', 'x'],
            ['o', 'x', 'o']
        ]), 'x');
    });
    it('should handle diag', () => {
        assert.strictEqual(ticTacToeProblem([
            ['o', 'x', 'o'],
            ['o', 'o', 'x'],
            ['x', 'x', 'o']
        ]), 'o');
    });
    it('should handle col', () => {
        assert.strictEqual(ticTacToeProblem([
            ['x', 'x', 'o'],
            ['o', 'o', 'o'],
            ['x', 'x', 'o']
        ]), 'o');
        assert.strictEqual(ticTacToeProblem([
            ['x', 'o', 'o'],
            ['x', 'o', 'x'],
            ['x', 'x', 'o']
        ]), 'x');
    });
    it('should return "draw"', () => {
        assert.strictEqual(ticTacToeProblem([
            ['o', 'x', 'o'],
            ['o', 'x', 'x'],
            ['x', 'o', 'o']
        ]), 'draw');
        assert.strictEqual(ticTacToeProblem([
            ['o', 'x', 'o'],
            ['x', 'o', 'x'],
            ['x', 'o', 'x']
        ]), 'draw');
    });
});
