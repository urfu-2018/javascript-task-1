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
        throw new TypeError('Один из переданных аргументов не является числом');
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
    if (typeof year !== 'number') {
        throw new TypeError('В качестве аргумента передано не число');
    } else if (year < 0) {
        throw new RangeError('В качестве аргумента передано отрицательное число');
    } else {

        return Math.floor(year / 100) + 1;
    }
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
        throw new TypeError('В качестве аргумента передана не строка');
    } else if (! /^#[a-fA-F0-9]{6}$/.test(hexColor)) {
        throw new RangeError('В качестве аргумента передано недопустимое значение');
    } else {
        const red = parseInt(hexColor.slice(1, 3), 16);
        const green = parseInt(hexColor.slice(3, 5), 16);
        const blue = parseInt(hexColor.slice(5, 7), 16);

        return `(${red}, ${green}, ${blue})`;
    }
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
        throw new TypeError('В качестве аргумента передано не число');
    } else if (n < 0 || (Math.ceil(n) - n > 0)) {
        throw new RangeError('В качестве аргумента передано не целое положительное число');
    } else {

        return n === 1 || n === 2 ? 1 : fibonacciProblem(n - 1) + fibonacciProblem(n - 2);
    }
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (!Array.isArray(matrix) && Array.isArray(matrix[0])) {
        throw new TypeError('В качестве аргумента передан не двумерный массив');
    } else if (matrix[0].length === 0) {

        return [[]];
    }
    const newMatrix = Array(matrix[0].length);
    for (let i = 0; i < matrix.length; i++) {
        newMatrix[i] = new Array(matrix.length);
        for (let j = 0; j < matrix.length; j++) {
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
    if (typeof n !== 'number' || typeof targetNs !== 'number' || !Number.isInteger(targetNs)) {
        throw new TypeError('В качестве аргументов переданы не числа');
    } else if (targetNs < 2 || targetNs > 36) {
        throw new RangeError('В качестве аргумента передана неверная система счисления');
    } else {

        return n.toString(targetNs);
    }
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    if (typeof phoneNumber !== 'string') {
        throw new TypeError('В качестве аргумента передана не строка');
    }

    return /8-800-[\d]{3}-[\d]{2}-[\d]{2}/.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (typeof text !== 'string') {
        throw new TypeError('В качестве аргумента передана не строка');
    } else {

        return (text.match(/:[-~]?\)/g) || []).length + (text.match(/\([-~]?:/g) || []).length;
    }
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {

    if (field[0][0] === field[1][1] && field[2][2] === field[1][1] ||
         field[2][0] === field[1][1] && field[0][2] === field[1][1]) {

        return field[1][1];
    }

    for (let i = 0; i < 3; i++) {
        if (field[i][0] === field[i][1] && field[i][1] === field[i][2]) {

            return field[i][0];
        }
        if (field[0][i] === field[1][i] && field[1][i] === field[2][i]) {

            return field[0][i];
        }

        return 'draw';
    }
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
