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
        throw new TypeError('Аргументы должны быть целыми');
    }

    return parseInt(a) + parseInt(b);
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

    return Math.floor((year - 1) / 100) + 1;
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
    if (typeof (hexColor) !== 'string') {
        throw new TypeError();
    }
    if (hexColor.length !== 7) {
        throw new RangeError();
    }
    var first = parseInt(hexColor.slice(1, 3), 16);
    var second = parseInt(hexColor.slice(3, 5), 16);
    var thirth = parseInt(hexColor.slice(5, 7), 16);

    return `(${first}, ${second}, ${thirth})`;
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
        throw new TypeError('n is not a number');
    }
    if (n <= 0) {
        throw new RangeError('n must be greater than zero');
    }
    if (n === 1 || n === 2) {
        return 1;
    }
    var fib1 = 1;
    var fib2 = 1;
    for (var i = 3; i <= n; i++) {
        var current = fib1 + fib2;
        fib1 = fib2;
        fib2 = current;
    }

    return fib2;
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    var result = [];
    if (matrix.length === 0) {
        return [];
    }
    for (var i = 0; i < matrix[0].length; ++i) {
        var currentLine = [];
        for (var j = 0; j < matrix.length; ++j) {
            currentLine.push(matrix[j][i]);
        }
        result.push(currentLine);
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
    if (!Number.isInteger(n) || !Number.isInteger(targetNs)) {
        throw new TypeError('Переданные аргументы некорректного типа');
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
    if (typeof(phoneNumber) !== 'string') {
        throw new TypeError();
    }

    var re = /^8-800-(\d\d\d)-(\d\d)-(\d\d)$/g;

    return re.test(phoneNumber);
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

    return (text.match(/:-\)/g) || []).length + (text.match(/\(-:/g) || []).length;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    var AllWinningLines = [
        field[0],
        field[1],
        field[2],
        [field[0][0], field[0][1], field[0][2]],
        [field[1][0], field[1][1], field[1][2]],
        [field[2][0], field[2][1], field[2][2]],
        [field[0][0], field[1][1], field[2][2]],
        [field[0][2], field[1][1], field[2][0]]
    ];

    for (var i = 0; i < AllWinningLines.length; i++) {
        var current = AllWinningLines[i];
        if (getWinner(current) !== undefined) {
            return getWinner(current);
        }
    }

    return 'draw';
}

function getWinner(list) {
    var set = new Set(list);
    if (set.size === 1) {
        return set.values().next().value;
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
