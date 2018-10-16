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
    it('Должна вернуть ошибку', () => {
        assert.throws(() => abProblem('1', 1));
    });
    it('Должна вернуть ошибку', () => {
        assert.throws(() => abProblem(21.1, 1));
    });
    it('Должна вернуть ошибку', () => {
        assert.throws(() => abProblem(21.1, [1]));
    });
});

describe('Century by year problem', () => {
    it('Должна вернуть `21`', () => {
        assert.strictEqual(centuryByYearProblem(2018), 21);
    });
    it('Должна вернуть ошибку', () => {
        assert.throws(() => centuryByYearProblem(-1));
    });
});

describe('Colors problem', function () {
    it('Должна вернуть (255, 255, 255)', function () {
        assert.strictEqual(colorsProblem('#FFFFFF'), '(255, 255, 255)');
    });
    it('Должна вернуть (255, 255, 255)', function () {
        assert.strictEqual(colorsProblem('#ffffff'), '(255, 255, 255)');
    });
    it('Должна вернуть (0, 0, 0)', function () {
        assert.strictEqual(colorsProblem('#000000'), '(0, 0, 0)');
    });
});

describe('Fibonacci problem', () => {
    it('Для n=1 должна вернуть `1`', () => {
        assert.strictEqual(fibonacciProblem(1), 1);
    });
    it('Для n=1 должна вернуть', () => {
        assert.strictEqual(fibonacciProblem(2), 1);
    });
    it('Для n=1 должна вернуть', () => {
        assert.strictEqual(fibonacciProblem(3), 2);
    });
    it('Для n=1 должна вернуть', () => {
        assert.strictEqual(fibonacciProblem(4), 3);
    });
});

describe('Matrix problem', () => {
    it('Должна транспонировать квадратную матрицу 3x3', () => {
        assert.deepStrictEqual(matrixProblem([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9]
        ]);
    });
    it('Должна транспонировать квадратную матрицу 3x1', () => {
        assert.deepStrictEqual(matrixProblem([[1, 2, 3]]), [[1], [2], [3]]);
    });
    it('Должна TypeError 1', () => {
        assert.throws(() => matrixProblem([]), TypeError);
    });
    it('Должна TypeError 1', () => {
        assert.throws(() => matrixProblem([1]), TypeError);
    });
    it('Должна TypeError 2', () => {
        assert.throws(() => matrixProblem([[1, 2], [4, 5, 6], [7, 8]]), TypeError);
    });
    it('Должна TypeError 3', () => {
        assert.throws(() => matrixProblem([[1, 2], [4, 5, 6], [7, 8], 'test']), TypeError);
    });
});

describe('Number System Problem', () => {
    it('Должна вернуть "101"', () => {
        assert.strictEqual(numberSystemProblem(5, 2), '101');
    });
});

describe('Phone problem', () => {
    it('Для "8-800-333-51-73" должна вернуть `true`', () => {
        assert.strictEqual(phoneProblem('8-800-333-51-73'), true);
    });
});

describe('Smiles problem', () => {
    it('Должна вернуть `1`', () => {
        assert.strictEqual(smilesProblem(':-)'), 1);
    });
});

describe('Tic-tac-toe problem', () => {
    it('Должна вернуть "x"', () => {
        assert.strictEqual(
            ticTacToeProblem([['x', 'x', 'x'], ['o', 'o', 'x'], ['o', 'x', 'o']]),
            'x'
        );
    });
    it('Должна вернуть "draw"', () => {
        assert.strictEqual(
            ticTacToeProblem([['x', 'o', 'x'], ['o', 'o', 'x'], ['o', 'x', 'o']]),
            'draw'
        );
    });
    it('Должна вернуть ', () => {
        assert.strictEqual(
            ticTacToeProblem([['o', 'o', 'o'], ['o', 'o', 'o'], ['o', 'o', 'o']]),
            'o'
        );
    });
    it('Должна вернуть o', () => {
        assert.strictEqual(
            ticTacToeProblem([['o', 'x', 'x'], ['x', 'o', 'x'], ['o', 'o', 'o']]),
            'o'
        );
    });
    it('Должна вернуть o', () => {
        assert.strictEqual(
            ticTacToeProblem([['o', 'x', 'x'], ['o', 'o', 'x'], ['o', 'x', 'o']]),
            'o'
        );
    });
});
