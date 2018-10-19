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
        throw new TypeError('');
    }

    return parseInt(a) + parseInt(b);;
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
        throw new TypeError('');
    }
    if (year < 0) {
        throw new RangeError('');
    }

    return Math.floor((year - 1) / 100) + 1;
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {

    if (typeof (hexColor) !== 'string') {
        throw new TypeError('');
    }

    if (!(/#[0-9a-fA-F]{6}/g).test(hexColor)) {
        throw new RangeError('');
    }

    const red = parseInt(hexColor.substring(1, 3), 16);
    const green = parseInt(hexColor.substring(3, 5), 16);
    const blue = parseInt(hexColor.substring(5, 7), 16);

    return '(' + red + ', ' + green + ', ' + blue + ')';
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
        throw new TypeError('');
    }
    if (n <= 0 || !Number.isInteger(n)) {
        throw new RangeError('');
    }

    var left = 1;
    var right = 1;
    for (var i = 3; i <= n; i++) {
        const current = left + right;
        left = right;
        right = current;
    }

    return right;
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (matrix.length === 0 || !Array.isArray(matrix) || !matrix.every(Array.isArray)) {
        throw new TypeError('');
    }

    var newMarix = [];
    for (var i = 0; i < matrix[0].length; i++) {
        newMarix[i] = [];
        for (var j = 0; j < matrix.length; j++) {
            newMarix[i][j] = matrix[j][i];
        }
    }

    return newMarix;
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
        throw new TypeError('');
    }
    if (targetNs < 2 || targetNs > 36) {
        throw new RangeError('');
    }

    return n.toString(targetNs);
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    if (typeof (phoneNumber) !== 'string') {
        throw new TypeError('');
    }

    return (/^8-800-\d{3}-\d{2}-\d{2}$/).test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    var smileCount = 0;
    for (var i = 0; i < text.length; i++) {
        const temp = text.substr(i, 3);
        if (temp === '(-:' || temp === ':-)') {
            smileCount++;
        }
    }

    return smileCount;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    for (var i = 0; i < field[0].length; ++i) {
        if (field[0][i] === field[1][i] && field[0][i] === field[2][i]) {
            return field[0][i];
        }
        if (field[i][0] === field[i][1] && field[i][0] === field[i][2]) {
            return field[i][0];
        }
    }

    if ((field[1][1] === field[0][0] && field[1][1] === field[2][2]) ||
        (field[1][1] === field[0][2] && field[2][0] === field[1][1])) {
        return field[1][1];
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
