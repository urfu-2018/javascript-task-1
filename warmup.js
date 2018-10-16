'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    checkNumbers(a, b);

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
    checkNumbers(year);
    if (year < 0) {
        throw new RangeError();
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
    if (typeof(hexColor) !== 'string') {
        throw new TypeError();
    }
    let reg = /^#[a-f|A-F|0-9]{6}$/gi;
    if (!reg.test(hexColor)) {
        throw new RangeError();
    }

    let redHEX = hexColor.substring(1, 3);
    let greenHEX = hexColor.substring(3, 5);
    let blueHEX = hexColor.substring(5, 7);

    let red = parseInt(redHEX, 16);
    let green = parseInt(greenHEX, 16);
    let blue = parseInt(blueHEX, 16);

    return '(' + red + ', ' + green + ', ' + blue + ')';
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    checkNumbers(n);
    if (n <= 0) {
        throw new RangeError();
    }
    let prevPrevNumber = 1;
    let prevNumber = 1;
    for (let i = 2; i < n; i++) {
        let newNumber = prevPrevNumber + prevNumber;
        prevPrevNumber = prevNumber;
        prevNumber = newNumber;
    }

    return prevNumber;
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (!checkMatrix(matrix)) {
        throw new TypeError();
    }
    let transpMatrix = new Array(matrix[0].length);
    for (let i = 0; i < transpMatrix.length; i++) {
        transpMatrix[i] = new Array(matrix.length);
    }
    for (let x = 0; x < matrix.length; x++) {
        for (let y = 0; y < matrix[0].length; y++) {
            transpMatrix[y][x] = matrix[x][y];
        }
    }

    return transpMatrix;
}

function checkMatrix(matrix) {
    if (!checkIsArray(matrix)) {
        return false;
    }
    let prevSize = matrix[0].length;
    for (let i = 1; i < matrix.length; i++) {
        if (!Array.isArray(matrix[i]) ||
         matrix[i].length !== prevSize ||
         containsArray(matrix[i])) {
            return false;
        }
        prevSize = matrix[i].length;
    }

    return true;
}

function checkIsArray(m) {
    return Array.isArray(m) && Array.isArray(m[0]);
}

function containsArray(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        if (Array.isArray(matrix[i])) {
            return true;
        }
    }

    return false;
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
    checkNumbers(n, targetNs);
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
    let req = /^8-800-\d{3}-\d{2}-\d{2}$/;

    return req.test(phoneNumber);
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
    let reg = /(\(-:|:-\))/g;
    let result = text.match(reg);
    if (result === null) {
        return 0;
    }

    return result.length;
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
        }
        if (field[0][i] === field[1][i] && field[1][i] === field[2][i]) {
            return field[0][i];
        }
    }
    if (field[0][0] === field[1][1] && field[1][1] === field[2][2]) {
        return field[0][0];
    }
    if (field[0][2] === field[1][1] && field[1][1] === field[2][0]) {
        return field[0][2];
    }

    return 'draw';
}

function checkNumbers() {
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number') {
            throw new TypeError();
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
