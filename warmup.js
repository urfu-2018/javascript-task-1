'use strict';

function throwErrorIfNotInteger(argument, name = 'Argument') {
    if (!isNumber(argument) || !Number.isInteger(argument)) {
        throw new TypeError(`${name} should be an integer`);
    }
}

function isString(argument) {
    return typeof argument === 'string';
}

function isNumber(argument) {
    return typeof argument === 'number';
}

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (!isNumber(a) || !isNumber(b)) {
        throw new TypeError('Argumnents should be a numbers');
    }

    return a + b;
}

/**
 * Определяет век по году
 * @param {Number} year Год, целое положительное число
 * @throws {TypeError} Когда в качестве года передано не число
 * @throws {RangeError} Когда год – отрицательное значение
 * @returns {Number} Век, полученный из года
 */
function centuryByYearProblem(year) {
    throwErrorIfNotInteger(year);
    if (year < 0) {
        throw new RangeError('Year should not be negative number');
    }

    return Math.ceil(year / 100);
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
    if (!isString(hexColor)) {
        throw new TypeError('Argument must be a string');
    }

    let hexColorRegex = /^#[\dABCDEF]{6}$/gi;
    if (!hexColorRegex.test(hexColor)) {
        throw new RangeError('Argument not in allowed values');
    }

    let colorValues = new Array(3);
    for (var i = 0; i < 3; i++) {
        colorValues[i] = getColor(hexColor.substring(1 + i * 2, 1 + (i + 1) * 2));
    }

    return `(${colorValues.join(', ')})`;
}

function getColor(colorInHex) {
    return parseInt(colorInHex, 16);
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    if (!isNumber(n)) {
        throw new TypeError('Argument should be a number');
    }
    if (!Number.isInteger(n) || n <= 0) {
        throw new RangeError('Argument should be a positive number');
    }

    let current = 1;
    let previous = 1;

    for (let numberNow = 3; numberNow < n; numberNow++) {
        let tmp = current;
        current = current + previous;
        previous = tmp;
    }

    return current;
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (!Array.isArray(matrix) || matrix.length === 0) {
        throw new TypeError('Argument should be an array of arrays');
    }
    for (let y = 0; y < matrix.length; y++) {
        if (!Array.isArray(matrix[y]) || matrix[y].length !== matrix[0].length) {
            throw new TypeError('Argument should be an array of arrays with same lenth');
        }
    }

    return getTransposedMatrix(matrix);
}

function getTransposedMatrix(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let result = new Array(n);

    for (let i = 0; i < n; i++) {
        result[i] = new Array(m);

        for (let j = 0; j < m; j++) {
            result[i][j] = matrix[j][i];
        }
    }

    return result;
}

/**
 * Переводит число в другую систему счисления
 * @param {Number} n Число для перевода в другую систему счисления
 * @param {Number} targetNs Система счисления, в которую нужно перевести (Число от 2 до 36)
 * @throws {TypeError} Когда переданы аргументы некорректного типа
 * @throws {RangeError} Когда система счисления выходит за пределы значений [2, 36]
 * @returns {String} Число n в системе счисления targetNs
 */
function numberSystemProblem(n, targetNs) {
    if (!isNumber(n)) {
        return new TypeError('n should be a number');
    }
    throwErrorIfNotInteger(targetNs, 'targetNs');
    if (targetNs < 2 || targetNs > 36) {
        throw new RangeError('targetNs should be in [2, 36]');
    }

    return n.toString(targetNs);
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    if (!isString(phoneNumber)) {
        throw new TypeError('Argument should be a string');
    }

    let phoneRegex = /^8-800-\d{3}-\d{2}-\d{2}$/;

    return phoneRegex.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (!isString(text)) {
        throw new TypeError('Text should be string');
    }

    let smilesRegex = /(:-\)|\(:-))/g;

    return (text.match(smilesRegex) || []).length;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    const NOUGHT_CHAR = 'o';
    const CROSS_CHAR = 'x';

    let lines = getPossibleLines(field);
    if (isWinner(CROSS_CHAR, lines)) {
        return CROSS_CHAR;
    }

    if (isWinner(NOUGHT_CHAR, lines)) {
        return NOUGHT_CHAR;
    }

    return 'draw';
}

function isWinner(char, lines) {
    return lines.some(line => line.every(symb => symb === char));
}

function getPossibleLines(field) {
    let result = field.concat(getAllColumns(field));
    result.push(getDiagonal(true, field));
    result.push(getDiagonal(false, field));

    return result;
}

function getAllColumns(field) {
    let res = [];

    for (var x = 0; x < field[0].length; x++) {
        let column = [];
        for (var y = 0; y < field.length; y++) {
            column.push(field[y][x]);
        }
        res.push(column);
    }

    return res;
}

function getDiagonal(isMain, field) {
    let diagonal = [];

    for (var x = 0; x < field[0].length; x++) {
        let y = isMain ? x : field.length - 1 - x;
        diagonal.push(field[y][x]);
    }

    return diagonal;
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
