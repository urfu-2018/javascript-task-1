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
});

describe('Century by year problem', () => {
    it('Должна вернуть `21`', () => {
        assert.strictEqual(centuryByYearProblem(2018), 21);
    });
    it('Должна вернуть `20`', () => {
        assert.strictEqual(centuryByYearProblem(2000), 20);
    });
});

describe('Colors problem', function () {
    it('Должна вернуть (255, 255, 255)', function () {
        assert.strictEqual(colorsProblem('#FFFFFF'), '(255, 255, 255)');
    });
});

describe('Fibonacci problem', () => {
    it('Для n=1 должна вернуть `1`', () => {
        assert.strictEqual(fibonacciProblem(1), 1);
    });
    it('Для n=9 должна вернуть `34`', () => {
        assert.strictEqual(fibonacciProblem(9), 34);
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
        assert.strictEqual(ticTacToeProblem([
            ['x', 'x', 'x'],
            ['o', 'o', 'x'],
            ['o', 'x', 'o']
        ]), 'x');
    });
    it('Должна вернуть "o"', () => {
        assert.strictEqual(ticTacToeProblem([
            ['o', 'x', 'x'],
            ['o', 'o', 'x'],
            ['o', 'x', 'o']
        ]), 'o');
    });
    it('Должна вернуть "o"', () => {
        assert.strictEqual(ticTacToeProblem([
            ['o', 'x', 'x'],
            ['x', 'o', 'x'],
            ['o', 'x', 'o']
        ]), 'o');
    });
    it('Должна вернуть "o"', () => {
        assert.strictEqual(ticTacToeProblem([
            ['x', 'x', 'o'],
            ['x', 'o', 'x'],
            ['o', 'x', 'x']
        ]), 'o');
    });
    it('Должна вернуть "draw"', () => {
        assert.strictEqual(ticTacToeProblem([
            ['o', 'x', 'o'],
            ['o', 'x', 'x'],
            ['x', 'o', 'x']
        ]), 'draw');
    });
});
