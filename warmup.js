'use strict';

/**
 * Проверяет является ли аргумент числом
 * @param {Number} something Нет требований к аргументу
 * @returns {Boolean} Если является числом, то true, а иначе false
 */
function isNumber(something) {
    return typeof something === 'number';
}

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (!isNumber(a)) {
        throw new TypeError('First argument is not a number');
    }
    if (!isNumber(b)) {
        throw new TypeError('Second argument is not a number');
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
    if (!isNumber(year)) {
        throw new TypeError('Argument is not a number');
    }
    if (year < 0) {
        throw new RangeError('Argument is negative');
    }
    const YEARS_IN_CENTURY = 100;

    return Math
        .floor(year / YEARS_IN_CENTURY) + // получили индекс года
        1; // получили номер года
}

/**
  * определяет является ли аргумент строкой
  * @param {String} something Нет требований к аргументу
  * @returns {Boolean} Если является строкой, то true, а иначе false
  */
function isString(something) {
    return typeof something === 'string';
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
    const lowerHexColor = hexColor.toLocaleLowerCase();
    if (!isString(lowerHexColor)) {
        throw new TypeError('Color in Format HEX don\'t gives as a string');
    }
    const COLOR_RANGE_ERROR = new RangeError('Value of color is incorrect');
    if (lowerHexColor.length !== 7 || lowerHexColor[0] !== '#') {
        throw COLOR_RANGE_ERROR;
    }
    const {
        BASE_HEX,
        isHexadimal,
        getNumber
    } = require('./Hex');
    for (let i = 1; i < lowerHexColor.length; i++) {
        if (!isHexadimal(lowerHexColor[i])) {
            throw COLOR_RANGE_ERROR;
        }
    }
    lowerHexColor = lowerHexColor.split('#').shift();
    const number1 = getNumber(lowerHexColor[0]) * BASE_HEX + getNumber(lowerHexColor[1]);
    const number2 = getNumber(lowerHexColor[2]) * BASE_HEX + getNumber(lowerHexColor[3]);
    const number3 = getNumber(lowerHexColor[4]) * BASE_HEX + getNumber(lowerHexColor[5]);

    return '(' + number1 + ',' + number2 + ',' + number3 + ')';
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    if (!isNumber(n) !== 'number') {
        throw new TypeError('Position in row give\'s not as a number');
    }
    if (n < 0) {
        throw new RangeError('Position in row not positve integer');
    }
    if (n === 0 || n === 1) {
        return n;
    }
    let q = 0;
    let qPlus1 = 1;
    let i = 2;
    while (i < n) {
        const next = q + qPlus1;
        q = qPlus1;
        qPlus1 = next;
        i++;
    }

    return q + qPlus1;
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    const ARRAY_2D_RANGE_ERROR = new TypeError('transfered not an 2D array');
    if (!Array.isArray(matrix)) {
        throw ARRAY_2D_RANGE_ERROR;
    }
    for (let i = 0; i < matrix.length; i++) {
        if (!Array.isArray(matrix[i])) {
            throw ARRAY_2D_RANGE_ERROR;
        }
    }
    const newMatrix = [];
    const m = matrix[0].length;
    const n = matrix.length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            newMatrix[i][j] = matrix[j][i];
        }
    }

    return newMatrix;
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
        throw new TypeError('Transfered not a decimal number');
    }
    if (!isNumber(targetNs)) {
        throw new TypeError('Base of number system isn\'t a number');
    }
    const maxNumberSystem = 36;
    const minNumberSystem = 2;
    if ((targetNs - minNumberSystem) * (maxNumberSystem - targetNs) < 0) {
        throw new RangeError('Base of number system not belong [2, 36]');
    }

    return n.toString(targetNs);
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    if (phoneNumber.length !== 15) {
        return false;
    }

    return /8-800-\d{3}-\d{2}-\d{2}/.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (!isString(text)) {
        throw new TypeError('Text didn\'t transfer like a string');
    }
    const smilesArray = [':-)', '(-:'];
    let amount = 0;
    smilesArray.forEach(function (smile) {
        amount += text.split(smile).length - 1;
    });

    return amount;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    let x0 = 1;
    let y0 = 1;
    let delta = Math.PI / 4;
    const iterationQuantity = Math.round(2 * Math.PI / delta);
    for (let i = 0; i < iterationQuantity; i++) {
        const dX = Math.round(Math.cos(i * delta));
        const dY = Math.round(Math.sin(i * delta));
        if (field[x0][y0] === field[x0 + dX][y0 + dY] &&
        field[x0][y0] === field[x0 - dX][x0 - dY]) {
            return field[x0][y0];
        }
    }
    x0 = 0;
    y0 = 0;
    delta = Math.PI / 2;
    iterationQuantity = Math.round(2 * Math.PI / delta);
    for (let i = 0; i < iterationQuantity; i++) {
        const dX = Math.round(Math.cos(-i * delta));
        const dY = Math.round(Math.sin(-i * delta));
        if (field[x0][y0] === field[x0 + dX][y0 + dY] &&
        field[x0][y0] === field[x0 + 2 * dX][y0 + 2 * dY]) {
            return field[x0][y0];
        }
        x0 += 2 * dX;
        y0 += 2 * dY;
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
