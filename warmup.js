'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    let sum = parseInt(a) + parseInt(b);
    if (isNaN(sum)) {
        throw new TypeError();
    }

    return sum;
}

/**
 * Определяет век по году
 * @param {Number} year Год, целое положительное число
 * @throws {TypeError} Когда в качестве года передано не число
 * @throws {RangeError} Когда год – отрицательное значение
 * @returns {Number} Век, полученный из года
 */
function centuryByYearProblem(year) {
    let _year = parseInt(year);
    if (isNaN(_year)) {
        throw new TypeError();
    }
    if (_year < 0) {
        throw new RangeError();
    }
    let century = 0;
    if (_year % 100 > 0 && _year / 100 !== 0) {
        century = Math.trunc(_year / 100) + 1;
    } else if (_year / 100 === 0) {
        century = 1;
    } else {
        century = _year / 100;
    }

    return century;
}

function validateStr(str, regExp) {
    let result = str.match(regExp);

    return result !== null && result.length === 1;
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {number[]} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
    if (typeof hexColor !== 'string' || !validateStr(hexColor, /#[0-9a-fA-F]{6}/gi)) {
        throw new TypeError();
    }
    hexColor = hexColor.substr(1);
    let values = hexColor.split('');
    let r = 0;
    let g = 0;
    let b = 0;
    r = parseInt(values[0].toString() + values[1].toString(), 16);
    g = parseInt(values[2].toString() + values[3].toString(), 16);
    b = parseInt(values[4].toString() + values[5].toString(), 16);
    if (!(r > -1 && r < 256 && g > -1 && g < 256 && b > -1 && b < 256)) {
        throw new RangeError();
    }

    return '(' + r + ', ' + g + ', ' + b + ')';
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    let _n = parseInt(n);
    if (isNaN(_n)) {
        throw new TypeError();
    } else if (_n <= 0) {
        throw new RangeError();
    }
    let prev = 0;
    let current = 1;
    for (let i = 2; i <= _n; i++) {
        let help = prev;
        prev = current;
        current += help;
    }

    return current;
}

function isNotTwoDimensial(matrix) {
    let firstLength = matrix[0].length;
    for (let i = 0; i < matrix.length; i++) {
        if (firstLength !== matrix[i].length || matrix[i].some(elem=> Array.isArray(elem)) ||
            matrix[i].length === 0) {
            return true;
        }
    }

    return false;
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (!Array.isArray(matrix) || isNotTwoDimensial(matrix) || matrix.length === 0) {
        throw new TypeError();
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
    let _n = parseInt(n);
    let _targetNs = parseInt(targetNs);
    if (isNaN(_n) || isNaN(_targetNs)) {
        throw new TypeError();
    } else if (_targetNs < 2 || _targetNs > 36) {
        throw new RangeError();
    }

    return _n.toString(_targetNs);
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    return validateStr(phoneNumber, /8-800-\d{3}-\d{2}-\d{2}/gi);
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
    let result = text.match(/:-\)|\(-:/gi);

    return result !== null ? result.length : 0;
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
        if (field[0][i] === field[1][i] && field[1][i] === field[2][i]) {
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
