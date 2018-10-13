'use strict';

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

// Выведет `2`
console.info('abProblem:');
console.info(abProblem(1, 1));

// Выведет `21`
console.info('centuryProblem');
console.info(centuryByYearProblem(2018));
console.info(centuryByYearProblem(2000));
console.info(centuryByYearProblem(1999));
console.info(centuryByYearProblem(1));
console.info(centuryByYearProblem(99));

// Выведет "(255, 255, 255)"
console.info('colorProblem');
console.info(colorsProblem('#FFFFFF'));
console.info(colorsProblem('#ffffff'));
console.info(colorsProblem('#1479aF'));
// console.info(colorsProblem('#fds'));
// console.info(colorsProblem('#kkkkkk'));


// Выведет `1`
console.info('fibbonacciProblem');
console.info(fibonacciProblem(79));


// Выведет `[
//    [1, 4, 7],
//    [2, 5, 8],
//    [3, 6, 9]
// ]`
console.info('matrixProblem');
console.info(matrixProblem([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]));
// console.info(matrixProblem([]));
console.info(matrixProblem([[0]]));
console.info(matrixProblem([
    [1, 2],
    [3, 4]
]));
console.info(matrixProblem([
    [1, 2, 3],
    [4, 5, 6]
]));


// Выведет "1010101"
console.info('numberSystemProblem');
console.info(numberSystemProblem(85, 2));
console.info(numberSystemProblem(-85, 2));

// Выведет `true`
console.info('phoneProblem');
console.info(phoneProblem('8-800-333-51-73'));

// Выведет `2`
console.info('smilesProblem');
console.info(smilesProblem(':-) (-:'));
console.info(smilesProblem('efwef fewfwef wef we'));
console.info(smilesProblem(':-)21d(-:wqfefsda(-:('));

// Выведет "x"
console.info('ticTacToeProblem');
console.info(ticTacToeProblem([
    ['x', 'x', 'x'],
    ['o', 'o', 'x'],
    ['o', 'x', 'o']
]));
console.info(ticTacToeProblem([
    ['o', 'o', 'o'],
    ['o', 'o', 'x'],
    ['o', 'x', 'o']
]));
console.info(ticTacToeProblem([
    ['x', 'o', 'o'],
    ['x', 'x', 'x'],
    ['o', 'x', 'o']
]));
console.info(ticTacToeProblem([
    ['o', 'x', 'x'],
    ['o', 'x', 'x'],
    ['o', 'o', 'o']
]));
console.info(ticTacToeProblem([
    ['x', 'o', 'x'],
    ['x', 'o', 'x'],
    ['x', 'x', 'o']
]));
console.info(ticTacToeProblem([
    ['x', 'x', 'o'],
    ['o', 'x', 'x'],
    ['o', 'x', 'o']
]));
console.info(ticTacToeProblem([
    ['x', 'x', 'o'],
    ['o', 'x', 'x'],
    ['o', 'x', 'o']
]));
console.info(ticTacToeProblem([
    ['x', 'o', 'x'],
    ['o', 'o', 'x'],
    ['o', 'x', 'x']
]));
console.info(ticTacToeProblem([
    ['x', 'x', 'o'],
    ['o', 'x', 'x'],
    ['o', 'o', 'x']
]));
console.info(ticTacToeProblem([
    ['o', 'x', 'x'],
    ['o', 'x', 'o'],
    ['x', 'x', 'o']
]));
console.info(ticTacToeProblem([
    ['x', 'o', 'x'],
    ['x', 'x', 'o'],
    ['o', 'x', 'o']
]));

