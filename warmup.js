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
    if (year % 100 === 0) {
        return Math.floor(year / 100);
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
        throw new TypeError();
    }
    if (!/^#[\dA-Fa-f]{6}$/.test(hexColor)) {
        throw new RangeError();
    }

    return '(' + parseInt(hexColor.slice(1, 3), 16) + ', ' +
                parseInt(hexColor.slice(3, 5), 16) + ', ' +
                parseInt(hexColor.slice(5), 16) + ')';
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
    if (n <= 0 || !Number.isInteger(n)) {
        throw new RangeError();
    }

    let previous = 0;
    let target = 1;
    for (let i = 2; i <= n; i++) {
        let next = previous + target;
        previous = target;
        target = next;
    }

    return target;
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (!isTwoDimensionalArray(matrix)) {
        throw new TypeError();
    }
    let transposedMatrix = [];

    for (let j = 0; j < matrix[0].length; j++) {
        transposedMatrix[j] = [];
        for (let i = 0; i < matrix.length; i++) {
            transposedMatrix[j].push(matrix[i][j]);
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
    if (typeof n !== 'number' || typeof targetNs !== 'number') {
        throw new TypeError();
    }
    n = Number(n);
    targetNs = Number(targetNs);
    if (targetNs < 2 || targetNs > 36) {
        throw new RangeError();
    }

    const alphabet = '0123456789abcdefghijklmnopqrstuvwxyz';

    let result = '';
    while (n > 0) {
        result = alphabet[n % targetNs] + result;
        n = Math.floor(n / targetNs);
    }

    return result;
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    return /^8-800-\d{3}-\d{2}-\d{2}$/.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке (-: :-)
 */
function smilesProblem(text) {
    if (typeof text !== 'string') {
        throw new TypeError();
    }

    return (text.match(/\(-:/g) || []).length +
            (text.match(/:-\)/g) || []).length;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    let xs = checkDiagonals(field, 'x') || checkLines(field, 'x');
    let os = checkDiagonals(field, 'o') || checkLines(field, 'o');
    if (xs && os) {
        return 'draw';
    }
    if (xs) {
        return 'x';
    }
    if (os) {
        return 'o';
    }
}

function checkLines(field, marker) {
    for (let i = 0; i < field.length; i++) {
        let row = true;
        let column = true;
        for (let j = 0; j < field.length; j++) {
            row = (field[i][j] === marker) && row;
            column = (field[j][i] === marker) && column;
        }
        if (row || column) {
            return true;
        }
    }

    return false;
}

function checkDiagonals(field, marker) {
    let main = true;
    let side = true;

    for (let i = 0; i < field.length; i++) {
        main = (field[i][i] === marker) && main;
        side = (field[3 - i - 1][i] === marker) && side;
    }

    return main || side;
}

function isTwoDimensionalArray(array) {
    if (!Array.isArray(array)) {
        return false;
    }
    for (let i = 0; i < array.length; i++) {
        if (!Array.isArray(array[i])) {
            return false;
        }
    }

    return true;
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
