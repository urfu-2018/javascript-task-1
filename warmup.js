'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
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
    // Ваше решение
    if (typeof(year) !== 'number') {
        throw new TypeError();
    }
    if (year < 1 || !Number.isInteger(year)) {
        throw new RangeError();
    }

    return Math.ceil(year / 100);
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
    // Ваше решение
    const regex = new RegExp('^#[0-9A-Fa-f]{6}$');
    if (typeof hexColor !== 'string') {
        throw new TypeError();
    }
    if (!regex.test(hexColor)) {
        throw new RangeError();
    }
    hexColor = hexColor.substr(1, hexColor.length - 1);
    let res = '(';
    for (let i = 0; i < 3; i++) {
        res += parseInt(hexColor.substr(i * 2, 2), 16) + ', ';
    }
    res = res.substr(0, res.length - 2);
    res += ')';

    return res;
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    // Ваше решение
    const part = ((1 + Math.sqrt(5)) / 2);
    const sqrtOfFive = Math.sqrt(5);
    if (typeof(n) === 'number') {
        if (!Number.isInteger(n) || n < 1) {
            throw new RangeError();
        }

        return Math.round(Math.pow(part, n) / sqrtOfFive);
    }
    throw new TypeError();
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    // Ваше решение
    if (!Array.isArray(matrix) || matrix.length === 0) {
        throw new TypeError();
    }
    const M = matrix.length;
    const N = matrix[0].length;
    for (let i = 0; i < M; i++) {
        if (matrix[i].length !== N || !Array.isArray(matrix[i])) {
            throw new TypeError();
        }
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
    if (typeof (n) !== 'number' || typeof (targetNs) !== 'number' || !Number.isInteger(targetNs)) {
        throw new TypeError();
    }
    if (targetNs < 2 || targetNs > 36) {
        throw new RangeError();
    }

    return n.toString(targetNs);
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    const regexp = new RegExp(/^8-800-[0-9]{3}-[0-9]{2}-[0-9]{2}$/g);

    return (regexp.test(phoneNumber));
    // Ваше решение
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
    let res = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === ':' && text[i + 1] === '-' && text[i + 2] === ')') {
            res++;
            i += 2;
        }
        if (text[i] === '(' && text[i + 1] === '-' && text[i + 2] === ':') {
            res++;
            i += 2;
        }
    }

    return res;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    if (diagonalCheck(field) !== 'n') {
        return diagonalCheck(field);
    } else if (verticalCheck(field) !== 'n') {
        return verticalCheck(field);
    } else if (horizontalCheck(field) !== 'n') {
        return horizontalCheck(field);
    }

    return 'draw';
}

function diagonalCheck(field) {
    if (field[0][0] === field[1][1] && field[1][1] === field[2][2]) {
        return field[1][1];
    } else if (field[2][0] === field[1][1] && field[1][1] === field[0][2]) {
        return field[1][1];
    }

    return 'n';
}

function verticalCheck(field) {
    field = matrixProblem(field);
    for (let i = 0; i < 3; i++) {
        if (checkLine(field[i]) === 'o' || checkLine(field[i]) === 'x') {
            return checkLine(field[i]);
        }
    }

    return 'n';
}

function horizontalCheck(field) {
    for (let i = 0; i < 3; i++) {
        if (checkLine(field[i]) === 'o' || checkLine(field[i]) === 'x') {
            return checkLine(field[i]);
        }
    }

    return 'n';
}

function checkLine(line) {
    if (line[0] === line[1] && line[1] === line[2]) {
        return line[0];
    }

    return 'n';
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
