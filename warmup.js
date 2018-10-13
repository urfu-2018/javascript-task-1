'use strict';

function abProblem(a, b) {
    if (typeof(a) !== 'number' || typeof(b) !== 'number') {
        throw new TypeError();
    }

    return a + b;
}

function centuryByYearProblem(year) {
    if (typeof year !== 'number') {
        throw new TypeError();
    }
    if (year < 0) {
        throw new RangeError();
    }
    const century = Math.floor(year / 100);

    return year % 100 === 0 ? century : century + 1;
}

function colorsProblem(hexColor) {
    if (typeof hexColor !== 'string') {
        throw new TypeError();
    }
    const regex = /#([A-F\d]{2})([A-F\d]{2})([A-F\d]{2})/;
    const hexRGB = regex.exec(hexColor);
    const rgb = [hexRGB[1], hexRGB[2], hexRGB[3]];

    return '(' + rgb.map((value) => parseInt(value, 16)).join(', ') + ')';
}

function fibonacciProblem(n) {
    if (typeof n !== 'number') {
        throw new TypeError();
    }
    if (n <= 0) {
        throw new RangeError();
    }
    let current = 1;
    let previous = 1;
    for (let i = 3; i <= n; i++) {
        let sum = current + previous;
        previous = current;
        current = sum;
    }

    return current;
}

function matrixProblem(matrix) {
    if (!(Array.isArray(matrix) && Array.isArray(matrix[0]))) {
        throw new TypeError();
    }

    return Object.keys(matrix[0])
        .map(colNumber => matrix.map(rowNumber => rowNumber[colNumber]));
}

function numberSystemProblem(n, targetNs) {
    if (typeof n !== 'number' || typeof targetNs !== 'number') {
        throw new TypeError();
    }
    if (targetNs < 2 || targetNs > 32) {
        throw new RangeError();
    }

    let result = '';
    while (n >= targetNs) {
        result = n % targetNs + result;
        n = Math.floor(n / targetNs);
    }

    return n + result;
}

function phoneProblem(phoneNumber) {
    if (typeof phoneNumber !== 'string') {
        throw new TypeError();
    }
    const regex = /8-800-[0-9]{3}-[0-9]{2}-[0-9]{2}/;

    return regex.test(phoneNumber);
}

function smilesProblem(text) {
    if (typeof text !== 'string') {
        throw new TypeError();
    }
    const regex = /(:-\)|\(-:)/g;
    const result = text.match(regex);

    return result !== null ? result.length : 0;
}

function ticTacToeProblem(field) {
    if (checkLines(field, 'x') || checkDiagonals(field, 'x')) {
        return 'x';
    }
    if (checkLines(field, 'o') || checkDiagonals(field, 'o')) {
        return 'o';
    }

    return 'draw';
}

function checkDiagonals(field, mark) {
    let toRight = true;
    let toLeft = true;
    for (let i = 0; i < 3; i++) {
        toRight = toRight && field[i][i] === mark;
        toLeft = toLeft && field[3 - i - 1][i] === mark;
    }
    if (toLeft || toRight) {
        return true;
    }

    return false;
}

function checkLines(field, mark) {
    let onRow = true;
    let onColumn = true;
    for (let y = 0; y < 3; y++) {
        for (let x = 0; x < 3; x++) {
            onRow = onRow && field[y][x] === mark;
            onColumn = onColumn && field[x][y] === mark;
        }
        if (onRow || onColumn) {
            return true;
        }
    }

    return false;
}

module.exports = {
    abProblem,
    centuryByYearProblem,
    colorsProblem,
    fibonacciProblem,
    matrixProblem,
    numberSystemProblem,
    phoneProblem,
    smilesProblem,
    ticTacToeProblem
};
