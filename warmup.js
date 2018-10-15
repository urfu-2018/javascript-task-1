'use strict';

function typeError() {
    throw new TypeError();
}

function rangeError() {
    throw new RangeError();
}

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        typeError();
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
        typeError();
    }
    if (year % 1 === 0) {
        if (year >= 0) {
            return Math.ceil(year / 100);
        }
        rangeError();
    }
    typeError();
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
    if (typeof hexColor === 'string') {
        if ((/^#[0-9A-F]{6}$/i).test(hexColor)) {
            let rgbArray = new Array(3);
            rgbArray[0] = parseInt(hexColor.substr(1, 2), 16);
            rgbArray[1] = parseInt(hexColor.substr(3, 2), 16);
            rgbArray[2] = parseInt(hexColor.substr(5, 2), 16);

            return '(' + rgbArray[0] + ', ' + rgbArray[1] + ', ' + rgbArray[2] + ')';
        }
        rangeError();
    }
    typeError();
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
        typeError();
    }
    if (n <= 0 || n % 1 !== 0) {
        rangeError();
    }
    const a = 1.61803398875;

    return Math.round(Math.pow(a, n) / Math.sqrt(5));
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (!Array.isArray(matrix)) {
        typeError();
    }
    matrix.forEach(element => {
        if (!Array.isArray(element)) {
            typeError();
        }
    });
    let matrixT = [];
    let m = matrix.length;
    let n = matrix[0].length;
    let elementIndex = 0;
    matrix.forEach(element => {
        matrixT[elementIndex] = [];
        if (element.length !== n) {
            typeError();
        }
        elementIndex++;
    });
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            matrixT[j][i] = matrix[i][j];
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
    if (typeof n !== 'number' || typeof targetNs !== 'number' || !Number.isInteger(targetNs)) {
        typeError();
    }
    if (targetNs < 2 || targetNs > 36) {
        rangeError();
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
        typeError();
    }

    return /^8-800-[0-9]{3}-[0-9]{2}-[0-9]{2}$/.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (typeof text !== 'string') {
        typeError();
    }
    const result = text.match(/\(-:|:-\)/g);

    return result === null ? 0 : result.length;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    if (field[0][0] === field[1][1] && field[1][1] === field[2][2]) {
        return field[1][1];
    }
    if (field[0][2] === field[1][1] && field[1][1] === field[2][0]) {
        return field[1][1];
    }
    let winner;
    for (let i = 0; i < 3; i++) {
        winner = check(field[i][0], field[i][1], field[i][2]);
        if (typeof winner !== 'undefined') {
            return winner;
        }
        winner = check(field[0][i], field[1][i], field[2][i]);
        if (typeof winner !== 'undefined') {
            return winner;
        }
    }

    return 'draw';
}

function check(first, second, third) {
    if (first === second && second === third) {
        if (typeof first !== 'undefined') {
            return first;
        }
    }

    return null;
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
