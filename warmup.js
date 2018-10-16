'use strict';

/**
 * Проверяет является ли аргумент числом
 * @param Нет требований к аргументу
 * @returns {Boolean} Если является числом, то true, а иначе false
 */
function isNumber(something) {
    return typeof something === 'number';
}

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
 function abProblem(a, b) {
    if(!isNumber(a)){
        throw new TypeError('First argument is not a number');
    }
    if(!isNumber(b)) {
        throw new TypeError('Second argument is not a number');
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
    if(!isNumber(year)) {
        throw new TypeError('Argument is not a number');
    }
    if(year < 0) {
        throw new RangeError('Argument is negative')
    }
    const YEARS_IN_CENTURY = 100;
    return Math
        .floor(year / YEARS_IN_CENTURY) //GetindexCenturyByYear
        + 1; //GetnumberCenturyByYear
}

/**
  * определяет является ли аргумент строкой
  * @param Нет требований к аргументу
  * @returns {Boolean} Если является строкой, то true, а иначе false
  */
 function isString(something) {
    return typeof something === 'string';
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
 function colorsProblem(hexColor) {
    if(!isString(hexColor)) {
        throw new TypeError('Color in Format HEX don\'t gives as a string');
    }
    const COLOR_RANGE_ERROR = new RangeError('Value of color is incorrect');
    if(hexColor.length !== 7 || hexColor[0] !== '#') {
        throw COLOR_RANGE_ERROR;
    }
    const {
        BASE_HEX,
        IsHexadimal,
        GetNUmberBySymbal
    } = require('./Hex');
    for(let i = 1; i < hexColor.length; i++) {
        if(!IsHexadimal(hexColor[i])) {
            throw COLOR_RANGE_ERROR;
        }
    }
    let RGBColorString = '(';
    const BASE_HEX = 16;
    let i = 1
    while(true) {
        RGBColorString += (GetNUmberBySymbal(hexColor[i]) * BASE_HEX 
            + GetNUmberBySymbal(hexColor[i+1])).toString(); 

        if(i >= hexColor.length) {
            break;
        }
        RGBColorString += ', ';
    }
    return RGBColorString;
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    // Ваше решение
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
