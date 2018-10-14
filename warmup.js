'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (typeof(a) !== 'number' || typeof(b) !== 'number') {
        throw new TypeError('Неверный тип аргумента для сложения');
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
    if (typeof(year) !== 'number') {
        throw new TypeError('В качестве года передано не число');
    }

    if (year < 0) {
        throw new RangeError('В качестве года передано отрицательное число');
    }

    var century = Math.ceil(year / 100);

    return century;
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
        throw new TypeError('Цвет передан не строкой');
    }

    var regexp = /^#[A-Fa-f0-9]{6}$/;
    if (!regexp.test(hexColor)) {
        throw new RangeError('Неверный формат HEX цвета');
    }

    var r = parseInt(hexColor.substr(1, 2), 16);
    var g = parseInt(hexColor.substr(3, 2), 16);
    var b = parseInt(hexColor.substr(5, 2), 16);

    return `(${r}, ${g}, ${b})`;
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
        throw new TypeError('В качестве положения в ряде передано не число');
    }
    if (n < 0 || !Number.isInteger(n)) {
        throw new RangeError('Положение в ряде не является целым положительным числом');
    }

    var prePrev = 1;
    var prev = 1;
    var curNum = 1;

    for (var i = 3; i <= n; i++) {
        curNum = prePrev + prev;
        prePrev = prev;
        prev = curNum;
    }

    return curNum;
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (!Array.isArray(matrix) || !matrix.every(Array.isArray)) {
        throw new TypeError('В функцию передаётся не двумерный массив');
    }

    var m = matrix.length;
    var n = matrix[0].length;
    var transMatrix = [];
    for (var i = 0; i < n; i++) {
        transMatrix[i] = [];
        for (var j = 0; j < m; j++) {
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
    if (typeof(n) !== 'number' || typeof(targetNs) !== 'number' || !Number.isInteger(targetNs)) {
        throw new TypeError('Переданы аргументы некорректного типа');
    }

    if (targetNs < 2 || targetNs > 36) {
        throw new RangeError('Cистема счисления выходит за пределы значений [2, 36]');
    }

    return n.toString(targetNs);
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    if (typeof(phoneNumber) !== 'string') {
        throw new TypeError('bebebe');
    }
    var regexp = /^8-800-\d{3}-\d{2}-\d{2}$/;

    return regexp.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (typeof(text) !== 'string') {
        throw new TypeError('В качестве аргумента передаётся не строка');
    }

    var resArr = text.match(/:-\)|\(-:/g);
    var res = 0;
    if (resArr !== null) {
        res = resArr.length;
    }

    return res;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    var res = checkRows(field);
    if (res !== null) {
        return res;
    }

    res = checkColumns(field);
    if (res !== null) {
        return res;
    }

    res = checkDiag(field);
    if (res !== null) {
        return res;
    }

    return 'draw';
}

function checkRows(field) {
    var firstSim = '';
    for (var i = 0; i < 3; i++) {
        firstSim = field[i][0];
        if (firstSim === field[i][1] && firstSim === field[i][2]) {
            return firstSim;
        }
    }

    return null;
}

function checkColumns(field) {
    var firstSim = '';
    for (var i = 0; i < 3; i++) {
        firstSim = field[0][i];
        if (field[1][i] === field[2][i] === firstSim) {
            return firstSim;
        }
    }

    return null;
}

function checkDiag(field) {
    var firstSim = field[1][1];
    if (field[0][0] === firstSim && field[2][2] === firstSim ||
        field[0][2] === firstSim && field[2][0] === firstSim) {
        return firstSim;
    }

    return null;
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
