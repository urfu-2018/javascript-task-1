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
    const argumentsError = new TypeError();
    argumentsError.message = 'в аргументы переданы не числа';
    throw argumentsError;
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
        if (year <= 0) {
            throw new RangeError('год – отрицательное значение');
        }

        return Math.ceil(year / 100);
    }
    throw new TypeError('в качестве года передано не число');
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
    const HEXRegex = /^#([A-Fa-f\d]{2})([A-Fa-f\d]{2})([A-Fa-f\d]{2})$/i;
    if (typeof hexColor !== 'string') {
        throw new TypeError('цвет передан не строкой');
    }
    if (!HEXRegex.test(hexColor) || hexColor.length !== 7) {
        throw new RangeError('значения цвета выходят за пределы допустимых');
    }

    return hexColor.replace(HEXRegex, (m, r, g, b) => {
        return '(' + parseInt(r, 16) + ', ' + parseInt(g, 16) + ', ' + parseInt(b, 16) + ')';
    });
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
        throw new TypeError('не число');
    }
    if (!Number.isInteger(n)) {
        throw new RangeError('передано не число');
    }
    if (n < 1 || Math.floor(n) !== n) {
        throw new RangeError('n-отрицательное число');
    }
    let a = 0;
    let b = 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result = a + b;
        a = b;
        b = result;
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
    if (Array.isArray(matrix) && Array.isArray(matrix[0])) {
        return matrix[0].map((number, indexColumn) => matrix.map((line) => line[indexColumn]));
    }
    throw new TypeError('в функцию передаётся не двумерный массив');
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
    if (typeof n !== 'number' || typeof(targetNs) !== 'number' || !Number.isInteger(targetNs)) {
        throw new TypeError('аргументы некорректного типа');
    }
    if (targetNs < 2 || targetNs > 36) {
        throw new RangeError('система счисления выходит за пределы значений [2, 36]');
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
        throw new TypeError('аргумент не строка');
    }
    const phoneReg = /8[–-]800[–-][0-9]{3}[–-][0-9]{2}[–-][0-9]{2}/;

    return phoneNumber.length === 15 && phoneReg.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (typeof text !== 'string') {
        throw new TypeError('аргумент не строка');
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
    let diagonal = '';
    let answer = '';
    let invertedDiagonal = '';
    for (let i = 0; i < field.length; i++) {
        const row = field[i][0] + field[i][1] + field[i][2] + ' ';
        const col = field[0][i] + field[1][i] + field[2][i] + ' ';
        diagonal += field[i][i];
        invertedDiagonal += field[i][field.length - (i + 1)];
        answer += row + col;
    }
    answer += ' ' + diagonal + ' ' + invertedDiagonal;
    if (answer.indexOf('xxx') !== -1) {
        return 'x';
    }
    if (answer.indexOf('ooo') !== -1) {
        return 'o';
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
