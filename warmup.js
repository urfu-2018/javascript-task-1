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
    if (a % 1 !== 0 || b % 1 !== 0) {

        return false;
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
    if (year % 1 !== 0) {

        return false;
    }

    return Math.ceil(year / 100);
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
    if (!(/^#[0-9,a-f,A-F]{6}$/).test(hexColor)) {
        throw new RangeError();
    }
    let hexChars = hexColor.replace('#', '');
    let r = parseInt(hexChars.substr(0, 2), 16);
    let g = parseInt(hexChars.substr(2, 2), 16);
    let b = parseInt(hexChars.substr(4, 2), 16);
    let rgbColor = '(' + r + ', ' + g + ', ' + b + ')';

    return rgbColor;
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
    if (n <= 0 || Math.trunc(n) !== n) {
        throw new RangeError();
    }
    let a = 1;
    let b = 1;
    let c = 0;
    for (let i = 3; i <= n; i++) {
        c = a + b;
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
    if (!matrix.every(Array.isArray) || !matrix.length === 0) {
        throw new TypeError();
    }
    let lengthRows = matrix.length;
    let lengthColumns = matrix[0].length;
    let newMatrix = [];
    for (let i = 0; i < lengthColumns; i++) {
        newMatrix[i] = [];
    }
    for (let j = 0; j < lengthRows; j++) {
        for (let i = 0; i < lengthColumns; i++) {
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
    if (typeof(n) !== 'number' || typeof(targetNs) !== 'number') {
        throw new TypeError();
    }
    if (targetNs < 2 || targetNs > 36) {
        throw new RangeError();
    }
    targetNs = (targetNs < 0) ? -targetNs : targetNs;

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
    const formatNumber = '8-800-xxx-xx-xx';
    let array = phoneNumber.split('-');
    for (let i = 2; i < 5; i++) {
        array[i] = array[i].replace(/[^a-z]/g, 'x');
    }
    let phoneStr = array[0] + '-' + array[1] + '-' + array[2] + '-' + array[3] + '-' + array[4];
    if (phoneStr === formatNumber) {
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
    if (typeof(text) !== 'string') {
        throw new TypeError();
    }
    if (text.match(/:-\)|\(-:/ig) !== null) {

        return text.match(/:-\)|\(-:/ig).length;
    }

    return 0;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    let arrayResultsGames = ['012', '345', '678', '036', '147', '258', '048', '246'];
    let arrayResult = [].concat(field[0], field[1], field[2]);
    let result;
    arrayResultsGames.forEach(
        function (item) {
            let arrayLine = item.split('');
            let x1 = arrayResult[arrayLine[0]];
            let x2 = arrayResult[arrayLine[1]];
            let x3 = arrayResult[arrayLine[2]];
            if (x1 === x2 && x2 === x3) {
                result = x1;
            }
        }
    );
    if (result) {

        return result;
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
