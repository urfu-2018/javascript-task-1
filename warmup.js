'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (Number.isInteger(a) === false || Number.isInteger(b) === false) {
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
    if (Number.isInteger(year) === false) {
        throw new TypeError();
    }

    if (year < 0) {
        throw new RangeError();
    }

    const century = year / 100;

    return Math.ceil(century);
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
        throw new TypeError();
    }

    const reg = /^#[A-Fa-f\d]{6}$/;
    if (!reg.test(hexColor)) {
        throw new RangeError();
    }

    const red = parseInt(hexColor.substr(1, 2), 16);
    const green = parseInt(hexColor.substr(3, 2), 16);
    const blue = parseInt(hexColor.substr(5, 2), 16);

    return `(${red}, ${green}, ${blue})`;
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacci(n) {
    let a = 1;
    let b = 1;

    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }

    return b;
}

function fibonacciProblem(n) {
    if (Number.isInteger(n) === false) {
        throw new TypeError();
    }

    if (n <= 0) {
        throw new RangeError();
    }

    return fibonacci(n);
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (!Array.isArray(matrix)) {
        throw new TypeError();
    }

    for (let i = 0; i < matrix.length; i++) {
        if (!Array.isArray(matrix[i])) {
            throw new TypeError();
        }
    }

    return matrix[0].map(function (column, n) {
        return matrix.map(function (row, m) {
            return matrix[m][n];
        });
    });
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
    if (typeof(n) !== 'number' || Number.isInteger(targetNs) === false) {
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
    if (typeof(phoneNumber) !== 'string') {
        throw new TypeError();
    }

    const reg = /^8-800-\d{3}-\d{2}-\d{2}$/;

    return reg.test(phoneNumber);
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

    const reg = /\(-:|:-\)/g;
    const result = text.match(reg);

    if (result === null) {
        return 0;
    }

    return result.length;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function getWinner(field) {
    for (let i = 0; i < field.length; i ++) {
        if (field[i].every(elem => elem === 'x')) {
            return 'x';
        }
        if (field[i].every(elem => elem === 'o')) {
            return 'o';
        }
    }

    return 'draw';
}

function ticTacToeProblem(field) {
    if (field[0][0] === field[1][1] && field[0][0] === field[2][2]) {
        return field[0][0];
    }

    if (field[2][0] === field[1][1] && field[2][0] === field[0][2]) {
        return field[2][0];
    }

    let winner = getWinner(field);

    if (winner === 'draw') {
        winner = getWinner(matrixProblem(field));
    }

    return winner;
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
