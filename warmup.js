'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {

    // Проверка входных данных на валидность
    if ( !( Number.isInteger(a) && Number.isInteger(b) ) ) {
        throw new TypeError();
    }

    return (a + b);
}

/**
 * Определяет век по году
 * @param {Number} year Год, целое положительное число
 * @throws {TypeError} Когда в качестве года передано не число
 * @throws {RangeError} Когда год – отрицательное значение
 * @returns {Number} Век, полученный из года
 */
function centuryByYearProblem(year) {

    // Проверка входных данных на валидность
    if (!Number.isInteger(year)) {
        throw new TypeError();
    }
    if (year <= 0) {
        throw new RangeError();
    }

    // Определение века
    const YEARS_IN_CENTURY = 100;
    return Math.trunc(year / YEARS_IN_CENTURY);
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {

    // Проверка входных данных на валидность
    if (typeof hexColor != 'string') {
        throw new TypeError();
    }

    const hexColorRegex = /^#([\dA-F]{2})([\dA-F]{2})([\dA-F]{2})$/;
    const match = hexColor.match(hexColorRegex);

    if (match === null) {
        throw new RangeError();
    }

    // Изоляция HEX-компонент
    const COLOR_COMPONENTS_AMOUNT = 3;
    const hexColorComponents = match.slice(1, COLOR_COMPONENTS_AMOUNT + 1);

    // Конвертация в RGB
    const HEX_BASE = 16;
    let decimalColorComponents = [];
    for (let i = 0; i < COLOR_COMPONENTS_AMOUNT; i++) {
        decimalColorComponents.push(parseInt(hexColorComponents[i], HEX_BASE));
    }

    return '(' + decimalColorComponents.join(', ') + ')';
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {

    // Проверка входных данных на валидность
    if (typeof n != 'number') {
        throw new TypeError();
    }
    if ( !( Number.isInteger(n) && (n > 0) ) ) {
        throw new RangeError();
    }

    let lastFibonacciNumbers = [ 1, 1 ]; // Последние вычисленные числа Фибоначчи

    // Нахождение n-го числа Фибоначчи
    for (let i = 3; i < n; i++) {
        const nextFibonacciNumber = lastFibonacciNumbers[0] + lastFibonacciNumbers[1];

        // Обновление массива последних чисел
        lastFibonacciNumbers.push(nextFibonacciNumber);
        lastFibonacciNumbers.shift();
    }

    return lastFibonacciNumbers[1];
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    // Ваше решение
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
    // Ваше решение
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    // Ваше решение
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    // Ваше решение
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    // Ваше решение
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
