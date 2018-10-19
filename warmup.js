'use strict';

function isInt(n) {
    return isFloat(n) && n % 1 === 0;
}

function isFloat(n) {
    return typeof n === 'number';
}

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (isFloat(a) && isFloat(b)) {
        return a + b;
    }
    throw new TypeError();
}

/**
 * Определяет век по году
 * @param {Number} year Год, целое положительное число
 * @throws {TypeError} Когда в качестве года передано не число
 * @throws {RangeError} Когда год – отрицательное значение
 * @returns {Number} Век, полученный из года
 */
function centuryByYearProblem(year) {
    if (isInt(year)) {
        if (year >= 0) {
            return parseInt(year / 100) + 1;
        }
        throw new RangeError();

    }
    throw new TypeError();
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
    if (typeof (hexColor) === 'string') {
        let isHex = /^#[a-f0-9]{6}\b/gi.test(hexColor);
        if (isHex) {
            let result = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/gi.exec(hexColor);
            let r = parseInt(result[1], 16).toString();
            let g = parseInt(result[2], 16).toString();
            let b = parseInt(result[3], 16).toString();

            return '(' + r + ', ' + g + ', ' + b + ')';
        }
        throw new RangeError();
    } else {
        throw new TypeError();
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
    if (!isInt(n)) {
        throw new TypeError();
    }
    if (n < 1) {
        throw new RangeError();
    }
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
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
    if (!Array.isArray(matrix)) {
        throw new TypeError();
    }
    var result = [];
    for (let i = 0; i < matrix.length; i++) {
        result.push([]);
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            result[j].push(matrix[i][j]);
        }
    }

    return result;
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
    if (typeof(n) === 'number' && isInt(targetNs)) {
        if (targetNs >= 2 <= 36) {
            let num = (isInt(n)) ? parseInt(n) : parseFloat(n);

            return num.toString(targetNs).toLowerCase();
        }
        throw new RangeError();
    }
    throw new TypeError();
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    if (typeof (phoneNumber) !== 'string') {
        throw new TypeError();
    }
    const mask = /^8-800-[\d]{3}-[\d]{2}-[\d]{2}$/gm;

    return mask.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (typeof (text) !== 'string') {
        throw new TypeError();
    }
    const mask = /(\(-:-\))|(\(-:)|(:-\))/g;
    let result;
    let countSmile = 0;
    while ((result = mask.exec(text)) !== null) {
        if (result[0] === '(-:-)') {
            countSmile += 2;
        } else {
            countSmile++;
        }
    }

    return countSmile;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    for (let i = 0; i < 3; i++) {
        if (field[i][0] === field[i][1] && field[i][0] === field[i][2]) {
            return field[i][0];
        }
        if (field[0][i] === field[i][1] && field[0][i] === field[i][2]) {
            return field[0][i];
        }
    }
    if (field[0][0] === field[1][1] && field[1][1] === field[2][2]) {
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
