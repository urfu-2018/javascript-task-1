'use strict';

function abProblem(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new TypeError('Numbers must be integer');
    }

    return a + b;
}

function centuryByYearProblem(year) {
    if (!Number.isInteger(year)) {
        throw new TypeError('Year must be finite number');
    }
    if (year < 0) {
        throw new RangeError('Year must be non-negative');
    }
    const century = Math.floor(year / 100);

    return year % 100 ? century + 1 : century;
}

function colorsProblem(hexColor) {
    if (typeof hexColor !== 'string') {
        throw new TypeError('Argument is not string');
    }
    const regex = /^#([A-F\d]{2})([A-F\d]{2})([A-F\d]{2})$/i;
    const hexRGB = regex.exec(hexColor);
    if (hexRGB === null) {
        throw new RangeError('Color values is in incorrect format');
    }
    const rgb = [hexRGB[1], hexRGB[2], hexRGB[3]];

    return `(${rgb.map((value) => parseInt(value, 16)).join(', ')})`;
}

function fibonacciProblem(n) {
    if (!Number.isInteger(n)) {
        throw new TypeError('Number must be finite integer');
    }
    if (n <= 0) {
        throw new RangeError('Number must be positive');
    }
    let current = 1;
    let previous = 1;
    let sum;
    for (let i = 3; i <= n; i++) {
        sum = current + previous;
        previous = current;
        current = sum;
    }

    return current;
}

function matrixProblem(matrix) {
    if (!Array.isArray(matrix) || !matrix.length || !matrix.every(arr => Array.isArray(arr))) {
        throw new TypeError(
            'Argument must be a non-empty array of arrays where every element is array');
    }
    if (!isEqualLengthsOfRows(matrix) || !matrix.every(arr => arr.length)) {
        throw new TypeError('All elements must be the same non-zero length');
    }

    return Object.keys(matrix[0])
        .map(colNumber => matrix.map(rowNumber => rowNumber[colNumber]));
}

function isEqualLengthsOfRows(matrix) {
    const currentLength = matrix[0].length;
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i].length !== currentLength) {
            return false;
        }
    }

    return true;
}

function numberSystemProblem(n, targetNs) {
    if (!Number.isInteger(n) || !Number.isInteger(targetNs)) {
        throw new TypeError('Number must be finite integer');
    }
    if (targetNs < 2 || targetNs > 32) {
        throw new RangeError('Number was out of range');
    }

    return n.toString(targetNs);
}

function phoneProblem(phoneNumber) {
    if (typeof phoneNumber !== 'string') {
        throw new TypeError('Argument is not string');
    }
    const regex = /^8-800-[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

    return regex.test(phoneNumber);
}

function smilesProblem(text) {
    if (typeof text !== 'string') {
        throw new TypeError('Argument is not string');
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
    for (let y = 0; y < 3; y++) {
        let onRow = true;
        let onColumn = true;

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
