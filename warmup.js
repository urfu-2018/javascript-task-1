'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    checkNumberInteger(a);
    checkNumberInteger(b);

    return a + b;
}

function checkNumberInteger(input) {
    if (typeof input !== 'number') {
        throw new TypeError(`${input.toString()} is not a number`);
    }
    if (!Number.isInteger(input)) {
        throw new TypeError(`${input.toString()} is not an integer`);
    }
}

/**
 * Определяет век по году
 * @param {Number} year Год, целое положительное число
 * @throws {TypeError} Когда в качестве года передано не число
 * @throws {RangeError} Когда год – отрицательное значение
 * @returns {Number} Век, полученный из года
 */
function centuryByYearProblem(year) {
    checkNumberInteger(year);
    checkPositive(year);

    return Math.ceil(Number(year) / 100);
}

function checkPositive(input) {
    if (input <= 0) {
        throw new RangeError(`${input.toString()} is not a positive`);
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
    checkString(hexColor);
    checkHex(hexColor);
    if (hexColor.length === 4) {
        return ('(' + parseInt(hexColor[1] + hexColor[1], 16) + ', ' +
            parseInt(hexColor[2] + hexColor[2], 16) + ', ' +
            parseInt(hexColor[3] + hexColor[3], 16) + ')');
    }

    return ('(' + parseInt((hexColor[1] + hexColor[2]), 16) + ', ' +
        parseInt((hexColor[3] + hexColor[4]), 16) + ', ' +
        parseInt((hexColor[5] + hexColor[6]), 16) + ')');
}

function checkString(input) {
    if (typeof input !== 'string') {
        throw new TypeError(`${input.toString()} is not a string`);
    }
}

function checkHex(input) {
    if (!/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/i.test(input)) {
        throw new RangeError(`${input.toString()} is not a validate HEX`);
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
    checkNumberInteger(n);
    checkPositiveInteger(n);
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }

    return b;
}

function checkPositiveInteger(input) {
    if (input <= 0 || !Number.isInteger(input)) {
        throw new RangeError(`${input.toString()} is not a integer`);
    }
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    checkMatrix(matrix);
    var result = [];
    for (let i = 0; i < matrix[0].length; i++) {
        result[i] = [];
        for (let j = 0; j < matrix.length; j++) {
            result[i][j] = matrix[j][i];
        }
    }

    return result;
}

function checkMatrix(array) {
    if (!Array.isArray(array) || array.length === 0) {
        throw new TypeError(`${array.toString()} is not a matrix`);
    }
    for (let i = 0; i < array.length; i++) {
        if (!Array.isArray(array[i]) || array[i].length !== array[0].length) {
            throw new TypeError(`${array.toString()} is not a matrix`);
        }
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
    checkNumberInteger(n);
    checkNumberInteger(targetNs);
    checkSystem(targetNs);

    return n.toString(targetNs);
}

function checkSystem(input) {
    if (input < 2 || input > 36) {
        throw new RangeError(`${input.toString()} is not a system number`);
    }
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    checkString(phoneNumber);

    return /^8-800-\d{3}-\d{2}-\d{2}$/.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    checkString(text);
    var a = text.split(':-)').join('~');
    var b = a.split('(-:').join('~');
    let count = 0;
    for (let i = 0; i < b.length; i++) {
        if (b[i] === '~') {
            count++;
        }
    }

    return count;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    for (let i = 0; i < field.length; i++) {
        if (field[i][0] === field[i][1] && field[i][0] === field[i][2]) {
            return field[i][0];
        }
        if (field[0][i] === field[1][i] && field[0][i] === field[2][i]) {
            return field[0][i];
        }
    }
    if (field[0][0] === field[1][1] && field[0][0] === field[2][2]) {
        return field[0][0];
    }
    if (field[2][0] === field[1][1] && field[2][0] === field[0][2]) {
        return field[2][0];
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
