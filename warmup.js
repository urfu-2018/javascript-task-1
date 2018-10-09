/* eslint-disable */
'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    let sum;
    try {
        sum = parseInt(a) + parseInt(b);
    } catch (error) {
        throw error('Could not parse numbers.');
    }

    return sum;
}

/**
 * Определяет век по году
 * @param {Number} year Год, целое положительное число
 * @throws {TypeError} Когда в качестве года передано не число
 * @throws {RangeError} Когда год – отрицательное значение
 * @returns {Number} Век, полученный из года
 */
function centuryByYearProblem(year) {
    if (year < 0) {
        throw RangeError('Negative year given.');
    }
    let age;
    try {
        age = parseInt(year) % 100 + 1;
    } catch (error) {
        throw error('Not a number.');
    }

    return age;
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
        throw TypeError('Passed argument is not a string');
    }
    if (hexColor[0] !== '#') {
        throw TypeError('Expected # at start of the argument.');
    }
    const acceptableSymbols = /[0-F]/g;
    for (let i = 1; i < 7; i++) {
        if (!hexColor[i].match(acceptableSymbols)) {
            throw RangeError('Unacceptable values.');
        }
    }

    const hexColorsSeparate = hexColor.match(/.{1,3}/g);
    let rgbColorsSep = [];
    for (let i = 0; i < 2; i++) {
        rgbColorsSep.push(parseInt(hexColorsSeparate[i], 16));
    }

    return '(' + rgbColorsSep[0] + ', ' + rgbColorsSep[1] + ', ' + rgbColorsSep[2] + ')';
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
        throw TypeError('Wrong argument type, expected number.');
    }
    if (n < 0) {
        throw RangeError('Wrong argument, expected positive value.');
    }

    const phi = 1.61803398875;

    return Math.round(Math.pow(phi, n) / Math.sqrt(5)); // Binet's formula.
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (typeof matrix !== 'object') {
        throw TypeError('Wrong argument type, expected 2D array.');
    }

    const M = matrix.length;
    const N = matrix[0].length;
    for (let i = 1; i < M; i++) {
        if (matrix[i].length !== N) {
            throw TypeError('Wrong argument type, expected 2D array.');
        }
    }

    return matrix.map((col, i) => matrix.map(row => row[i]));
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
        throw TypeError('Wrong argument(s) type, expected number.');
    }

    if (n < 2 || n > 36) {
        throw RangeError('Wrong base, expected base in range [2, 36].');
    }

    return n.toString(targetNs);
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    return phoneNumber.match(/8-800-[0-9]{3}-[0-9]{2}-[0-9]{2}/g).length > 0;
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (typeof text !== 'string') {
        throw TypeError('Wrong argument type, expected string');
    }

    return text.match(/(:-\)|\(-:)/g).length > 0;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    const fieldInline = field[0].concat(field[1], field[2]);
    const magicSquare = [4, 3, 8, 9, 5, 1, 2, 7, 6];

    for (let i = 0; i < 7; i++) {
        for (let j = 1; j < 8; j++) {
            for (let k = 2; k < 9; k++) {
                if (i !== j && j !== k && i !== k) {
                    if (fieldInline[i] === fieldInline[j] && fieldInline[j] === fieldInline[k]) {
                        if (magicSquare[i] + magicSquare[j] + magicSquare[k] === 15) {
                            return fieldInline[i];
                        }
                    }
                }
            }
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
