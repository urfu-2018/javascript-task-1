'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (!isNumber(a) || !isNumber(b)) {
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
    if (!isNumber(year)) {
        throw new TypeError();
    }
    if (year < 0 || !Number.isInteger(year)) {
        throw new RangeError();
    }

    return Math.ceil(year / 100);

}

function isTypeOf(obj, type) {
    return typeof obj === type;
}

function isNumber(obj) {
    return isTypeOf(obj, 'number');
}

function isString(obj) {
    return isTypeOf(obj, 'string');
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
        throw new TypeError();
    }

    const correctHexColor = /^#[A-Fa-f0-9]{6}$/g;
    if (!correctHexColor.test(hexColor)) {
        throw new RangeError();
    }
    hexColor = hexColor.substring(1);
    let r = parseInt(hexColor[0] + hexColor[1], 16);
    let g = parseInt(hexColor[2] + hexColor[3], 16);
    let b = parseInt(hexColor[4] + hexColor[5], 16);

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
    if (!isNumber(n)) {
        throw new TypeError();
    }
    if (!Number.isInteger(n) || n <= 0) {
        throw new RangeError();
    }

    let a = 0;
    let b = 1;
    for (let i = 0; i < n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    return a;
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (!Array.isArray(matrix) || matrix.length === 0 || !isCorrectInside(matrix)) {
        throw new TypeError();
    }
    const M = matrix.length;
    const N = matrix[0].length;
    var transported = new Array(N);
    for (let i = 0; i < N; i++) {
        transported[i] = new Array(M);
        for (let j = 0; j < M; j++) {
            transported[i][j] = matrix[j][i];
        }
    }

    return transported;
}

function isCorrectInside(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        if (!Array.isArray(matrix[i]) || matrix[i].length !== matrix[0].length) {
            return false;
        }
    }

    return true;
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
    if (!isString(phoneNumber)) {
        throw new TypeError();
    }

    return /^8-800-\d{3}-\d{2}-\d{2}$/.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (!isString(text)) {
        throw new TypeError();
    }
    const leftSmile = /\(-:/g;
    const rightSmile = /:-\)/g;

    return getOccurencesCount(text, leftSmile) + getOccurencesCount(text, rightSmile);
}

function getOccurencesCount(text, regexp) {
    const match = text.match(regexp);

    return match ? match.length : 0;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    for (let i = 0; i < 3; i++) {
        const winner = checkRowAndColumn(field, i);
        if (winner) {
            return winner;
        }
    }
    if ((field[0][0] === field[1][1]) && (field[1][1] === field[2][2])) {
        return field[0][0];
    }
    if ((field[2][0] === field[1][1]) && (field[1][1] === field[0][2])) {
        return field[2][0];
    }

    return 'draw';
}

function checkRowAndColumn(field, i) {
    if ((field[i][0] === field[i][1]) && (field[i][1] === field[i][2])) {
        return field[i][0];
    }

    if ((field[0][i] === field[1][i]) && (field[1][i] === field[2][i])) {
        return field[0][i];
    }

    return undefined;
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
