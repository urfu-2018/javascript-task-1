'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (Number.isNaN(a) || Number.isNaN(b)) {
        throw new TypeError('input values should be a integer');
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
        throw new TypeError('input value should be a integer');
    }

    if (year < 0) {
        throw new RangeError('year should be a positive number');
    }

    const yearInSenture = 100;

    return Math.trunc(year / yearInSenture) + 1;
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
        throw new TypeError('input value should be a string');
    }

    const isHexColorRegex = /#[0-9A-Fa-f]{6}/g;

    if (!isHexColorRegex.test(hexColor)) {
        throw new RangeError();
    }
    const r = parseInt(hexColor.substring(1, 3), 16);
    const g = parseInt(hexColor.substring(3, 5), 16);
    const b = parseInt(hexColor.substring(5), 16);

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
    if (Number.isNaN(n)) {
        throw new TypeError('input argument should be a number');
    }

    if (!Number.isInteger(n) || n < 0) {
        throw new RangeError('input argument should be a positive integer');
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
    if (!(matrix instanceof Array) || matrix[0].constructor !== Array) {
        throw new TypeError('matrix should be 2d array');
    }

    return matrix[0].map((col, i) => matrix.map(row => row[i]));
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
    if (!Number.isInteger(n) || !Number.isInteger(targetNs)) {
        throw new TypeError('input arguments should be a integer number');
    }

    if (targetNs > 36 || targetNs < 2) {
        throw new RangeError('targetNs shoud be in range [2, 36]');
    }

    return n.toString(targetNs);
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    const phoneNumberRegex = /^8-800-[0-9]{3}-[0-9]{2}-[0-9]{2}/g;

    return phoneNumberRegex.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (typeof text !== 'string') {
        throw new TypeError('input argument should be a string');
    }
    const smileRegex = /:-\)/g;
    const allSmiles = text.match(smileRegex);

    return allSmiles.length;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    if (isFinishFieldForPlayer(field, 'x')) {
        return 'x';
    }

    if (isFinishFieldForPlayer(field, 'o')) {
        return 'o';
    }

    return 'draw';
}

/**
 * Определяет победил ли игрок в игре "Крестики-нолики"
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @param {String} value Символ хода интересующего игрока
 * @returns {Boolean} Выиграл ли интересующий игрок
 */
function isFinishFieldForPlayer(field, value) {
    let diagonal1 = true;
    let diagonal2 = true;
    for (let x = 0; x < 3; x++) {
        let cols = true;
        let rows = true;

        diagonal1 = diagonal1 && (field[x][x] === value);
        diagonal2 = diagonal2 && (field[2 - x][x] === value);
        for (let y = 0; y < 3; y++) {
            cols = cols && field[x][y] === value;
            rows = rows && field[y][x] === value;
        }

        if (rows || cols) {
            return true;
        }
    }

    return diagonal1 || diagonal2;
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
