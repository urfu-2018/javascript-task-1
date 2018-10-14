'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    // Ваше решение
    if (typeof a === 'number' && typeof b === 'number') {

        return a + b;
    }
    throw new TypeError();
}

/**
 * Определяет век по году
 * @param {Number} year Год, целое положительное число
 * @throws {TypeError} Когда в качестве года передано не число
 * @throws {RangeError} Когда год – отрицательное значение
 * @returns {Number} Век, полученный из года
 */
function centuryByYearProblem(year) {
    // Ваше решение
    if (typeof year === 'number' && year >= 0) {

        return Math.ceil(year / 100);
    } else if (typeof year === 'number' && year < 0) {
        throw new RangeError();
    } else {
        throw new TypeError();
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
    // Ваше решение
    if (typeof hexColor !== 'string') {
        throw new TypeError();
    }
    if (!/#[0-9a-fA-F]{6}/.test(hexColor)) {
        throw new RangeError();
    }

    hexColor = hexColor.substring(1);
    const number = parseInt(hexColor, 16);
    const b = number % 256;
    const g = ((number - b) / 256) % 256;
    const r = ((number - b - g * 256) / 256 / 256) % 256;

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
    // Ваше решение
    if (typeof n === 'number' && n % 1 === 0 && n > 0) {
        let a = 1;
        let b = 1;
        for (let i = 3; i <= n; i++) {
            const currentNumber = a + b;
            a = b;
            b = currentNumber;
        }

        return b;
    } else if (typeof n === 'number' && (n % 1 !== 0 && n <= 0)) {
        throw new RangeError();
    } else {
        throw new TypeError();
    }
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    // Ваше решение
    let isNotMatrix = false;

    for (let j = 0; j < matrix.length; j++) {
        if (!Array.isArray(matrix[j])) {
            isNotMatrix = true;
        }
    }

    if (isNotMatrix) {
        throw new TypeError();
    }

    let matrixT = [];

    for (let i = 0; i < matrix.length; i++) {
        matrixT[i] = [];
        for (let j = 0; j < matrix[i].length; j++) {
            matrixT[i][j] = matrix[j][i];
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
    // Ваше решение
    if (typeof n === 'number' && typeof targetNs === 'number' && targetNs >= 2 && targetNs <= 36) {

        return n.toString(targetNs);
    } else if (typeof n === 'number' && typeof targetNs === 'number' &&
        (targetNs < 2 || targetNs > 36)) {
        throw new RangeError();
    } else {
        throw new TypeError();
    }
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    // Ваше решение
    return /^8-800-\d\d\d-\d\d-\d\d$/.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    // Ваше решение
    if (typeof text !== 'string') {
        throw new TypeError();
    }

    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text.substr(i, 3) === ':-)' || text.substr(i, 3) === '(-:') {
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
    // Ваше решение
    const row = [0, 1, 2].find(
        (i) => field[0][i] === field[1][i] && field[1][i] === field[2][i]
    );
    if (row !== undefined) {

        return field[0][row];
    }

    const column = [0, 1, 2].find(
        (i) => field[i][0] === field[i][1] && field[i][1] === field[i][2]
    );
    if (column !== undefined) {

        return field[column][0];
    }

    if (field[0][0] === field[1][1] && field[1][1] === field[2][2]) {

        return field[0][0];
    }

    if (field[0][2] === field[1][1] && field[1][1] === field[2][0]) {

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
