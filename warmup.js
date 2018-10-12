'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (!(typeof a === 'number') && !(typeof b === 'number')) {
        throw TypeError;
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
    if (!(typeof year === 'number')) {
        throw TypeError;
    }
    if (year < 0) {
        throw RangeError;
    }

    let century = Math.trunc(year / 100);
    if (year % 100 === 0) {
        return century;
    }

    return century + 1;
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */

function colorsProblem(hexColor) {
    if (!(typeof hexColor === 'string')) {
        throw TypeError;
    }
    let result = [];
    result[0] = parseInt(hexColor.slice(1, 3), 16);
    result[1] = parseInt(hexColor.slice(3, 5), 16);
    result[2] = parseInt(hexColor.slice(5, 7), 16);

    return '(' + result[0] + ', ' + result[1] + ', ' + result[2] + ')';
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    if (!(typeof n === 'number')) {
        throw TypeError;
    }
    if (!((n > 0) && (Math.trunc(n) === n))) {
        throw RangeError;
    }
    let fib1 = 1;
    let fib2 = 1;
    let fibSum = 1;
    let i = 2;
    while (i < n) {
        fibSum = fib2 + fib1;
        fib1 = fib2;
        fib2 = fibSum;
        i += 1;
    }

    return (fibSum);

}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (!(Array.isArray(matrix) && Array.isArray(matrix[0]))) {
        throw TypeError;
    }
    let result = [];
    for (let i = 0; i < matrix[0].length; i++) {
        result[i] = [];
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            result[j][i] = matrix[i][j];
        }
    }

    return result;
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
    if (!(typeof n === 'number') && !(typeof targetNs === 'number')) {
        throw TypeError;
    }
    if (!(targetNs >= 2 <= 36)) {
        throw RangeError;
    }
    let result = [];
    let counter = 0;
    let next = n;
    while (next >= targetNs) {
        result[counter] = next % targetNs;
        next = Math.trunc(next / targetNs);
        counter += 1;
    }
    result[counter] = next;

    return result.reverse().join('');
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    return /8-800-\d{3}-\d{2}-\d{2}/.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (!(typeof text === 'string')) {
        throw TypeError;
    }

    let matchLeftSmile = text.match(/:-\)/g);
    let matchRightSmile = text.match(/\(-:/g);
    let result = 0;
    if (!(matchRightSmile === null)) {
        result += matchRightSmile.length;
    }
    if (!(matchLeftSmile === null)) {
        result += matchLeftSmile.length;
    }

    return result;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    let lines = [];
    let columns = [];
    getLinesAndColumns(field, lines, columns);
    let diagonals = getDiagonals(field);
    let result = checkForWinner(lines, columns, diagonals);
    for (let element in result) {
        if (element) {
            return 'x';
        }

        return 'o';
    }

    return 'draw';
}

function getLinesAndColumns(field, lines, columns) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            lines.push(field[i][j] === 'x');
            columns.push(field[j][i] === 'x');
        }
    }
}

function getDiagonals(field) {
    let diagonals = [];
    for (let i = 0; i < 3; i++) {
        diagonals.push(field[i][i] === 'x');
    }
    for (let i = 0, j = 3; i < 3 && j > 0; i++, j--) {
        diagonals.push(field[i][j] === 'x');
    }

    return diagonals;
}

function checkForWinner(lines, columns, diagonals) {
    let result = [];
    for (let i = 0; i < lines.length; i += 3) {
        if (lines[i] + lines[i + 1] + lines[i + 2] === 3) {
            result.push(lines[i]);
        } else if (columns[i] + columns[i + 1] + columns[i + 2] === 3) {
            result.push(columns[i]);
        }
    }
    for (let i = 0; i < diagonals.length; i += 3) {
        if (diagonals[i] + diagonals[i + 1] + diagonals[i + 2] === 3) {
            result.push(diagonals[i]);
        }
    }

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
