'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (typeof (a) === 'number' && typeof (b) === 'number' &&
    Number.isInteger(a) && Number.isInteger(b)) {
        return a + b;
    }
    throw new TypeError('a and b must be Number');
}

/**
 * Определяет век по году
 * @param {Number} year Год, целое положительное число
 * @throws {TypeError} Когда в качестве года передано не число
 * @throws {RangeError} Когда год – отрицательное значение
 * @returns {Number} Век, полученный из года
 */
function centuryByYearProblem(year) {
    if (typeof(year) === 'number' && Number.isInteger(year) && Math.floor(year) === year) {
        if (year < 0) {
            throw new RangeError('year must be positive');
        }

        return Math.ceil(year / 100);
    }
    throw new TypeError('year must be Number');
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
        throw new TypeError('hexColor must be string');
    }
    if (hexColor.length !== 7) {
        throw new RangeError('Incorrect params');
    }
    const hexChar = hexColor.substr(1).split('');
    const r = parseInt(hexChar[0] + hexChar[1], 16);
    const g = parseInt(hexChar[2] + hexChar[3], 16);
    const b = parseInt(hexChar[4] + hexChar[5], 16);

    return '(' + r + ', ' + g + ', ' + b + ')';
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    if (typeof(n) !== 'number') {
        throw new TypeError('n is not Number');
    }
    if (!Number.isInteger(n)) {
        throw new RangeError('n is not Number');
    }
    if (n < 1 || Math.floor(n) !== n) {
        throw new RangeError('n must be positive');
    }
    if (n < 3) {
        return 1;
    }

    return fibonacciProblem(n - 1) + fibonacciProblem(n - 2);
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (!Array.isArray(matrix)) {
        throw new TypeError('Incorrect params');
    }
    if (matrix.length === 0) {
        return [[]];
    }
    for (let i = 0; i < matrix.length; i++) {
        if (!Array.isArray(matrix[i]) || matrix[i].length !== matrix[0].length) {
            throw new TypeError('Incorrect params');
        }
    }

    return matrix[0].map((column, index) => matrix.map(row => row[index]));
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
        throw new TypeError('Incorrect params');
    }
    if (targetNs < 2 || targetNs > 36) {
        throw new RangeError('targetNs must be beetween 2 and 36');
    }

    return n.toString(targetNs);
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    return /^8-800-\d{3}-\d{2}-\d{2}$/g.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (typeof text !== 'string') {
        throw new TypeError('text must be string');
    }

    return (text.match(/\(-:/g) || []).length + (text.match(/:-\)/g) || []).length;
}

/**
 * Определяет победителя в игре 'Крестики-нолики'
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    let win = checkRows(field);
    if (win) {
        return win;
    }

    win = checkRows(matrixProblem(field));
    if (win) {
        return win;
    }

    if ((field[0][0] === field[1][1] && field[1][1] === field[2][2]) ||
     (field[2][0] === field[1][1] && field[1][1] === field[0][2])) {
        return field[1][1];
    }

    return 'draw';
}

function checkRows(field) {
    for (let i = 0; i < 3; i++) {
        if (field[i][0] === field[i][1] && field[i][1] === field[i][2]) {
            return field[i][0];
        }
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
