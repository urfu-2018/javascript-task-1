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
        throw new TypeError('One of the params is not number');
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
        throw new TypeError('Year is not number');
    }
    if (year <= 0) {
        throw new RangeError('Year should be > 0');
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
    if (!isString(hexColor)) {
        throw new TypeError('hexColor should be string');
    }
    if (!/^#[a-f\d]{6}$/i.test(hexColor)) {
        throw new RangeError('hexColor should have format #FFFFFF');
    }
    let rgb = parseInt(hexColor.slice(1), 16);
    let answer = [];
    for (let i = 0; i < 3; ++i) {
        answer.push(rgb % 256);
        rgb = Math.floor(rgb / 256);
    }

    return '(' + answer.reverse().join(', ') + ')';
}

function isString(x) {
    return Object.prototype.toString.call(x) === '[object String]';
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
        throw new TypeError('N is not number');
    }
    if (n < 1) {
        throw new RangeError('N should be gte then 1');
    }
    let previous = 1;
    let actual = 1;
    for (let i = 2; i < n; i++) {
        let next = actual + previous;
        previous = actual;
        actual = next;
    }

    return actual;
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (!Array.isArray(matrix) || !isMatrixNM(matrix)) {
        throw new TypeError('param should be matrix MxN');
    }

    return matrix[0].map((col, i) => matrix.map(row => row[i]));
}

function isMatrixNM(value) {
    if (value.length === 0) {
        return false;
    }
    for (let i = 0; i < value.length; ++i) {
        if (!Array.isArray(value[i]) || value[i].length !== value[0].length) {
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
    if (typeof n !== 'number' || !Number.isInteger(targetNs)) {
        throw new TypeError('N and TargetNs should be number');
    }
    if (targetNs < 2 || targetNs > 36) {
        throw new RangeError('targetNs should be in range 2 - 36');
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
        throw new TypeError('PhoneNumber should be string');
    }
    let phoneRegex = /8-800-\d{3}-\d{2}-\d{2}/;

    return phoneRegex.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (!isString(text)) {
        throw new TypeError('Text should be string');
    }
    const smiles = text.match(/(\(-:|:-\))/g);
    if (smiles !== null) {
        return smiles.length;
    }

    return 0;
}

/**
 * Определяет победителя в игре 'Крестики-нолики'
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    let rowResult = checkAllRows(field);
    let columnResult = checkAllRows(matrixProblem(field));
    let firstDiagonalResult = checkDiagonals(field);

    if (rowResult !== null) {
        return rowResult;
    }
    if (columnResult !== null) {
        return columnResult;
    }
    if (firstDiagonalResult !== null) {
        return firstDiagonalResult;
    }

    return 'draw';
}

function checkDiagonals(field) {
    if (checkSideDiagonal(field) === true || checkMainDiagonal(field) === true) {
        return field[1][1];
    }

    return null;
}

function checkMainDiagonal(field) {
    let diagonalResult = true;
    for (let i = 0; i < field.length; ++i) {
        if (field[i][i] !== field[0][0]) {
            diagonalResult = false;
        }
    }

    return diagonalResult;
}

function checkSideDiagonal(field) {
    let diagonalResult = true;
    for (let i = 0; i < field.length; ++i) {
        if (field[field.length - 1 - i][i] !== field[field.length - 1][0]) {
            diagonalResult = false;
        }
    }

    return diagonalResult;
}
function checkRow(line) {
    let allEqual = true;
    for (let i = 1; i < line.length; ++i) {
        if (line[i] !== line[0]) {
            allEqual = false;
        }
    }

    return allEqual;
}

function checkAllRows(field) {
    for (let i = 0; i < field.length; ++i) {
        if (checkRow(field[i]) === true) {
            return field[i][0];
        }
    }

    return null;
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
