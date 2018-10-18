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
        throw new TypeError('"a" or "b" is not a number');
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
        throw new TypeError('year should be an integer number');
    }

    if (year < 0) {
        throw new RangeError('year should be a positive number');
    }

    return Math.floor(year / 100) + 1;
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
        throw new TypeError('HEX color should be a string');
    }

    if (hexColor.length !== 7) {
        throw new RangeError('HEX color must represented as #FFFFFF');
    }

    return `(${
        parseInt(hexColor.slice(1, 3), 16)}, ${
        parseInt(hexColor.slice(3, 5), 16)}, ${
        parseInt(hexColor.slice(5, 7), 16)})`;
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    if (!Number.isInteger(n)) {
        throw new TypeError('n should be an integer number');
    }
    if (n < 0) {
        throw new RangeError('n should be a positive number');
    }
    var prev = 0;
    var x = 1;
    for (var i = 0; i < n; i++) {
        var y = prev;
        prev = x;
        x += y;
    }

    return x;
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (!Array.isArray(matrix)) {
        throw new TypeError('matrix should be an array');
    }

    for (let i = 0; i < matrix.length; i++) {
        if (!Array.isArray(matrix[i])) {
            throw new TypeError(`matrix[${i}] should be an array`);
        }
    }

    return matrix[0].map(function (value, i) {
        return matrix.map(function (value2, k) {
            return matrix[k][i];

        });
    });
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
        throw new TypeError('first argument and radix should be numbers');
    }

    return n.toString(targetNs);
}

/**

 }

 /**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    if (typeof phoneNumber !== 'string') {
        throw new TypeError('phone number should be a string');
    }
    if (phoneNumber.match(/^8-800-\d{3}-\d{2}-\d{2}$/)) {
        return true;
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
        throw new TypeError ('test argument is not a string');
    }

    return text.match(/(:-\))|(\(-:)/g).length;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    const transp = matrixProblem(field);

    var mainDiag = [];
    var minorDiag = [];
    const wins = [mainDiag, minorDiag];
    for (var i = 0; i < 3; i++) {
        mainDiag.push(field[i][i]);
        minorDiag.push(field[i][2 - i]);
        wins.push(field[i], transp[i]);
    }

    var xWon = false;
    var oWon = false;

    wins.forEach(function (win) {
        if (win.indexOf('o') === -1) {
            xWon = true;
        }

        if (win.indexOf('x') === -1) {
            oWon = true;
        }
    });

    if (xWon === oWon) {
        return 'draw';
    }

    return xWon ? 'x' : 'o';
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
