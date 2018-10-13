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
console.info('2 = ' + abProblem(1, 1));
// console.info(abProblem('hello', 1));
// console.info(abProblem(1, 'hello'));
// console.info(abProblem('hello', 'hello'));

// Выведет `21`
console.info('21st century = ' + centuryByYearProblem(2018));
console.info('10th century = ' + centuryByYearProblem(1000));
console.info('11st century = ' + centuryByYearProblem(1001));
console.info('1st century = ' + centuryByYearProblem(1));
// console.info(centuryByYearProblem('2018'));

// Выведет '(255, 255, 255)'
console.info('hex2rgb: (255, 255, 255) = ' + colorsProblem('#FFFFFF'));
console.info('hex2rgb: (128, 0, 128) = ' + colorsProblem('#800080'));
console.info('hex2rgb: (0, 0, 0) = ' + colorsProblem('#000000'));
console.info('hex2rgb: (165, 42, 42) = ' + colorsProblem('#A52A2A'));

// Выведет `1`
console.info('fibonacci: 1st element is 1 = ' + fibonacciProblem(1));
console.info('fibonacci: 6th element is 8 = ' + fibonacciProblem(6));
console.info('fibonacci: 60th element is 1548008755920 = ' + fibonacciProblem(60));
// console.info(fibonacciProblem('hello'));
// console.info(fibonacciProblem(-1));

// Выведет `[
//    [1, 4, 7],
//    [2, 5, 8],
//    [3, 6, 9]
// ]`
console.info(matrixProblem([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]));
console.info(matrixProblem([
    [1, 2],
    [4, 5],
    [7, 8]
]));
console.info(matrixProblem([
    [1, 2, 3],
    [4, 5, 6]
]));
// console.info(matrixProblem('a'));
// console.info(matrixProblem(['a']));

// Выведет '1010101'
console.info('NS: 1010101 = ' + numberSystemProblem(85, 2));
console.info('NS: 50 = ' + numberSystemProblem(40, 8));
console.info('NS: 45 = ' + numberSystemProblem(45, 10));
console.info('NS: 21 = ' + numberSystemProblem(65, 32));
// console.info(numberSystemProblem('65', 2));
// console.info(numberSystemProblem(65, '1'));
// console.info(numberSystemProblem(65, 1));
// console.info(numberSystemProblem(65, 33));

// Выведет `true`
console.info('true = ' + phoneProblem('8-800-333-51-73'));
console.info('false = ' + phoneProblem('8-908-333-51-73'));
console.info('false = ' + phoneProblem('8-800-33-51-73'));
console.info('false = ' + phoneProblem('8-800-asd-51-73'));

// Выведет `2`
console.info('smiles: 2 = ' + smilesProblem(':-) (-:'));
console.info('smiles: 2 = ' + smilesProblem(':-)-:-(-:'));
console.info('smiles: 0 = ' + smilesProblem(':--)(:'));
console.info('smiles: 1 = ' + smilesProblem(':-(-:'));
// console.info('smiles: 1 = ' + smilesProblem(123);

// Выведет 'x'
console.info('x = ' + ticTacToeProblem([
    ['x', 'x', 'x'],
    ['o', 'o', 'x'],
    ['o', 'x', 'o']
]));
console.info('o = ' + ticTacToeProblem([
    ['x', 'x', 'o'],
    ['o', 'o', 'x'],
    ['o', 'x', 'x']
]));
console.info('draw = ' + ticTacToeProblem([
    ['x', 'o', 'x'],
    ['x', 'o', 'x'],
    ['o', 'x', 'o']
]));
