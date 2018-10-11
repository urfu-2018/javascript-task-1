'use strict';

function isNumber(n) {
    return typeof n === 'number';
}

function isInteger(n) {
    return typeof n === 'number' && !isNaN(parseFloat(n) && Number.isInteger(n));

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
        throw new TypeError('Wrong argument type, expected integer.');
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
    if (!isInteger(year)) {
        throw new TypeError('Wrong argument type, expected integer');
    }
    if (year < 1) {
        throw new RangeError('Only years from a.d. are allowed.');
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
    if (typeof hexColor !== 'string') {
        throw new TypeError('Wrong argument type, expected string.');
    }
    if (!hexColor.match(/^(#[0-9A-Fa-f]{6})$/g)) {
        throw new RangeError('Unacceptable values.');
    }

    const hexColorsSeparate = hexColor.substr(1).match(/(..?)/g); // [ 'FF', 'FF', 'FF' ]
    let rgbColorsSep = [];
    for (let i = 0; i < 3; i++) {
        rgbColorsSep.push(parseInt(hexColorsSeparate[i], 16));
    }

    return '(' + rgbColorsSep[0] + ', ' + rgbColorsSep[1] + ', ' + rgbColorsSep[2] + ')';
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    if (!isInteger(n)) {
        throw new TypeError('Wrong argument type, expected number.');
    }
    if (n < 1) {
        throw new RangeError('Wrong argument, expected positive integer.');
    }

    const phi = 1.61803398875;

    return Math.round(Math.pow(phi, n) / Math.sqrt(5)); // Binet's formula.
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (!Array.isArray(matrix) || matrix.length === 0) {
        throw new TypeError('Wrong argument type, expected 2D array.');
    }

    const M = matrix.length;
    const N = matrix[0].length;
    for (let i = 0; i < M; i++) { // i = 0 because I still need to check it for being an array.
        if (matrix[i].length !== N || !Array.isArray(matrix[i])) {
            throw new TypeError('Wrong argument type, expected 2D array.');
        }
    }

    return matrix[0].map((col, i) => matrix.map(row => row[i]));
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
    if (!isNumber(n) || !isInteger(targetNs)) {
        throw new TypeError('Wrong argument(s) type, expected integer.');
    }

    if (targetNs < 2 || targetNs > 36) {
        throw new RangeError('Wrong base, expected base in range [2, 36].');
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
        throw new TypeError('Wrong argument type, expected string');
    } else {
        return /^8-800-[0-9]{3}-[0-9]{2}-[0-9]{2}$/.test(phoneNumber);
    }
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (typeof text !== 'string') {
        throw new TypeError('Wrong argument type, expected string');
    }

    const smiles = text.match(/(:-\)|\(-:)/g);
    if (smiles !== null) {
        return smiles.length;
    }

    return 0;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    const fieldInline = field[0].concat(field[1], field[2]); // btw, this is only due to max-depth
    const winStates = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7],
        [3, 4, 5], [2, 5, 8], [2, 4, 6], [6, 7, 8]]; // all 3-in-a-rows in the game

    for (let i in winStates) {
        if (fieldInline[winStates[i][0]] === fieldInline[winStates[i][1]] &&
            fieldInline[winStates[i][1]] === fieldInline[winStates[i][2]]) {
            return fieldInline[winStates[i][0]];
        }
    }

    return 'draw';
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
