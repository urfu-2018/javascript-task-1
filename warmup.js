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
    if (!Number.isInteger(year)) {
        throw new TypeError();
    }
    if (year < 0) {
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
    if (typeof hexColor !== 'string') {
        throw new TypeError();
    }
    const re = /^#[0-9A-Fa-f]{6}$/;
    if (!re.test(hexColor)) {
        throw new RangeError();
    }
    const r = parseInt(hexColor[1] + hexColor[2], 16);
    const g = parseInt(hexColor[3] + hexColor[4], 16);
    const b = parseInt(hexColor[5] + hexColor[6], 16);

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
    if (!Number.isInteger(n)) {
        throw new TypeError();
    }
    if (n <= 0) {
        throw new RangeError();
    }
    let fi1 = 1;
    let fi2 = 1;
    let temp;
    for (let i = 2; i < n; i++) {
        temp = fi2;
        fi2 = fi1 + temp;
        fi1 = temp;
    }

    return fi2;
}

function isEmptyArray(array) {
    if (!Array.isArray(array) || array.length === 0) {
        return true;
    }
}

function is2DArray(array) {
    if (isEmptyArray(array)) {
        return false;
    }
    for (let i = 0; i < array.length; i++) {
        if (isEmptyArray(array[i]) || array[i].length !== array[0].length) {
            return false;
        }
    }

    return true;
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (!is2DArray(matrix)) {
        throw new TypeError();
    }
    const rows = matrix.length;
    const columns = matrix[0].length;
    let transposedMatrix = new Array(columns).fill(0)
        .map(() => new Array(rows).fill(0));
    for (let i = 0; i < rows; i++) {
        if (matrix[i].length === 0) {
            throw new TypeError();
        }
        for (let j = 0; j < columns; j++) {
            transposedMatrix[j][i] = matrix[i][j];
        }
    }

    return transposedMatrix;
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
    if (typeof n !== 'number' || !Number.isFinite(n) || !Number.isInteger(targetNs)) {
        return new TypeError();
    }
    if (!(targetNs >= 2 && targetNs <= 36)) {
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
    if (typeof phoneNumber !== 'string') {
        throw new TypeError();
    }

    return /^8[–-]800[–-][0-9]{3}[–-][0-9]{2}[–-][0-9]{2}$/.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (typeof text !== 'string') {
        return new TypeError();
    }
    const rightSmile = text.split(':-)').length - 1;
    const leftSmile = text.split('(-:').length - 1;

    return rightSmile + leftSmile;
}

function checkRows(field, sign) {
    for (let i = 0; i < 3; i++) {
        //console.log(field[i][0] === field[i][1] === field[i][2] === sign);
        if ((field[i][0] === field[i][1] && field[i][1] === field[i][2] && field[i][2] === sign) ||
            (field[0][i] === field[1][i] && field[1][i] === field[2][i] && field[2][i] === sign)) {
            return true;
        }
    }

    return false;
}

function checkDiagonals(field, sign) {
    if ((field[0][0] === field[1][1] && field[1][1] === field[2][2] && field[2][2] === sign) ||
        (field[0][2] === field[1][1] && field[1][1] === field[2][0] && field[2][0] === sign)) {
        return true;
    }

    return false;
}

/*
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    if (checkRows(field, 'x') || checkDiagonals(field, 'x')) {
        return 'x';
    }
    else if (checkRows(field, 'o') || checkDiagonals(field, 'o')) {
        return 'o';
    }
    else {
        return 'draw';
    }
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
