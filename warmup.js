'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (isNaN(a) || isNaN(b)) {
        throw new TypeError('В аргументы переданы не числа');
    }

    return Number(a) + Number(b);
}

/**
 * Определяет век по году
 * @param {Number} year Год, целое положительное число
 * @throws {TypeError} Когда в качестве года передано не число
 * @throws {RangeError} Когда год – отрицательное значение
 * @returns {Number} Век, полученный из года
 */
function centuryByYearProblem(year) {
    if (isNaN(year)) {
        throw new TypeError('В качестве года передано не число');
    }

    year = Number(year);

    if (year < 0) {
        throw new RangeError('Год не может быть отрицательным числом');
    }

    if (year <= 100) {
        return 1;
    }

    var remainderDivision = year % 100;

    if (remainderDivision === 0) {
        return year / 100;
    }

    return Math.floor(year / 100 + 1);
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
        throw new TypeError('Цвет передан не строкой');
    }

    var redChl;
    var greenChl;
    var blueChl;

    if (hexColor.length === 7) {
        redChl = parseInt(hexColor[1].toString() + hexColor[2].toString(), 16);
        greenChl = parseInt(hexColor[3].toString() + hexColor[4].toString(), 16);
        blueChl = parseInt(hexColor[5].toString() + hexColor[6].toString(), 16);
    }

    if (isNaN(redChl) || isNaN(greenChl) || isNaN(blueChl)) {
        throw new RangeError('Значения цвета выходят за пределы допустимых');
    }

    return '(' + redChl + ', ' + greenChl + ', ' + blueChl + ')';
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    if (isNaN(n)) {
        throw new TypeError('В качестве положения в ряде передано не число');
    }

    n = Number(n);

    if (!Number.isInteger(n) || n < 0) {
        throw new RangeError('Положение в ряде не является целым положительным числом');
    }

    var x = 1;
    var y = 1;

    for (var i = 3; i <= n; i++) {
        var z = x + y;

        x = y;
        y = z;
    }

    return y;
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (!Array.isArray(matrix) || matrix.length === 0) {
        throw new TypeError('В функцию передаётся не двумерный массив');
    }

    var lineLength = matrix[0].length;

    matrix.forEach(function (elem, i) {
        var elemLength;

        if (i === 0) {
            elemLength = lineLength;
        } else {
            elemLength = elem.length;
        }

        if (elemLength !== lineLength || !Array.isArray(elem)) {
            throw new TypeError('В функцию передаётся не двумерный массив');
        }
    });

    var m = matrix.length;
    var n = matrix[0].length;
    var tMatrix = [];

    for (var i = 0; i < n; i++) {
        tMatrix[i] = [];

        for (var j = 0; j < m; j++) {
            tMatrix[i][j] = matrix[j][i];
        }
    }

    return tMatrix;
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
    n = Number(n);
    targetNs = Number(targetNs);

    if (!Number.isInteger(n) || !Number.isInteger(targetNs)) {
        throw new TypeError('Переданы аргументы некорректного типа');
    }

    if (targetNs > 36 || targetNs < 2) {
        throw new RangeError('Система счисления выходит за пределы значений [2, 36]');
    }

    return n.toString(targetNs);
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
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (typeof(text) !== 'string') {
        throw new TypeError('В качестве аргумента передаётся не строка');
    }

    var result = text.match(/:-\)|\(-:/ig);

    if (!result) {
        return 0;
    }

    return result.length;
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
        }

        if (field[0][i] === field[1][i] && field[1][i] === field[2][i]) {
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
