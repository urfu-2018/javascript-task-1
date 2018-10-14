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
        throw new TypeError('Arguments must be integer values.');
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
        throw new TypeError('The argument must be integer.');
    } else if (year < 0) {
        throw new RangeError('The argument must be greater than zero.');
    }

    return Math.ceil(year / 100);// Сотый год - это последний год уходящего века.
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
        throw new TypeError('The argument must be string.');
    }
    if (!/^#([A-Fa-f0-9]){6}$/.test(hexColor) && !/^#([A-Fa-f0-9]){3}$/.test(hexColor)) {
        throw new RangeError('Color values are out of range.');
    }
    if (hexColor.length === 7) { // #FFFFFF
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);
        result = result.slice(1);

        return '(' + result
            .map(value => parseInt(value, 16))
            .join(', ') + ')';
    }
    if (hexColor.length === 4) { // #FFF === #FFFFFF
        let result = /^#?([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})$/i.exec(hexColor);
        result = result.slice(1);

        return '(' + result
            .map(value => parseInt(value + value, 16))
            .join(', ') + ')';
    }

    return null;
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
    } else if (n <= 0 || !Number.isInteger(n)) {
        throw new RangeError('The argument must be an integer value greate than zero.');
    }
    var a = 1;
    var b = 1;
    for (var i = 3; i <= n; i++) {
        var c = a + b;
        a = b;
        b = c;
    }

    return b;
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    checkMatrix(matrix);
    var m = matrix.length;
    var n = matrix[0].length;
    var matrixTransformed = [];
    for (var i = 0; i < n; i++) {
        checkArray(matrix, i, n);
        matrixTransformed[i] = [];
        for (var j = 0; j < m; j++) {
            matrixTransformed[i][j] = matrix[j][i];
        }
    }

    return matrixTransformed;
}

function checkMatrix(matrix) {
    if (!Array.isArray(matrix) || matrix.length === 0) {

        throw new TypeError('The argument must be a two-dimentional array.');
    }
    var colCount = matrix[0].length;
    for (var i = 0; i < matrix.length; i++) {
        if (!Array.isArray(matrix[i]) || matrix[i].length !== colCount) {
            throw new TypeError('Incorrect matrix.');
        }
    }
}

function checkArray(matrix, i, n) {
    if (!Array.isArray(matrix[i]) || matrix[i].length !== n) {
        throw new TypeError('The argument must be a two-dimentional array.');
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
    if (typeof(n) !== 'number' || typeof(targetNs) !== 'number') {
        throw new TypeError('Arguments must have numeric values.');
    } else if (!Number.isInteger(targetNs)) {
        throw new TypeError('targetNs must have an integer value.');
    } else if (targetNs < 2 || targetNs > 36) {
        throw new RangeError('targetNs must be between 2 and 36.');
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
        throw new TypeError('The argument must be string.');
    }

    return phoneNumber.length === 15 && /8-800-\d{3}-\d{2}-\d{2}/ig.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (typeof(text) !== 'string') {
        throw new TypeError('The argument must be string.');
    }
    var result = 0;
    var smiles = text.match(/(:-\))|(\(-:)/ig);
    if (smiles !== null) {

        result += smiles.length;
    }

    return result;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    var fieldCells = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            fieldCells.push(field[i][j]);
        }
    }
    var winCombinations = ['012', '345', '678', '036', '147', '258', '048', '246'];
    for (let i = 0; i < winCombinations.length; i++) {
        var wc = winCombinations[i];
        if (fieldCells[wc[0]] === fieldCells[wc[1]] && fieldCells[wc[1]] === fieldCells[wc[2]]) {

            return fieldCells[wc[0]];
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
