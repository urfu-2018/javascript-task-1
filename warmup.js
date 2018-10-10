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
        throw new TypeError('В аргументы переданы не числа');
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
        throw new TypeError('В качестве года передано не число');
    }
    if (year < 0 || !Number.isInteger(year)) {
        throw new RangeError('Год – отрицательное значение');
    }

    return Math.trunc(year / 100) + 1;
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
    if (!/^#[A-Fa-f0-9]{6}$/.test(hexColor)) {
        throw new RangeError('Значения цвета выходят за пределы допустимых');
    }
    const colors = [];
    for (let i = 0; i < 3; i++) {
        colors.push(parseInt(hexColor.slice(2 * i + 1, 2 * i + 3), 16));
    }

    return '(' + colors.join(', ') + ')';
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
        throw new TypeError('В качестве года передано не число');
    }
    if (n <= 0 || !Number.isInteger(n)) {
        throw new RangeError('Положение в ряде не является целым положительным числом');
    }
    let [a, b] = [1, 1];
    for (let i = 0; i < n - 2; i++) {
        [a, b] = [b, a + b];
    }

    return b;
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    const errorText = 'В функцию передаётся не двумерный массив';
    if (matrix.constructor !== Array || matrix.length === 0) {
        throw new TypeError(errorText);
    }
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i].constructor !== Array || matrix[i].length !== matrix[0].length) {
            throw new TypeError(errorText);
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
    if (!Number.isInteger(n) || !Number.isInteger(targetNs)) {
        throw new TypeError('Переданы аргументы некорректного типа');
    }
    if (targetNs < 2 || targetNs > 36) {
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
    if (typeof phoneNumber !== 'string') {
        throw new TypeError('Не строка');
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
    if (typeof text !== 'string') {
        throw new TypeError('В качестве аргумента передаётся не строка');
    }

    return text.split(':-)').length + text.split('(-:').length - 2;
}

function getTacToeWinner(row) {
    if (row[0] === row[1] && row[1] === row[2]) {
        return row[0] === 'x' ? 1 : 2;
    }

    return 0;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    let result = [0, 0, 0];
    result[getTacToeWinner([field[0][0], field[1][1], field[2][2]])]++;
    result[getTacToeWinner([field[2][0], field[1][1], field[0][2]])]++;
    for (let i = 0; i < 3; i++) {
        result[getTacToeWinner([field[i][0], field[i][1], field[i][2]])]++;
        result[getTacToeWinner([field[0][i], field[1][i], field[2][i]])]++;
    }
    if ((result[1] === 0 && result[2] === 0) || (result[1] > 0 && result[2] > 0)) {
        return 'draw';
    }

    return result[1] ? 'x' : 'o';
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
