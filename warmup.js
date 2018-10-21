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
    if (typeof(year) !== 'number') {
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
    if (typeof(hexColor) !== 'string') {
        throw new TypeError();
    }
    var first = parseInt(hexColor[1] + hexColor[2], 16);
    var second = parseInt(hexColor[3] + hexColor[4], 16);
    var third = parseInt(hexColor[5] + hexColor[6], 16);
    if (first > 255 || second > 255 || third > 255) {
        throw new RangeError();
    }

    return '(' + first.toString() +
    ', ' + second.toString() +
    ', ' + third.toString() + ')';
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
    if (n <= 0 || !isInteger(n)) {
        throw new RangeError();
    }
    var a = [1, 1];
    for (var i = 2; i < n; i++) {
        a.push(a[i - 1] + a[i - 2]);
    }

    return a[n - 1];
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (!Array.isArray(matrix)) {
        throw new TypeError();
    }
    var i;
    var j;
    var ans = [];
    for (i = 0; i < matrix.length; i++) {
        if (!Array.isArray(matrix[i])) {
            throw new TypeError();
        }
        ans.push([]);
    }

    for (i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix[i].length; j++) {
            ans[j][i] = matrix[i][j];
        }
    }

    return ans;
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
    if (typeof(n) !== 'number' ||
    typeof(targetNs) !== 'number' ||
    !isInteger(targetNs)) {
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
    if (typeof(phoneNumber) !== 'string') {
        throw new TypeError();
    }

    return phoneNumber.search('^8-800-\\d\\d\\d-\\d\\d-\\d\\d$') !== -1;
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
    var ans = 0;
    var rSmile = '(-:';
    var lSmile = ':-)';
    for (var i = 0; i < text.length - 2; i++) {
        var tmp = '';
        for (var j = 0; j < 3; j++) {
            tmp += text[i + j];
        }
        if (tmp === rSmile || tmp === lSmile) {
            ans++;
        }
    }

    return ans;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */

function ticTacToeProblem(field) {
    var i;
    for (i = 0; i < 3; i++) {
        if (field[i][0] === field[i][1] &&
            field[i][0] === field[i][2]) {

            return field[i][0];
        }
        if (field[0][i] === field[1][i] &&
            field[0][i] === field[2][i]) {

            return field[0][i];
        }
    }
    if (field[0][2] === field[1][1] &&
        field[1][1] === field[2][0]) {

        return field[0][2];
    }
    if (field[0][0] === field[1][1] &&
        field[1][1] === field[2][2]) {

        return field[0][0];
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
