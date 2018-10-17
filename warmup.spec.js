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
    it('Должна вернуть `0`', () => {
        assert.strictEqual(abProblem(-1, 1), 0);
    });
    it('Должна вернуть `0`', () => {
        assert.strictEqual(abProblem(0, 0), 0);
    });
    it('TypeError', () => {
        assert.throws(abProblem.bind('1', 1), TypeError);
    });
    it('TypeError', () => {
        assert.throws(abProblem.bind(1, '1'), TypeError);
    });
    it('TypeError', () => {
        assert.throws(abProblem.bind('1', '1'), TypeError);
    });
    it('TypeError', () => {
        assert.throws(abProblem.bind(Number(1), '1'), TypeError);
    });
});

describe('Century by year problem', () => {
    it('Должна вернуть `21`', () => {
        assert.strictEqual(centuryByYearProblem(2018), 21);
    });
    it('Должна вернуть `21`', () => {
        assert.strictEqual(centuryByYearProblem(2020), 21);
    });
    it('Должна вернуть `20`', () => {
        assert.strictEqual(centuryByYearProblem(2000), 20);
    });
    it('Должна вернуть `1`', () => {
        assert.strictEqual(centuryByYearProblem(10), 1);
    });
    it('TypeError', () => {
        assert.throws(centuryByYearProblem.bind('10'), TypeError);
    });
    it('RangeError', () => {
        assert.throws(centuryByYearProblem.bind(null, -2018), RangeError);
    });
});

describe('Colors problem', function () {
    it('Должна вернуть (255, 255, 255)', () => {
        assert.strictEqual(colorsProblem('#FFFFFF'), '(255, 255, 255)');
    });
    it('Должна вернуть (0, 51, 255)', () => {
        assert.strictEqual(colorsProblem('#007722'), '(0, 119, 34)');
    });
    it('Должная вернуть (255, 255, 255)', () => {
        assert.strictEqual(colorsProblem('#FFF'), '(255, 255, 255)');
    });
    it('Должна вернуть (0, 51, 255)', () => {
        assert.strictEqual(colorsProblem('#072'), '(0, 119, 34)');
    });
    it('RangeError', () => {
        assert.throws(colorsProblem.bind(null, '#GFFFFF'), RangeError);
    });
    it('RangeError', () => {
        assert.throws(colorsProblem.bind(null, '#FFFFFFFF'), RangeError);
    });
    it('TypeError', () => {
        assert.throws(colorsProblem.bind(null, Number(1)), TypeError);
    });
    it('TypeError', () => {
        assert.throws(colorsProblem.bind(null, [1, 0, 1]), TypeError);
    });
});

describe('Fibonacci problem', () => {
    it('Для n=1 должна вернуть `1`', () => {
        assert.strictEqual(fibonacciProblem(1), 1);
    });
    it('Для n=60 должна вернуть `1548008755920`', () => {
        assert.strictEqual(fibonacciProblem(60), 1548008755920);
    });
    it('Для n=61 должна вернуть `2504730781961`', () => {
        assert.strictEqual(fibonacciProblem(61), 2504730781961);
    });
    it('Для n=80 должна вернуть `23416728348467685`', () => {
        assert.strictEqual(fibonacciProblem(80), 23416728348467685);
    });
    it('TypeError', () => {
        assert.throws(fibonacciProblem.bind(null, '8'), TypeError);
    });
    it('TypeError', () => {
        assert.throws(fibonacciProblem.bind(Number(3)), TypeError);
    });
    it('TypeError', () => {
        assert.throws(fibonacciProblem.bind(null, [1]), TypeError);
    });
    it('RangeError', () => {
        assert.throws(fibonacciProblem.bind(null, -1), RangeError);
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
    it('TypeError', () => {
        assert.throws(matrixProblem.bind(null, 1), TypeError);
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
    it('Должна вернуть `2`', () => {
        assert.strictEqual(smilesProblem('Функция, которая подсчитывает количество' +
            ' улыбающихся смайликов в строке, представленных в виде :-) или (-:.'), 2);
    });
    it('Должна вернуть `0`', () => {
        assert.strictEqual(smilesProblem('Функция, которая подсчитывает количество' +
            ' улыбающихся смайликов в строке, представленных в виде или.'), 0);
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
            ['x', 'o', 'x'],
            ['x', 'x', 'o']
        ]), 'o');
    });
    it('Должна вернуть "draw"', () => {
        assert.strictEqual(ticTacToeProblem([
            ['x', 'x', 'o'],
            ['o', 'o', 'x'],
            ['x', 'o', 'x']
        ]), 'draw');
    });
});
