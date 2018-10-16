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
    if (typeof(a) !== 'number' || typeof(b) !== 'number') {
        throw new TypeError('В аргументы переданы не числа');
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
    if (typeof(year) !== 'number') {
        throw new TypeError('В качестве года передано не число');
    }
    if (year < 0) {
        throw new RangeError('Год – отрицательное значение');
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
    const regRange = /^#[A-Fa-f0-9]{6}$/;
    const inRange = regRange.test(hexColor);
    if (typeof(hexColor) !== 'string') {
        throw new TypeError('Цвет передан не строкой');
    }
    if (!inRange) {
        throw new RangeError('Значения цвета выходят за пределы допустимых');
    }
    const redNumber = parseInt(hexColor.slice(1, 3), 16);
    const greenNumber = parseInt(hexColor.slice(3, 5), 16);
    const blueNumber = parseInt(hexColor.slice(5, 7), 16);
    const result = '(' + redNumber + ', ' + greenNumber + ', ' + blueNumber + ')';

    return result;
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
        throw new TypeError('В качестве положения в ряде передано не число');
    }
    if (n < 0 || !Number.isInteger(n)) {
        throw new RangeError('Положение в ряде не является целым положительным числом');
    }
    let firstNumber = 1;
    let secondNumber = 1;
    for (let i = 3; i <= n; i++) {
        let sum = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = sum;
    }

    return secondNumber;
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    // Ваше решение
    if (!Array.isArray(matrix) || !matrix.every(Array.isArray || matrix.length === 0)) {
        throw new TypeError();
    }
    let columns = matrix[0].length;
    let tMatrix = [];
    for (let i = 0; i < columns; i++) {
        tMatrix.push([]);
        matrix.forEach(element => {
            tMatrix[i].push(element[i]);
        });
    }

    return tMatrix;
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
    if (typeof(n) !== 'number' || typeof(targetNs) !== 'number' || !Number.isInteger(targetNs)) {
        throw new TypeError('Переданы аргументы некорректного типа');
    }
    if (targetNs > 36 || targetNs < 2) {
        throw new RangeError('Cистема счисления выходит за пределы значений [2, 36]');
    }

    return n.toString(targetNs);
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    // Ваше решение
    if (typeof phoneNumber !== 'string') {
        throw new TypeError();
    }
    let reg = /^8-800-[\d]{3}-[\d]{2}-[\d]{2}$/;

    return reg.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (typeof(text) !== 'string') {
        throw new TypeError('В  качестве аргумента передаётся не строка');
    }
    let regSmile = text.match(/(:-\)|\(-:)/g);
    if (regSmile === null) {
        return 0;
    }

    return regSmile.length;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    // Ваше решение
    let winner = 'draw';
    let fDiagonal = field[0][0] === field[1][1] && field[1][1] === field[2][2];
    let sDiagonal = field[0][2] === field[1][1] && field[1][1] === field[2][0];
    for (let i = 0; i < 3; i++) {
        if (field[i][0] === field[i][1] && field[i][1] === field[i][2]) {
            winner = field[i][0];
        }
        if (field[0][i] === field[1][i] && field[1][i] === field[2][i]) {
            winner = field[0][i];
        }
    }
    if (fDiagonal || sDiagonal) {
        winner = field[1][1];
    }

    return winner;
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
