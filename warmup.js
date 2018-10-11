'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        return a + b;
    }
    throw new TypeError();
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
    if (year % 100 === 0) {
        return Math.trunc(year / 100);
    }

    return Math.trunc(year / 100 + 1);
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
    if (hexColor.length !== 7 || !hexColor.match(/#[\dA-Fa-f]{6}/)) {
        throw new RangeError();
    }
    const colors = splitColors(hexColor);
    const redValue = colors[0];
    const greenValue = colors[1];
    const blueValue = colors[2];
    const lessThen = (redValue && greenValue && blueValue) <= 255;
    const moreThen = (redValue && greenValue && blueValue) >= 0;

    if (moreThen && lessThen) {
        return '(' + redValue + ', ' + greenValue + ', ' + blueValue + ')';
    }

    throw new RangeError();
}

function splitColors(color) {
    const redValue = parseInt(color.slice(1, 3), 16);
    const greenValue = parseInt(color.slice(3, 5), 16);
    const blueValue = parseInt(color.slice(5, 7), 16);

    return [redValue, greenValue, blueValue];
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
    if (Number.isInteger(n)) {
        if (n < 0) {
            throw new RangeError();
        }
    } else {
        throw new TypeError();
    }

    function fib(d) {
        return (d === 1 || d === 2) ? 1 : fib(d - 1) + fib(d - 2);
    }

    return fib(n);
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (checkInputMatrix(matrix)) {
        throw new TypeError();
    }
    var newMatrix = [];
    var a = 0;
    for (var i = 0; i < matrix.length; i++) { // m
        newMatrix.push([]);
        for (var j = 0; j < matrix[i].length; j++) { // n
            newMatrix[a].push(matrix[j][i]);
        }
        a += 1;
    }

    return (newMatrix.length === 0) ? [[]] : newMatrix;
}

function checkInputMatrix(matrix) {
    return !Array.isArray(matrix) || !Array.isArray(matrix[0]) || matrix[0].length === 0;
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
    if (!Number.isInteger(targetNs) || typeof n !== 'number') {
        throw new TypeError();
    }
    if (targetNs > 36 || targetNs < 2) {
        throw new RangeError();
    }

    return (n).toString(targetNs);
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    return phoneNumber.match('8-800-/d{3}-/d{2}-/d{2}') === null;
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

    const leftSmile = text.match(/:-\)/g);
    const rightSmile = text.match(/\(-:/g);

    return ((leftSmile === null) ? 0 : leftSmile.length) +
        ((rightSmile === null) ? 0 : rightSmile.length);
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    const sets = [[field[0][0], field[1][1], field[2][2]],
        [field[2][0], field[1][1], field[0][2]],
        [field[0][0], field[1][0], field[2][0]],
        [field[0][1], field[1][1], field[2][1]],
        [field[0][2], field[1][2], field[2][2]],
        [field[0][0], field[0][1], field[0][2]],
        [field[1][0], field[1][1], field[1][2]],
        [field[2][0], field[2][1], field[2][2]]];

    for (var i = 0; i < 8; i++) {
        const elem = sets[i][0];
        if (elem === sets[i][1] && sets[i][1] === sets[i][2]) {
            return elem;
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
