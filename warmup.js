'use strict';

function isNumber(n) {
    return typeof n === 'number';
}

function isString(n) {
    return typeof n === 'string';
}

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (!isNumber(a) || !isNumber(b)) {
        throw new TypeError('not a number');
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
    if (!isNumber(year)) {
        throw new TypeError('type of year is incorrect');
    } else if (year < 0) {
        throw new RangeError('');
    } else {
        return parseInt(year / 100 + 1, 10);
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
    if (!isString(hexColor)) {
        throw new TypeError(' not a string');
    } else if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hexColor) === false) {
        throw new RangeError('incorrect data');
    } else {
        var hex = hexColor.replace('#', '');

        var a = transformHexToRGB(hex, 0, 2);
        var b = transformHexToRGB(hex, 2, 4);
        var c = transformHexToRGB(hex, 4, 6);

        return `(${a}, ${b}, ${c})`;
    }
}

function transformHexToRGB(numb, a, b) {
    return parseInt(numb.substring(a, b), 16);
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    if (!isNumber(n)) {
        throw new TypeError('not a number');
    } else if (/^\d+$/.test(n) !== true) {
        throw new RangeError('incorrect');
    } else {
        return fibNumb(n);
    }
}

function fibNumb(t) {
    var a = 1;
    var b = 1;
    for (var i = 3; i <= t; i++) {
        let res = a + b;
        a = b;
        b = res;
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
    if (!Array.isArray(matrix[0])) {
        throw new TypeError('not this');
    }
    let m = matrix.length;
    let n = matrix[0].length;
    let newArray = [];
    for (let i = 0; i < n; i++) {
        newArray[i] = [];
        for (let j = 0; j < m; j++) {
            newArray[i][j] = matrix[j][i];
        }
    }

    return newArray;
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
    if (!isNumber(n) || !isNumber(targetNs)) {
        throw new TypeError('type is invalid');
    } else if (targetNs < 2 || targetNs > 36) {
        throw new RangeError('incorrect data');
    } else {
        return n.toString(Number(targetNs));
    }
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    if (/8-800-\d{3}-\d{2}-\d{2}$/.exec(phoneNumber)) {
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
    if (!isString(text)) {
        throw new TypeError('not a string');
    } else {
        return text.match(/(:-\)|\(-:)/g).length;
    }
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    if (
        (field[0][0] === field[1][1] && field[1][1] === field[2][2]) ||
        (field[0][2] === field[1][1] && field[1][1] === field[2][0])
    ) {
        return field[0][0];
    }
    for (let i = 0; i < field.length; i++) {
        if (field[i][0] === field[i][1] && field[i][1] === field[i][2]) {
            return field[i][0];
        } else if (field[0][i] === field[1][i] && field[1][i] === field[2][i]) {
            return field[0][i];
        }
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
