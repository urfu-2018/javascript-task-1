'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    let aIsNumber = isNumber(a);
    let bIsNumber = isNumber(b);
    if (!aIsNumber || !bIsNumber) {
        throw new TypeError();
    }

    return Number(a) + Number(b);
}

function isNumber(value) {
    return typeof (value) === 'number';
}

/**
 * Определяет век по году
 * @param {Number} year Год, целое положительное число
 * @throws {TypeError} Когда в качестве года передано не число
 * @throws {RangeError} Когда год – отрицательное значение
 * @returns {Number} Век, полученный из года
 */
function centuryByYearProblem(year) {
    let yearIsNumber = isNumber(year);
    if (!yearIsNumber) {
        throw new TypeError();
    }
    if (Number(year) < 0) {
        throw new RangeError();
    }

    return Math.floor(Number(year) / 100) + 1;
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
    if (hexColor.length !== 7 || !/#[0-9a-fA-F]{6}/.test(hexColor)) {
        throw new RangeError();
    }
    let res = [hexColor.slice(1, 3), hexColor.slice(3, 5), hexColor.slice(5, 7)].map(function (i) {
        return parseInt(i, 16);
    });

    return '(' + res[0] + ', ' + res[1] + ', ' + res[2] + ')';
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
    if (!Number.isInteger(n) || n < 1) {
        throw new RangeError();
    }
    let a = 1;
    let b = 1;
    for (var i = 1; i < n; i++) {
        const temp = a + b;
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
    let reducer = (acc, value) => acc && Array.isArray(value);
    const isMatrix = matrix.reduce(reducer, true);
    if (!isMatrix) {
        throw new TypeError();
    }
    let matrixT = [];
    const M = matrix.length;
    const N = matrix[0].length;
    for (var j = 0; j < N; j++) {
        matrixT[j] = [];
        for (var i = 0; i < M; i++) {
            matrixT[j][i] = matrix[i][j];
        }
    }

    return matrixT;
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
    if (!isNumber(n) || !Number.isInteger(targetNs)) {
        throw new TypeError();
    }
    if (Number(targetNs) < 2 || Number(targetNs) > 36) {
        throw new RangeError();
    }

    return n.toString(Number(targetNs));
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    const myreg = /8-800-\d{3}-\d{2}-\d{2}/;

    return myreg.test(phoneNumber);
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
    const smileReg = /(:-\)|\(-:)/g;
    const regex = text.match(smileReg);

    return regex === null ? 0 : regex.length;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    const winCombos = [
        field[0],
        field[1],
        field[2],
        [field[0][0], field[1][0], field[2][0]],
        [field[0][1], field[1][1], field[2][1]],
        [field[0][2], field[1][2], field[2][2]],
        [field[0][0], field[1][1], field[2][2]],
        [field[2][0], field[1][1], field[0][2]]
    ];

    for (var i = 0; i < 3; i++) {
        let hasWinner = winCombos[i][0] === winCombos[i][1] && winCombos[i][1] === winCombos[i][2];
        if (hasWinner) {
            return winCombos[i][0];
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
