'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
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
    if (!Number.isInteger(year)) {
        throw new TypeError();
    }
    if (year < 0) {
        throw new RangeError();
    }
    const century = 100;
    const answer = Math.trunc(year / century);

    return (year % 100 === 0) ? answer : answer + 1;
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
    if (typeof(hexColor) !== 'string') {
        throw new TypeError();
    }
    if (!(/#[0-9A-F]{6}/i).test(hexColor) || hexColor.length > 7) {
        throw new RangeError();
    }
    let arrayOfColors = new Array(3);
    arrayOfColors[0] = parseInt(hexColor.substr(1, 2), 16);
    arrayOfColors[1] = parseInt(hexColor.substr(3, 2), 16);
    arrayOfColors[2] = parseInt(hexColor.substr(5, 2), 16);

    return '(' + arrayOfColors[0] + ', ' + arrayOfColors[1] + ', ' + arrayOfColors[2] + ')';
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    if (typeof(n) !== 'number') {
        throw new TypeError();
    }
    if (n < 0 || !Number.isInteger(n)) {
        throw new RangeError();
    }
    let a = 1;
    let b = 1;
    for (let i = 0; i < n - 2; i++) {
        a += b;
        b = a - b;
    }

    return a;
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (!Array.isArray(matrix) || !Array.isArray(matrix[0])) {
        throw new TypeError();
    }
    let transposedMatrix = new Array(matrix.length);
    for (let i = 0; i < transposedMatrix.length; i++) {
        transposedMatrix[i] = new Array(matrix[0].length);
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            transposedMatrix[i][j] = matrix[j][i];
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
    if (typeof(n) !== 'number' || !Number.isInteger(targetNs)) {
        throw new TypeError();
    }
    if (targetNs < 2 || targetNs > 36) {
        throw new RangeError();
    }
    const result = n.toString(targetNs);

    return result;
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {

    return /8-800-[0-9]{3}-[0-9]{2}-[0-9]{2}/.test(phoneNumber) && phoneNumber.length === 15;
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (typeof(text) !== 'string') {
        throw new TypeError();
    }
    const leftSideSmile = /:-\)/ig;
    const rightSideSmile = /\(-:/ig;
    function countOfSmiles(regExp) {
        const arrayOfMatchedSmiles = text.match(regExp);

        return (arrayOfMatchedSmiles !== null) ? arrayOfMatchedSmiles.length : 0;
    }

    return countOfSmiles(leftSideSmile) + countOfSmiles(rightSideSmile);
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    function isWinLine(coord1, coord2, coord3) {
        return (coord1 === coord2 && coord2 === coord3);
    }
    if (isWinLine(field[0][0], field[1][1], field[2][2]) ||
        isWinLine(field[2][0], field[1][1], field[0][2])) {
        return field[1][1];
    }
    for (let i = 0; i < 2; i++) {
        if (isWinLine(field[0][i], field[1][i], field[2][i])) {
            return field[0][1];
        } else if (isWinLine(field[i][0], field[i][1], field[i][2])) {
            return field[0][1];
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
