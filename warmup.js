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
    if (typeof year !== 'number') {
        throw new TypeError();
    }

    if (year < 0) {
        throw new RangeError();
    }

    return Math.floor(year / 100) + Math.ceil((year % 100) / 100);
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

    if (!/#[0-9a-fA-F]{6}/.test(hexColor)) {
        throw new RangeError();
    }

    const hexColorNumbers = hexColor.slice(1);
    const rgbColor = [];

    for (let index = 0; index < 5; index += 2) {
        rgbColor.push(
            parseInt(
                hexColorNumbers[index] + hexColorNumbers[index + 1],
                16
            ).toString(10)
        );
    }

    return `(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]})`;
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
        throw new TypeError();
    }

    if (n % 1 !== 0 || n <= 0) {
        throw new RangeError();
    }

    let result = 1;

    if (n > 2) {
        let lastValue = 1;
        let secondLastValue = 1;
        result = 0;

        for (let index = 2; index < n; index++) {
            result = lastValue + secondLastValue;
            secondLastValue = lastValue;
            lastValue = result;
        }
    }

    return result;
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (matrix.every(element => Array.isArray(element) !== true)) {
        throw new TypeError();
    }

    return matrix[0].map((x, i) => matrix.map(y => y[i]));
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
    if (typeof n !== 'number' || typeof targetNs !== 'number') {
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
    if (typeof phoneNumber !== 'string') {
        throw new TypeError();
    }

    return /^8-800-[\d]{3}-[\d]{2}-[\d]{2}$/.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (typeof text !== 'string') {
        throw new TypeError();
    }

    const result = text.match(/(\(-:)|(:-\))/g);

    return result ? result.length : 0;
}


/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
const winnerXCombinations = [
    /xxx[xo]{6}/,
    /x[xo]{2}x[xo]{2}x[xo]{2}/,
    /[xo]x[xo]{2}x[xo]{2}x[xo]/,
    /[xo]{2}x[xo]{2}x[xo]{2}x/,
    /[xo]{6}xxx/,
    /x[xo]{3}x[xo]{3}x/,
    /[xo]{2}x[xo]x[xo]x[xo]{2}/
];
const winnerOCombinations = [
    /ooo[xo]{6}/,
    /o[xo]{2}o[xo]{2}o[xo]{2}/,
    /[xo]o[xo]{2}o[xo]{2}o[xo]/,
    /[xo]{2}o[xo]{2}o[xo]{2}o/,
    /[xo]{6}ooo/,
    /o[xo]{3}o[xo]{3}o/,
    /[xo]{2}o[xo]o[xo]o[xo]{2}/
];
function ticTacToeProblem(field) {
    const fieldStrLine = [];
    for (let index = 0; index < field.length; index++) {
        fieldStrLine.push(field[index].join(''));
    }

    const strField = fieldStrLine.join('');
    let winner = 'nobody';

    const xIsWinner = winnerXCombinations.some(e => e.test(strField));
    const oIsWinner = winnerOCombinations.some(e => e.test(strField));
    if (xIsWinner) {
        winner = 'x';
    }

    if (oIsWinner) {
        winner = 'o';
    }

    if (xIsWinner && oIsWinner) {
        winner = 'draw';
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
