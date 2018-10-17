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
    if (isNaN(year)) {
        throw new TypeError('Year is not number');
    }
    if (year < 0) {
        throw new RangeError('Year should be positive');
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
        throw new TypeError('hexColor should be string');
    }
    let rgb = parseInt(hexColor.slice(1), 16);
    let answer = [];
    while (rgb > 0){
        answer.push(rgb % 256);
        rgb = Math.floor(rgb / 256);
    }

    return '(' + answer.reverse().join(', ') + ')';
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
        throw new TypeError('N is not number');
    }
    if (n < 0) {
        throw new RangeError('N should be positive');
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
    if (matrix[0][0] === null) {
        throw new TypeError('param should be (Any[])[]');
    }
    let transposedMatrix = ([]);
    for (let i = 0; i < matrix.length; ++i) {
        transposedMatrix.push([]);
        for (let j = 0; j < matrix[0].length; ++j) {
            transposedMatrix[i].push(matrix[j][i]);
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
    if (isNaN(n) && isNaN(targetNs)) {
        throw new TypeError('N and TargetNs should be number');
    }
    if (targetNs < 2 || targetNs > 36) {
        throw new RangeError('targetNs should be in range 2 - 36');
    }
    let result = [];
    while (n > 0) {
        result.push(n % targetNs);
        n = Math.floor(n / targetNs);
    }
    result.reverse();

    return result.join('');
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    let phoneRegex = /8-800-\d{3}-\d{2}-\d{2}/;
    if (phoneNumber.length === 15 && phoneNumber.match(phoneRegex) !== null) {
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
    if (typeof text !== 'string') {
        throw new TypeError('Text should be string');
    }
    let smileMatch = text.match(/:-\)/);
    let reverseSmileMatch = text.match(/\(-:/);
    let result = 0;
    if (smileMatch !== null) {
        result += smileMatch.length
    }
    if (reverseSmileMatch !== null) {
        result += reverseSmileMatch.length
    }

    return result;
}

/**
 * Определяет победителя в игре 'Крестики-нолики'
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    let rowResult = checkAllRowInTicTacToe(field);
    let columnResult = checkAllRowInTicTacToe(matrixProblem(field));
    let firstDiagonalResult = checkDiagonalsInTicTacToe(field);

    if (rowResult !== null) {
        return rowResult;
    }
    if (columnResult !== null) {
        return columnResult;
    }
    if (firstDiagonalResult !== null) {
        return firstDiagonalResult;
    }
    if (secondDiagonalResult !== null) {
        return secondDiagonalResult;
    }

    return 'draw';
}

function checkDiagonalsInTicTacToe(field) {
    let firstDiagonalResult = true;
    for (let i = 0; i < field.length; ++i) {
        if (field[i][i] !== field[0][0])
            firstDiagonalResult = false;
    }
    let secondDiagonalResult = true;
    for (let i = 0; i < field.length; ++i) {
        if (field[field.length-1-i][i] !== field[field.length-1][0])
            secondDiagonalResult = false;
    }
    if (secondDiagonalResult === true || firstDiagonalResult === true){
        return field[1][1];
    }
    return null;
}

function checkRowInTicTacToe(line) {
    let allEqual = true;
    for (let i = 1; i < line.length; ++i){
        if (line[i] !== line[0])
            allEqual = false;
    }
    return allEqual;
}

function checkAllRowInTicTacToe(field) {
    for (let i = 0; i < field.length; ++i) {
        if (checkRowInTicTacToe(field[i]) === true) {
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
