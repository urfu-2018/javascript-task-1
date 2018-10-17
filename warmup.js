'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError();
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
    if (typeof year !== 'number') {
        throw new TypeError();
    }

    if (year <= 0) {
        throw new RangeError();
    }

    /* const length = year.toString().length;

    if (length >= 3) {
        const century = year.toString().substring(0, length - 2);

        if (year % 100 !== 0) {
            return (parseInt(century) + 1);
        }

        return (parseInt(century));
    }

    return 1;*/

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
    if (typeof hexColor !== 'string') {
        throw new TypeError();
    }

    if (/[g-z]/i.test(hexColor) || hexColor.length > 7 || hexColor.length < 4) {
        throw new RangeError();
    }

    hexColor = hexColor.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (hex, r, g, b) => {
        return r + r + g + g + b + b;
    });

    const colors = /([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);
    colors.shift();

    for (let i = 0; i < colors.length; i++) {
        colors[i] = parseInt(colors[i], 16).toString();
    }

    return `(${colors.join(', ')})`;
}

const cache = {};

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    if (typeof n !== 'number') {
        throw new TypeError();
    }

    if (n <= 0) {
        throw new RangeError();
    }

    if (n <= 2) {
        return 1;
    }

    if (n in cache) {
        return cache[n];
    }

    const value = fibonacciProblem(n - 1) + fibonacciProblem(n - 2);
    cache[n] = value;

    return value;
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (!matrix.every(Array.isArray)) {
        throw new TypeError();
    }

    const transMatrix = [];

    for (let i = 0; i < matrix[0].length; i++) {
        transMatrix[i] = [];

        for (let j = 0; j < matrix.length; j++) {
            transMatrix[i][j] = matrix[j][i];
        }
    }

    return transMatrix;
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
    if (typeof n !== 'number' || typeof targetNs !== 'number') {
        throw new TypeError();
    }

    if (targetNs < 2 || targetNs > 36) {
        throw new RangeError();
    }

    return n.toString(targetNs);
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    if (typeof phoneNumber !== 'string') {
        throw new TypeError();
    }

    return /^(8-800-)\d{3}-\d{2}-\d{2}$/.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (typeof text !== 'string') {
        throw new TypeError();
    }

    const smiles = text.match(/(:-\))|(\(-:)/gi);

    return smiles === null ? 0 : smiles.length;
}

function check(sequence) {
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i].match(/(x)/gi) !== null &&
            sequence[i].match(/(x)/gi).length === 3) {
            return 'x';
        }

        if (sequence[i].match(/(o)/gi) !== null &&
            sequence[i].match(/(o)/gi).length === 3) {
            return 'o';
        }
    }

    return 'draw';
}

function getDiagonals(field) {
    const diagonals = [];
    let firstDiag = '';
    let secondDiag = '';

    for (let i = 0; i < 3; i++) {
        firstDiag += field[i][i];
        secondDiag += field[i][2 - i];
    }

    diagonals.push(firstDiag);
    diagonals.push(secondDiag);

    return diagonals;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    if (!field.every(Array.isArray)) {
        throw new TypeError();
    }

    const diagonals = getDiagonals(field);

    const rows = [];

    for (let i = 0; i < 3; i++) {
        rows.push(field[i].join(''));
    }

    const columns = [];
    const transMatrix = matrixProblem(field);

    for (let i = 0; i < 3; i++) {
        columns.push(transMatrix[i].join(''));
    }

    const allSequences = diagonals.concat(rows, columns);

    return check(allSequences);
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
