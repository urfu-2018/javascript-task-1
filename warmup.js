'use strict';

function isInteger(num) {
    return Number.isInteger(num) || !isNaN(parseInt(num)) && isFinite(num) && !(Number(num) % 1);
}

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    confirmNumberType(a);
    confirmNumberType(b);
    if (!isInteger(a) && !isInteger(b)) {
        throw new TypeError('Переданные параметры-числа не являются целыми числами');
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
    confirmNumberType(year);
    if (!isInteger(year)) {
        throw new TypeError('Параметр "year" не является целым числом');
    }
    if (Number(year) < 0) {
        throw new RangeError('Параметр "year" некорректен');
    }
    if (Number(year) % 100 !== 0) {
        return Math.trunc(Number(year) / 100) + 1;
    }

    return Math.trunc(Number(year) / 100);
}

function isValidRange(hexString) {
    const leftRange = parseInt('000000', 16);
    const rightRange = parseInt('FFFFFF', 16);
    const hexDecimal = parseInt(hexString, 16);

    return leftRange <= hexDecimal && hexDecimal <= rightRange;
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
    if (typeof (hexColor) !== 'string' || hexColor[0] !== '#' || hexColor.length !== 7) {
        throw new TypeError('Переданная строка не в формате "#HEX"');
    }
    if (!isValidRange(hexColor.slice(1))) {
        throw new RangeError('Значение цвета выходят за пределы допустимых');
    }
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);

    return `(${r}, ${g}, ${b})`;
}

function confirmNumberType(n) {
    if (typeof (n) !== 'number') {
        throw new TypeError(`Входной параметр n="${n}" не является целым числом`);
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
    confirmNumberType(n);
    if (!isInteger(n)) {
        throw new TypeError('Переданный к функции аргумент не является целым числом');
    }
    if (Number(n) <= 0) {
        throw new RangeError('Таких чисел Фибоначчи не существует');
    }
    if (Number(n) <= 2) {
        return 1;
    }
    var preprevious = 1;
    var previous = 1;
    var ans = 0;
    for (var i = 2; i < Number(n); i++) {
        ans = preprevious + previous;
        preprevious = previous;
        previous = ans;
    }

    return ans;
}

function squareMatrixCase(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < i; j++) {
            matrix[i][j] += matrix[j][i];
            matrix[j][i] = matrix[i][j] - matrix[j][i];
            matrix[i][j] -= matrix[j][i];
        }
    }

    return matrix;
}

function randomMatrixCase(matrix, rowsSum, colsSum) {
    const transposedMatrix = new Array(colsSum);
    for (let i = 0; i < colsSum; i++) {
        transposedMatrix[i] = new Array(rowsSum);
    }
    for (let i = 0; i < rowsSum; i++) {
        for (let j = 0; j < colsSum; j++) {
            transposedMatrix[j][i] = matrix[i][j];
        }
    }

    return transposedMatrix;
}

function checkMatrix(matrix) {
    if (matrix.length === 0 || !Array.isArray(matrix)) {
        throw new TypeError();
    }
    for (let i = 0; i < matrix.length; i++) {
        if (!Array.isArray(matrix[i]) || matrix[i].length !== matrix[0].length) {
            throw new TypeError();
        }
    }
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    checkMatrix(matrix);
    var rows = matrix.length;
    var columns = matrix[0].length;
    if (rows === columns) {
        return squareMatrixCase(matrix);
    }

    return randomMatrixCase(matrix, rows, columns);
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
    confirmNumberType(n);
    confirmNumberType(targetNs);

    /* if (!isInteger(n)) {
        throw new TypeError(`Параметр n="${n}" не является целым числом`);
    }
    if (!isInteger(targetNs)) {
        throw new TypeError(`Параметр targetNs="${targetNs}" не является целым числом`);
    }*/
    if (Number(targetNs) >= 2 && Number(targetNs) <= 36) {
        return n.toString(Number(targetNs));
    }
    throw new RangeError('Выбранное число для системы счисления не лежит в отрезке [2,36]');
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    if (typeof (phoneNumber) === 'string') {
        return phoneNumber.search(/^8-800-\d{3}-\d{2}-\d{2}$/) !== -1;
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
    if (typeof (text) !== 'string') {
        throw new TypeError('Переданный параметр не является строкой');
    }

    return text.match(/\(-:|:-\)/g).length;
}

function checkHorizontally(field, i) {
    if (field[i][0] === field[i][1] && field[i][1] === field[i][2]) {
        return field[i][0];
    }
}

function checkVertically(field, j) {
    if (field[0][j] === field[1][j] && field[1][j] === field[2][j]) {
        return field[0][j];
    }
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    if (field[0][0] === field[1][1] && field[1][1] === field[2][2]) {
        return field[0][0];
    }
    if (field[0][2] === field[1][1] && field[1][1] === field[2][0]) {
        return field[0][2];
    }
    let winner;
    for (let i = 0; i < 3; i++) {
        winner = checkVertically(field, i);
        winner = checkHorizontally(field, i);
        if (typeof (winner) !== 'undefined') {
            return winner;
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
