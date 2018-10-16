'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    let intA = tryParseInt(a);
    let intB = tryParseInt(b);

    return intA + intB;
}

/**
 * Определяет век по году
 * @param {Number} year Год, целое положительное число
 * @throws {TypeError} Когда в качестве года передано не число
 * @throws {RangeError} Когда год – отрицательное значение
 * @returns {Number} Век, полученный из года
 */
function centuryByYearProblem(year) {
    let intYear = tryParseInt(year);
    let floatYear = tryParseFloat(year);
    if (intYear < 0 || floatYear !== intYear) {
        throw new RangeError();
    }

    return Math.ceil(intYear / 100);
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
    if (hexColor.length !== 7 || !(/#[0-9A-F]{6}/.test(hexColor))) {
        throw new RangeError();
    }
    let r = parseInt(hexColor[1] + hexColor[2], 16);
    let g = parseInt(hexColor[3] + hexColor[4], 16);
    let b = parseInt(hexColor[5] + hexColor[6], 16);

    return '(' + r + ', ' + g + ', ' + b + ')';
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    let intN = tryParseInt(n);
    if (intN < 0 || intN % 1 !== 0) {
        throw new RangeError();
    }
    if (intN === 0) {
        return 0;
    }
    if (intN === 1 || intN === 2) {
        return 1;
    }

    return fibonacciProblem(intN - 1) + fibonacciProblem(intN - 2);
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    checkMatrix(matrix);
    let m = matrix.length;
    let n = matrix[0].length;

    let newMatrix = [];
    for (var i = 0; i < n; i++) {
        newMatrix.push([]);
        for (var j = 0; j < m; j++) {
            newMatrix[i].push(matrix[j][i]);
        }
    }

    return newMatrix;
}

function checkMatrix(matrix) {
    if (!Array.isArray(matrix) || matrix.length === 0) {
        throw new TypeError();
    }

    let n = 0;
    if (!Array.isArray(matrix[0]) || matrix[0].length === 0) {
        throw new TypeError();
    }
    n = matrix[0].length;
    checkRows(matrix, n);
}

function checkRows(matrix, n) {
    for (let i = 0; i < matrix.length; i++) {
        if (!Array.isArray(matrix[i]) || matrix[i].length !== n) {
            throw new TypeError();
        }
    }
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
    tryParseFloat(n);
    let floatTargetNs = tryParseInt(targetNs);
    if (floatTargetNs < 2 || floatTargetNs > 36) {
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

    return /8-800-\d{3}-\d{2}-\d{2}/.test(phoneNumber) && phoneNumber.length === 15;
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
    let counter = 0;
    let i = 0;
    while (i < text.length - 2) {
        if (text.substring(i, i + 3) === '(-:') {
            counter += 1;
            i += 3;
        }
        if (text.substring(i, i + 3) === ':-)') {
            counter += 1;
        }
        i++;
    }

    return counter;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    let xLine = checkFieldFor(field, 'x');
    let oLine = checkFieldFor(field, 'o');
    if (xLine && oLine || !(xLine || oLine)) {
        return 'draw';
    }

    return xLine ? 'x' : 'o';
}

function tryParseInt(n) {
    let intN = parseInt(n);
    if (isNaN(intN)) {
        throw new TypeError();
    }

    return intN;
}

function tryParseFloat(n) {
    let floatN = parseFloat(n);
    if (isNaN(floatN)) {
        throw new TypeError();
    }

    return floatN;
}

function checkFieldFor(field, n) {
    for (let i = 0; i < 3; i++) {
        if ((field[i][0] === field[i][1] && field[i][1] === field[i][2] && field[i][2] === n) ||
        (field[0][i] === field[1][i] && field[1][i] === field[2][i] && field[2][i] === n)) {
            return true;
        }
    }
    if ((field[0][0] === field[1][1] && field[1][1] === field[2][2] && field[2][2] === n) ||
    (field[2][0] === field[1][1] && field[1][1] === field[0][2] && field[0][2] === n)) {
        return true;
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
