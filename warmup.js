'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    // Ваше решение
    if (Number.isInteger(a) === false || Number.isInteger(b) === false) {
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
    // Ваше решение
    if (Number.isInteger(year) === false) {
        throw new TypeError();
    } else if (year < 0) {
        throw new RangeError();
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
    // Ваше решение
    const HexToRgb = /^#([A - Fa - f\d]{2})([A - Fa - f\d]{2})([A - Fa - f\d]{2})$/;
    if (typeof hexColor !== 'string') {
        throw new TypeError();
    } else if (!HexToRgb.test(hexColor)) {
        throw new RangeError();
    }
    let rgb = HexToRgb.exec(hexColor);
    rgb[1] = parseInt(rgb[1], 16);
    rgb[2] = parseInt(rgb[2], 16);
    rgb[3] = parseInt(rgb[3], 16);

    return `(${rgb[1]}, ${rgb[2]}, ${rgb[3]})`;
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */

function fibonacciProblem(n) {
    // Ваше решение
    if (typeof(n) !== 'number') {
        throw new TypeError();
    }
    if (n < 1 || !Number.isInteger(n)) {
        throw new RangeError();
    }
    let previous = 1;
    let current = 1;
    for (let i = 3; i <= n; i++) {
        let temp = current;
        current += previous;
        previous = temp;
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
    // Ваше решение
    if (!Array.isArray(matrix) || !matrix.every(Array.isArray || matrix.length === 0)) {
        throw new TypeError();
    }
    var k = matrix.length;
    var l = matrix[0].length;
    var transposeMatrix = [];
    for (var i = 0; i < l; i++) {
        transposeMatrix[i] = [];
        for (var j = 0; j < k; j++) {
            transposeMatrix[i][j] = matrix[j][i];
        }
    }

    return transposeMatrix;
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
    // Ваше решение
    if (typeof n !== 'number' || typeof targetNs !== 'number' || !Number.isInteger(targetNs)) {
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
    // Ваше решение
    if (typeof phoneNumber !== 'string') {
        throw new TypeError('Не строка');
    }
    
    return /^8-800-\d{3}-\d{2}-\d{2}$/.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    // Ваше решение
    if (typeof text !== 'string') {
        throw new TypeError('not a string');
    }
    var Smile = text.match(/(:-\)|\(-:)/gi);
    if (!Smile) {
        return 0;
    }

    return Smile.length;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    // Ваше решение
    for (let i = 0; i < 3; i++) {
        if (field[i][0] === field[i][1] && field[i][1] === field[i][2]) {
            return field[i][0];
        }
        if (field[0][i] === field[1][i] && field[1][i] === field[2][i]) {
            return field[0][i];
        }
    }
    if (field[0][0] === field[1][1] && field[1][1] === field[2][2]) {
        return field[0][0];
    }
    if (field[0][2] === field[1][1] && field[1][1] === field[2][0]) {
        return field[0][2];
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
