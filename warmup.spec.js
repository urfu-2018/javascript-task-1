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
    it('Должна вернуть `4`', () => {
        assert.strictEqual(centuryByYearProblem(4), 1);
    });
    it('ok', () => {
        assert.strictEqual(centuryByYearProblem(100), 1);
    });
});

describe('Colors problem', function () {
    it('Должна вернуть (255, 255, 255)', function () {
        assert.strictEqual(colorsProblem('#ffd37d'), '(255, 211, 125)');
    });
    it('Должна вернуть (255, 255, 255)', function () {
        assert.strictEqual(colorsProblem('#ff91c8'), '(255, 145, 200)');
    });
    it('Должна вернуть (255, 255, 255)', function () {
        assert.strictEqual(colorsProblem('#3effdf'), '(62, 255, 223)');
    });
});

describe('Fibonacci problem', () => {
    it('Для n=1 должна вернуть `1`', () => {
        assert.strictEqual(fibonacciProblem(5), 5);
    });
    it('Для n=1 должна вернуть `1`', () => {
        assert.strictEqual(fibonacciProblem(7), 13);
    });
    it('Для n=1 должна вернуть `1`', () => {
        assert.strictEqual(fibonacciProblem(22), 17711);
    });
    it('Для n=1 должна вернуть `1`', () => {
        assert.strictEqual(fibonacciProblem(4), 3);
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
    it('Должна транспонировать квадратную матрицу 3x3', () => {
        assert.deepStrictEqual(
            matrixProblem([
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
                [5, 6, 8]
            ]), [
                [1, 4, 7, 5],
                [2, 5, 8, 6],
                [3, 6, 9, 8]
            ]);
    });
});

describe('Number System Problem', () => {
    it('Должна вернуть "101"', () => {
        assert.strictEqual(numberSystemProblem(5, 2), '101');
    });
    it('Должна вернуть "101"', () => {
        assert.strictEqual(numberSystemProblem(5, '2'), '101');
    });
});

describe('Phone problem', () => {
    it('Для "8-800-333-51-73" должна вернуть `true`', () => {
        assert.strictEqual(phoneProblem('8-800-333-51-73'), true);
    });
    it('Для "8-800-333-51-73" должна вернуть `true`', () => {
        assert.strictEqual(phoneProblem('8-800-555-35-35'), true);
    });
    it('Для "8-800-333-51-73" должна вернуть `true`', () => {
        assert.strictEqual(phoneProblem('8-000-3-4-'), false);
    });
    it('Для "8-800-333-51-73" должна вернуть `true`', () => {
        assert.strictEqual(phoneProblem('8-505-909-33-22'), false);
    });
    it('Для "8-800-333-51-73" должна вернуть `true`', () => {
        assert.strictEqual(phoneProblem('8-804-575-51-73'), false);
    });
});

describe('Smiles problem', () => {
    it('Должна вернуть `1`', () => {
        assert.strictEqual(smilesProblem('(-:-)'), 1);
    });
    it('Должна вернуть `1`', () => {
        assert.strictEqual(smilesProblem('(-:-)^-):-)(-:'), 3);
    });
    it('Должна вернуть `1`', () => {
        assert.strictEqual(smilesProblem('(-:-))(-:'), 2);
    });
    it('Должна вернуть `1`', () => {
        assert.strictEqual(smilesProblem(')))))))))))))))'), 0);
    });
});

describe('Tic-tac-toe problem', () => {
    it('Должна вернуть "x"', () => {
        assert.strictEqual(ticTacToeProblem([
            ['x', 'x', 'o'],
            ['o', 'x', 'x'],
            ['o', 'x', 'x']
        ]), 'x');
    });
    it('Должна вернуть "x"', () => {
        assert.strictEqual(ticTacToeProblem([
            ['x', 'x', 'o'],
            ['o', 'o', 'x'],
            ['x', 'x', 'o']
        ]), 'draw');
    });
    it('Должна вернуть "x"', () => {
        assert.strictEqual(ticTacToeProblem([
            ['x', 'x', 'o'],
            ['o', 'x', 'x'],
            ['o', 'x', 'o']
        ]), 'x');
    });
    it('Должна вернуть "x"', () => {
        assert.strictEqual(ticTacToeProblem([
            ['x', 'o', 'x'],
            ['o', 'o', 'o'],
            ['o', 'x', 'o']
        ]), 'o');
    });
    it('Должна вернуть "x"', () => {
        assert.strictEqual(ticTacToeProblem([
            ['x', 'x', 'o'],
            ['o', 'o', 'x'],
            ['o', 'x', 'o']
        ]), 'o');
    });
});
