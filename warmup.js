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
    if (typeof year !== 'number' || !Number.isInteger(year)) {
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
    if (typeof hexColor !== 'string' || hexColor.length !== 7) {
        throw new TypeError();
    }
    const regExp = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
    if (!regExp.test(hexColor)) {
        throw new RangeError();
    }
    const rgb = regExp.exec(hexColor);

    return `(${parseInt(rgb[1], 16)}, ${parseInt(rgb[2], 16)}, ${parseInt(rgb[3], 16)})`;
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    if (typeof n !== 'number' || !Number.isInteger(n)) {
        throw new TypeError();
    }

    if (n <= 0) {
        throw new RangeError();
    }

    if (n === 1 || n === 2) {
        return 1;
    }

    return fibonacciProblem(n - 1) + fibonacciProblem(n - 2);
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
    const m = matrix.length;

    if (m === 0) {
        return [[]];
    }

    const n = matrix[0].length;

    for (let i = 0; i < matrix.length; i++) {
        if (!Array.isArray(matrix[i]) || matrix[i].length !== n) {
            throw new TypeError();
        }
    }

    return matrix[0].map((column, index) => matrix.map(row => row[index]));
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
    if (targetNs < 2 || targetNs > 36) {
        throw new RangeError();
    }

    if (!isTypeCorrect(n, targetNs)) {
        throw new TypeError();
    }

    return n.toString(targetNs);
}

function isTypeCorrect(n, targetNs) {
    if (typeof n !== 'number' || typeof targetNs !== 'number') {
        return false;
    }

    if (!Number.isFinite(n) || !Number.isInteger(targetNs)) {
        return false;
    }

    return true;
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

    const regExp = /8-800-[0-9]{3}-[0-9]{2}-[0-9]{2}/i;

    return regExp.test(phoneNumber) && phoneNumber.length === 15;
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

    const leftSmile = /:-\)/g;
    const rightSmile = /\(-:/g;

    return (text.match(leftSmile) || []).length + (text.match(rightSmile) || []).length;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    let winner = checkRows(field);
    if (winner) {
        return winner;
    }

    const transField = matrixProblem(field);
    winner = checkRows(transField);
    if (winner) {
        return winner;
    }

    winner = checkDiagonals(field);
    if (winner) {
        return winner;
    }

    return 'draw';
}

function checkDiagonals(field) {
    if (field[0][0] === field[1][1] && field[0][0] === field[2][3]) {
        return field[0][0];
    }

    if (field[0][2] === field[1][1] && field[0][2] === field[2][0]) {
        return field[0][2];
    }

    return false;
}

function checkRows(field) {
    for (let i = 0; i < field.length; i++) {
        if (checkRow(field[i])) {
            return field[i][0];
        }
    }

    return false;
}

function checkRow(fieldRow) {
    return new Set(fieldRow).size === 1;
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
