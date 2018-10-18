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
    if (typeof year !== 'number' || isNaN(year)) {
        throw new TypeError();
    }
    if (year < 0) {
        throw new RangeError();
    }

    return Math.trunc(year / 100) + 1;
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

    const hexRegexp = /^#([A-Fa-f0-9]{2}){3}$/;

    if (!hexRegexp.test(hexColor)) {
        throw new RangeError();
    }

    const result = [
        parseInt(hexColor.substring(1, 3), 16),
        parseInt(hexColor.substring(3, 5), 16),
        parseInt(hexColor.substring(5, 7), 16)
    ];

    return '(' + result.join(', ') + ')';
}

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
    if (n <= 0 || !Number.isInteger(n)) {
        throw new RangeError();
    }

    const range = [0, 1];
    for (let i = 1; i < n; i++) {
        range.push(range[i] + range[i - 1]);
    }

    return range[n];
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */

function matrixProblem(matrix) {
    if (typeof matrix[0].length === 'undefined') {
        throw new TypeError();
    }

    var transposedMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
        transposedMatrix.push(new Array(matrix[0].length));
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            transposedMatrix[j][i] = matrix[i][j];
        }
    }

    return transposedMatrix;
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
    if (typeof n !== 'number' ||
        typeof targetNs !== 'number' ||
        !Number.isInteger(targetNs)) {
        throw new TypeError();
    }

    if (targetNs < 2 || targetNs > 36) {
        throw new RangeError();
    }

    return n.toString(targetNs).toLowerCase();
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

    let str = /^8-800-[0-9]{3}-[0-9]{2}-[0-9]{2}/;

    let phoneMatch = phoneNumber.match(str);
    if (phoneMatch) {
        return phoneMatch.shift() === phoneNumber;
    }

    return false;
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

    let pattern = /:-\)|\(-:/g;
    let count = text.match(pattern);

    return count.length;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */

function ticTacToeProblem(field) {
    let somebodyWinsDiagonal = (
        field[0][0] === field[1][1] && field[1][1] === field[2][2] ||
        field[0][2] === field[1][1] && field[1][1] === field[2][0]
    );
    if (somebodyWinsDiagonal) {
        return field[1][1];
    }

    for (let i = 0; i < 3; i++) {
        let somebodyWinsInRow = field[i][0] === field[i][1] && field[i][1] === field[i][2];
        let somebodyWinsInColumn = field[0][i] === field[1][i] && field[1][i] === field[2][i];

        if (somebodyWinsInRow) {
            return field[i][0];
        }
        if (somebodyWinsInColumn) {
            return field[0][i];
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
