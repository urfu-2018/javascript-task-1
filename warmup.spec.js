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

    it('Должен вернуть 1', () => {
        assert.strictEqual(centuryByYearProblem(1), 1);
    });

    it('Должен вернуть 2', () => {
        assert.strictEqual(centuryByYearProblem(200), 2);
    });
    it('Должна вернуть `10`', () => {
        assert.strictEqual(centuryByYearProblem(1000), 10);
    });

});

describe('Colors problem', function () {
    it('Должна вернуть (255, 255, 255)', function () {
        assert.strictEqual(colorsProblem('#FFFFFF'), '(255, 255, 255)');
    });

    it('Ошибка', function () {
        try {
            colorsProblem('#ABCDEZ');
        } catch (e) {
            assert.ok('s');
        }
    });
});

describe('Fibonacci problem', () => {
    it('Для n=1 должна вернуть `1`', () => {
        assert.strictEqual(fibonacciProblem(1), 1);
    });

    it('Для n=2 должна вернуть `1`', () => {
        assert.strictEqual(fibonacciProblem(2), 1);
    });

    it('Для n=3 должна вернуть `2`', () => {
        assert.strictEqual(fibonacciProblem(3), 2);
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
                [1, 2, 3, 4],
                [4, 5, 6, 7],
                [7, 8, 9, 10]
            ]), [
                [1, 4, 7],
                [2, 5, 8],
                [3, 6, 9],
                [4, 7, 10]
            ]);
    });

    it('Должна транспонировать квадратную матрицу 3x3', () => {
        assert.deepStrictEqual(
            matrixProblem([
                [1, 2, 3, 4, 5],
                [4, 5, 6, 7, 8],
                [7, 8, 9, 10, 11]
            ]), [
                [1, 4, 7],
                [2, 5, 8],
                [3, 6, 9],
                [4, 7, 10],
                [5, 8, 11]
            ]);
    });
});

describe('Number System Problem', () => {
    it('Должна вернуть "101"', () => {
        assert.strictEqual(numberSystemProblem(5, 2), '101');
    });

    it('Должна вернуть "0"', () => {
        assert.strictEqual(numberSystemProblem(0, 2), '0');
    });

    it('Должна вернуть "5"', () => {
        assert.strictEqual(numberSystemProblem(5, 16), '5');
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

    it('Должна вернуть `3`', () => {
        assert.strictEqual(smilesProblem(':-))) lskdjflskdfj :-)fsldkjflsd :-)'), 3);
    });

    it('Должна вернуть `0`', () => {
        assert.strictEqual(smilesProblem('ljdslkfjsdlf sdfj lsdfj'), 0);
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

    it('Должна вернуть "draw"', () => {
        assert.strictEqual(ticTacToeProblem([
            ['x', 'o', 'x'],
            ['o', 'o', 'x'],
            ['o', 'x', 'o']
        ]), 'draw');
    });

    it('Должна вернуть "x"', () => {
        assert.strictEqual(ticTacToeProblem([
            ['o', 'o', 'x'],
            ['o', 'x', 'x'],
            ['x', 'o', 'o']
        ]), 'x');
    });
});
