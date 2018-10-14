'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (typeof b !== 'number' || typeof a !== 'number' ||
        !Number.isInteger(a) || !Number.isInteger(b)) {
        throw new TypeError('Ошбика типа!');
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
        throw new TypeError('Ошбика типа!');
    }
    if (year < 0 || !Number.isInteger(year)) {
        throw new RangeError('Ошибка размерности!');
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
        throw new TypeError('Ошбика типа!');
    }
    if (!(/^#[0-9a-fA-F]{6}$/.test(hexColor))) {
        throw new RangeError('Ошибка размерности!');
    }
    const first = parseInt(hexColor.slice(1, 3), 16);
    const second = parseInt(hexColor.slice(3, 5), 16);
    const third = parseInt(hexColor.slice(5, 7), 16);

    return `(${first}, ${second}, ${third})`;

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
        throw new TypeError('Ошбика типа!');
    }
    if (n <= 0 || !Number.isInteger(n)) {
        throw new RangeError('Ошибка размерности!');
    }
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
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
    if (matrix.length === 0 || !Array.isArray(matrix) ||
        !Array.isArray(matrix[0])) {
        throw new TypeError('Ошбика типа!');
    }
    const matrixTrans = [];
    for (let i = 0; i < matrix[0].length; i++) {
        matrixTrans[i] = [];
        for (let j = 0; j < matrix.length; j++) {
            matrixTrans[i][j] = matrix[j][i];
        }
    }

    return matrixTrans;

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
    if (typeof n !== 'number' || typeof targetNs !== 'number' ||
        !Number.isInteger(targetNs)) {
        throw new TypeError('Ошбика типа!');
    }
    if (targetNs < 2 || targetNs > 36) {
        throw new RangeError('Ошибка размерности!');
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
        throw new TypeError('Ошибка типа!');
    }

    return /^8-800-[0-9]{3}(-[0-9]{2}){2}$/.test(phoneNumber);
}


/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (typeof text !== 'string') {
        throw new TypeError('Ошбика типа!');
    }
    let right = text.match(/\(-:/g);
    let left = text.match(/:-\)/g);
    const leftL = left === null ? 0 : left.length;
    const rightL = right === null ? 0 : right.length;

    return rightL + leftL;

}


/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    for (let i = 0; i < 3; i++) {
        if (field[i][0] === field[i][1] && field[i][2] === field[i][1]) {
            return field[i][0];
        }
        if (field[0][i] === field[1][i] && field[2][i] === field[1][i]) {
            return field[0][i];
        }
    }

    if (field[1][1] === field[0][0] && field[2][2] === field[1][1]) {
        return field[0][0];
    }
    if (field[1][1] === field[0][2] && field[2][0] === field[1][1]) {
        return field[0][2];
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
