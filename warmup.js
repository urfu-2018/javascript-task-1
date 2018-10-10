'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (typeof a !== 'number' ||
        typeof b !== 'number') {
        throw new TypeError('a and b should be numbers');
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
        throw new TypeError('year should be number');
    }
    if (year < 0) {
        throw new RangeError('Year should be positive');
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
        throw new TypeError('Color should be string');
    }
    if (hexColor.length !== 7 && hexColor.length !== 4 || hexColor[0] !== '#') {
        throw new RangeError('Color should look like "#rgb" or "#rrggbb"');
    }
    const hex = hexColor.slice(1);
    function hexToDec(str) {
        return parseInt(str, 16);
    }
    let array = [];
    if (hex.length === 3) {
        array = hex.split('').map((x)=>x + x);
    } else {
        for (let i = 0; i < hex.length; i += 2) {
            array.push(hex.slice(i, i + 2));
        }
    }

    return `(${array.map(hexToDec).join(', ')})`;
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
        throw new TypeError('n should be number');
    }
    if (n < 0 || n !== Math.floor(n)) {
        throw new RangeError('n should be integer positive number');
    }
    let f0 = 0;
    let f1 = 1;
    let f2 = 1;
    for (let i = 0; i < n; i++) {
        f0 = f1;
        f1 = f2;
        f2 = f0 + f1;
    }

    return f0;
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (!Array.isArray(matrix) ||
        !Array.isArray(matrix[0])) {
        throw new TypeError('matrix should be at least two dimensional array');
    }

    return matrix[0].map((_, c) => matrix.map(row => row[c]));
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
    if (typeof n !== 'number' ||
        typeof targetNs !== 'number') {
        throw new TypeError('n and targetNs should be numbers');
    }

    return n.toString(targetNs);
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    return /8-800-\d{3}(-\d{2}){2}/.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (typeof text !== 'string') {
        throw new TypeError('text should be string');
    }

    return text.match(/(:\)|\(:|:-\)|\(-:)/g).length;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    let result = 'draw';
    function checkRows(fld) {
        for (const row of fld) {
            let check = true;
            let c = row[0];
            for (let i = 0; i < row.length; i++) {
                check = check && c === row[i];
            }
            if (check) {
                return c;
            }
        }
    }

    if ((field[0][0] === field[1][1] && field[1][1] === field[2][2]) ||
        (field[0][2] === field[1][1] && field[1][1] === field[2][0])) {
        result = field[1][1];
    }
    result = checkRows(field) || checkRows(matrixProblem(field)) || result;

    return result;
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
