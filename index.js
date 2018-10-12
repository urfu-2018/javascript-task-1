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
console.info(abProblem(1, 1));
// console.info(abProblem('1', 1)); // => TypeError
// console.info(abProblem(NaN, 1)); // => TypeError
// console.info(abProblem(undefined, 1)); // => TypeError
// console.info(abProblem(1.1, 1)); // что тут надо кидать?
// console.info(abProblem({}, 1)); // => TypeError

// Выведет `21`
console.info(centuryByYearProblem(2018)); // => 21
// console.info(centuryByYearProblem(-1)); // => RangeError
// console.info(centuryByYearProblem(0)); // => RangeError
console.info(centuryByYearProblem(1)); // => 1
console.info(centuryByYearProblem(1000)); // => 10
// console.info(centuryByYearProblem(1.1)); // => RangeError (хотя по условию непонятно)
// console.info(centuryByYearProblem('1')); // => TypeError
// console.info(centuryByYearProblem({})); // => TypeError
// console.info(centuryByYearProblem(NaN)); // => что тут кидать???
// console.info(centuryByYearProblem(undefined)); // => TypeError


// Выведет "(255, 255, 255)"
console.info(colorsProblem('#FFFFFF')); // => (255, 255, 255)
console.info(colorsProblem('#ffffff')); // => (255, 255, 255)
console.info(colorsProblem('#fffFFf')); // => (255, 255, 255)
console.info(colorsProblem('#fff000')); // => (255, 240, 0)
console.info(colorsProblem('#abcdef')); // => (171, 205, 239)
// console.info(colorsProblem('#abcdeg')); // => RangeError
// console.info(colorsProblem('#ffccbbd')); // => RangeError
// console.info(colorsProblem('abcdeff')); // => RangeError
// console.info(colorsProblem(1)); // => TyperError
// console.info(colorsProblem({})); // => TypeError
// console.info(colorsProblem(NaN)); // => TypeError
// console.info(colorsProblem(undefined)); // => TypeError


// Выведет `1`
console.info(fibonacciProblem(1));
console.info(fibonacciProblem(100));


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

// console.info(matrixProblem(1));
// console.info(matrixProblem([[1]]));
/* console.info(matrixProblem([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8]
]));
*/
/*
console.info(matrixProblem([
    [1, [1, 2], 3],
    [4, 5, 6],
    [7, 8, 9]
]));
*/

// Выведет "1010101"
console.info(numberSystemProblem(85, 2));

// Выведет `true`
console.info(phoneProblem('8-800-333-51-73'));


// Выведет `2`
console.info(smilesProblem(':-) (-:'));
console.info(smilesProblem(':-)(-:(-:-)'));

// Выведет "x"
console.info(ticTacToeProblem([
    ['x', 'x', 'x'],
    ['o', 'o', 'x'],
    ['o', 'x', 'o']
]));

console.info(ticTacToeProblem([
    ['x', 'o', 'o'],
    ['o', 'o', 'x'],
    ['o', 'x', 'o']
]));
