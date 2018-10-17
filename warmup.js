'use strict';
function abProblem(a, b) {
    if (Number.isInteger(a) === false) {
        throw new TypeError('Integer erorr a');
    }

    if (Number.isInteger(b) === false) {
        throw new TypeError('Integer eror b');
    }

    return a + b;
}

function centuryByYearProblem(year) {
    if (Number.isInteger(year) === false) {
        throw new TypeError('Integer error');
    }
    if (year <= 0) {
        throw new RangeError('Only positive numbers');
    }
    let roundedCentury = (year / 100);

    return Math.ceil(roundedCentury);
}

function colorsProblem(hexColor) {
    if (typeof hexColor !== 'string') {
        throw new TypeError('Цвет только строкой');
    }
    if ((/^#?[0-9A-F]{6}$/i).test(hexColor) === false) {
        throw new RangeError('Число выходит за допустимые пределы');
    }
    let rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);
    let r = parseInt(rgb[1], 16);
    let g = parseInt(rgb[2], 16);
    let b = parseInt(rgb[3], 16);

    return '(' + r + ', ' + g + ', ' + b + ')';
}

function fibonacciProblem(n) {
    if (Number.isInteger(n) === false) {
        throw new TypeError('n-это целое число');
    }
    if (n < 0) {
        throw new RangeError('n-положительное число');
    }
    let sums;
    if (n >= 2) {
        sums = fibonacciProblem(n - 1) + fibonacciProblem(n - 2);
    } else {
        sums = n;
    }

    return sums;
}

function matrixProblem(matrix) {
    if (Array.isArray(matrix) === false) {
        throw new TypeError('Должен быть массив');
    }
    if (matrix.every(Array.isArray) === false) {
        throw new TypeError('Должен быть двумерный массив');
    }
    {
        let m = matrix.length;
        let n = matrix[0].length;
        let cell = [];
        for (let i = 0; i < n; i++) {
            cell[i] = [];

            for (let j = 0; j < m; j++) {
                cell[i][j] = matrix[j][i];
            }
        }

        return cell;
    }
}

function numberSystemProblem(n, targetNs) {
    if (isNaN(n)) {
        throw new TypeError('Должно быть число');
    }
    if (!Number.isInteger(targetNs)) {
        throw new TypeError('Система счисления должна быть целым числом');
    }
    if ((targetNs >= 2) && (targetNs <= 36) === false) {
        throw new RangeError('Систему счисления от 2 до 36');
    }

    return n.toString(targetNs);
}

function phoneProblem(phoneNumber) {
    if (typeof phoneNumber !== 'string') {
        throw new TypeError('');
    }
    let pattern = /8-800-\d{3}-\d{2}-\d{2}/;

    return pattern.test(phoneNumber);
}

function smilesProblem(text) {
    if (typeof text !== 'string') {
        throw new TypeError('string only');
    }

    let result = text.match(/\(-:|:-\)/ig);
    if (result === null) {
        throw new TypeError('Смайликов не найдено');
    }

    return result.length;
}

function ticTacToeProblem(field) {
    const win = [];
    for (let i = 0; i < field.length; i++) {
        if (field[0][i] === field[1][i] && field[1][i] === field[2][i]) {
            win.push(field[0][i]);
        }
        if (field[i][0] === field[i][1] && field[i][1] === field[i][2]) {
            win.push(field[i][0]);
        }
    }
    if ((field[0][0] === field[1][1] && field[1][1] === field[2][2]) ||
        (field[0][2] === field[1][1] && field[1][1] === field[2][0])) {
        win.push(field[1][1]);
    }

    return whoWon(win);
}
function whoWon(win) {

    if (win.includes('o') !== false) {
        return 'o';
    }
    if (win.includes('x') !== false) {
        return 'x';
    }
    if (win.includes('o') === false && win.includes('x') === false) {
        return 'draw';
    }
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
