'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (typeof(a) === 'number' && typeof(b) === 'number') {
        return a + b;
    }

    throw new TypeError();
}

/**
 * Определяет век по году
 * @param {Number} year Год, целое положительное число
 * @throws {TypeError} Когда в качестве года передано не целое число
 * @throws {RangeError} Когда год – отрицательное значение
 * @returns {Number} Век, полученный из года
 */
function centuryByYearProblem(year) {
    if (!(Number.isInteger(year))) {
        throw new TypeError();
    }
    if (year < 0) {
        throw new RangeError();
    }
    const str = String(year);
    const alienCentury = str.length - 2;
    const notCentury = Number(str.substring(alienCentury, str.length + 1));
    let century = Number(str.substring(0, str.length - 2));
    if (notCentury !== 0) {
        return century + 1;
    }

    return century;
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
    let hex = hexColor.substr(1, hexColor.length - 1);
    hex = hex.toLowerCase();
    for (let i = 0; i < hex.length; i++) {
        if (hex.length !== 6 || !(hex[i] <= 'f' && hex[i] >= 'a') &&
        !(hex[i] <= '9' && hex[i] >= '0')) {
            throw new RangeError();
        }
    }
    let hex1 = hex.substr(0, 2);
    let hex2 = hex.substr(2, 2);
    let hex3 = hex.substr(4, 2);
    hex1 = Number('0x' + hex1);
    hex2 = Number('0x' + hex2);
    hex3 = Number('0x' + hex3);

    return '(' + hex1 + ', ' + hex2 + ', ' + hex3 + ')';
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
        throw new TypeError();
    }
    if (n <= 0 || !Number.isInteger(n)) {
        throw new RangeError();
    }
    let fibFirst = 1;
    let fibSecond = 1;
    for (let i = 2; i < n; i++) {
        let fib = fibFirst + fibSecond;
        fibFirst = fibSecond;
        fibSecond = fib;
    }

    return fibSecond;
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
    const M = matrix.length;
    for (let i = 0; i < M; i++) {
        if (!Array.isArray(matrix[i])) {
            throw new TypeError();
        }
    }
    const N = matrix[0].length;
    const matrixT = [];
    for (let i = 0; i < N; i++) {
        matrixT.push([]);
        for (let j = 0; j < M; j++) {
            matrixT[i].push(matrix[j][i]);
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
    if (typeof(n) !== 'number' || typeof(targetNs) !== 'number') {
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
    phoneNumber = phoneNumber.match(/^8-800-\d{3}-\d{2}-\d{2}$/);
    if (phoneNumber === null) {
        return false;
    }

    return true;
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
    const search = text.match(/\(-:|:-\)/g);
    if (search === null) {
        throw new RangeError();
    }

    return search.length;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    for (let i = 0; i < 3; i++) {
        if (field[i][0] === field[i][1] && field[i][1] === field[i][2]) {
            return field[i][0];
        } else if (field[0][i] === field[1][i] && field[1][i] === field[2][i]) {
            return field[0][i];
        }
    }
    if ((field[0][0] === field[1][1] && field[1][1] === field[2][2]) ||
    (field[0][2] === field[1][1] && field[1][1] === field[2][0])) {
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
