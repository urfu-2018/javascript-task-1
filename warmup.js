'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    function checkNumber(x) {
        if (typeof x !== 'number' || !Number.isInteger(x)) {
            throw new TypeError();
        }
    }

    checkNumber(a);
    checkNumber(b);

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
        throw new TypeError('Year is not a number');
    }
    if (year < 0) {
        throw new RangeError('Year is negative');
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
    if (typeof hexColor !== 'string') {
        throw new TypeError();
    }
    if (!/^#[\dA-Fa-f]{6}$/.test(hexColor)) {
        throw new RangeError();
    }

    const getColorOrThrow = colorString => {
        const value = parseInt(colorString, 16);
        if (value > 255) {
            throw new RangeError();
        }

        return value;
    };

    const r = getColorOrThrow(hexColor.slice(1, 3));
    const g = getColorOrThrow(hexColor.slice(3, 5));
    const b = getColorOrThrow(hexColor.slice(5, 7));

    return `(${r}, ${g}, ${b})`;
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
    if (!Number.isInteger(n)) {
        throw new RangeError();
    }

    function getFibonacciNumber(position) {
        if (position < 2) {
            return position;
        }

        return getFibonacciNumber(position - 1) + getFibonacciNumber(position - 2);
    }

    return getFibonacciNumber(n);
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (!(matrix instanceof Array) || !(matrix[0] instanceof Array)) {
        throw new TypeError();
    }

    const resultingMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
        resultingMatrix.push([]);
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            resultingMatrix[j].push(matrix[i][j]);
        }
    }

    return resultingMatrix;
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
        throw new TypeError();
    }

    let count = 0;
    for (let i = 0; i < text.length - 2; i++) {
        const substring = text.slice(i, i + 3);
        if (substring === ':-)' || substring === '(-:') {
            count++;
        }
    }

    return count;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    for (let i = 0; i < field.length; i++) {
        const rowIsStrike = field[i][0] === field[i][1] && field[i][1] === field[i][2];
        const columnIsStrike = field[0][i] === field[1][i] && field[1][i] === field[2][i];
        if (rowIsStrike) {
            return field[i][0];
        }
        if (columnIsStrike) {
            return field[0][i];
        }
    }
    const diagonalOneIsStrike = field[0][0] === field[1][1] && field[1][1] === field[2][2];
    const diagonalTwoIsStrike = field[0][2] === field[1][1] && field[1][1] === field[2][0];
    if (diagonalOneIsStrike || diagonalTwoIsStrike) {
        return field[1][1];
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
