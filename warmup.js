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
    throw TypeError;
}

/**
 * Определяет век по году
 * @param {Number} year Год, целое положительное число
 * @throws {TypeError} Когда в качестве года передано не число
 * @throws {RangeError} Когда год – отрицательное значение
 * @returns {Number} Век, полученный из года
 */
function centuryByYearProblem(year) {
    if (typeof(year) !== 'number') {
        throw TypeError;
    }
    if (year < 0) {
        throw RangeError;
    } else if (typeof(year) === 'number') {
        return Math.floor(year / 100) + 1;
    }
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
    if (typeof(hexColor) !== 'string' || hexColor[0] !== '#') {
        throw TypeError;
    }
    let redColor = parseInt(hexColor.substr(1, 2), 16);
    let greeenColor = parseInt(hexColor.substr(3, 2), 16);
    let blueColor = parseInt(hexColor.substr(5, 2), 16);
    if (redColor < 256 && greeenColor < 256 && blueColor < 256) {
        return '(' + redColor + ', ' + greeenColor + ', ' + blueColor + ')';
    }
    throw RangeError;
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    if (n % 1 !== 0 && n < 0) {
        throw RangeError;
    } else if (typeof(n) !== 'number') {
        throw TypeError;
    }
    let firstAddend = 0;
    let secondAddend = 1;
    let auxiliaryNumber;
    if (n > 0) {
        for (let i = 1; i < n; i++) {
            auxiliaryNumber = firstAddend + secondAddend;
            firstAddend = secondAddend;
            secondAddend = auxiliaryNumber;
        }

        return secondAddend;
    }

    return 0;
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (!Array.isArray(matrix) || !matrix.every(Array.isArray)) {
        throw TypeError;
    }
    let lengthMatrix = matrix.length;
    let newMatrix = [];
    for (let i = 0; i < lengthMatrix; i++) {
        let arr = [];
        for (let j = 0; j < matrix[0].length; j++) {
            arr.push(matrix[j][i]);
        }
        newMatrix.push(arr);
    }

    return newMatrix;
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
    if (typeof(n) !== 'number' && typeof(targetNs) !== 'number') {
        throw TypeError;
    }
    if (targetNs >= 2 && targetNs <= 36) {
        return n.toString(targetNs);
    }
    throw RangeError;
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    phoneNumber = phoneNumber.replace(/-/g, '');

    return phoneNumber.length === 11 && phoneNumber.substr(0, 4) === '8800' &&
    !isNaN(phoneNumber.substr(4));
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (typeof(text) !== 'string') {
        throw TypeError;
    }

    return text.split(/\(-:|:-\)/).length - 1;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    if ((field[0][0] === field[1][1] && field[2][2] === field[1][1]) ||
    (field[0][2] === field[1][1] && field[1][1] === field[2][0])) {
        return field[1][1];
    }
    for (let i = 0; i < field.length; i++) {
        if ((field[i][0] === field[i][1] && field[i][2] === field[i][1] && field[i][0] !== '') ||
        (field[0][i] === field[1][i] && field[2][i] === field[0][i] && field[0][i] !== '')) {
            return field[i][i];
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
