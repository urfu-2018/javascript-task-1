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
        throw new TypeError('Args not numbers');
    } else {
        return a + b;
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
    if (!Number.isInteger(year)) {
        throw new TypeError('Year is not integer');
    } else if (year < 0) {
        throw new RangeError('Negative year');
    } else {

        return Math.ceil(year / 100);
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
        throw new TypeError('Invalid arguments');
    }
    if (!/^#[0-9a-fA-F]{6}$/.test(hexColor)) {
        throw new RangeError('Incorrect color range');
    }
    const rgbColor = [];
    rgbColor[0] = parseInt(hexColor.slice(1, 3), 16);
    rgbColor[1] = parseInt(hexColor.slice(3, 5), 16);
    rgbColor[2] = parseInt(hexColor.slice(5), 16);

    return `(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]})`;
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    function getFibonacciValue(m) {
        if (m === 1 || m === 2) {
            return 1;
        }

        return getFibonacciValue(m - 1) + getFibonacciValue(m - 2);
    }

    if (typeof n !== 'number') {
        throw new TypeError('Arg is not a number');
    } else if (parseInt(n) !== n || n <= 0) {
        throw new RangeError('Number is not positive entire');
    } else {
        return getFibonacciValue(n);
    }
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {

    if (!Array.isArray(matrix)) {
        throw new TypeError('Arg is not array!');
    }
    const isMatrix = matrix.every(item => Array.isArray(item));
    if (!isMatrix) {
        throw new TypeError('Array is not demension of two');
    }
    let transMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
        transMatrix[i] = [];
        for (let j = 0; j < matrix[i].length; j++) {
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
    if (typeof n !== 'number' || !Number.isInteger(targetNs)) {
        throw new TypeError('Args are not numbers');
    } else if (targetNs > 36 || targetNs < 2) {
        throw new RangeError('Invalig range of argument');
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
    return /^8-800-[0-9]{3}-[0-9]{2}-[0-9]{2}$/.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (typeof text !== 'string') {
        throw new TypeError('Text is not string');
    } else {
        let countSmiles = text.split(':-)').length + text.split('(-:').length - 2;

        return countSmiles;
    }
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    const trasporentField = matrixProblem(field);

    for (let i = 0; i < field.length; i++) {
        if ((Array.from(new Set(field[i]))).length === 1) {
            return field[i][0];
        }
        if ((Array.from(new Set(trasporentField[i]))).length === 1) {
            return trasporentField[i][0];
        }
    }
    if (field[0][0] === field[1][1] && field[1][1] === field[2][1]) {
        return field[0][0];
    }
    if (field[0][2] === field[1][1] && field[1][1] === field[2][0]) {
        return field[0][2];
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
