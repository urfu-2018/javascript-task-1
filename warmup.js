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
    if (((typeof a) !== 'number') || ((typeof b) !== 'number')) {
        throw new TypeError();
    }

    return (Math.trunc(a) + Math.trunc(b));
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
    if ((typeof year) != 'number') {
        throw new TypeError();
    }
    if (year < 0) {
        throw new RangeError();
    }

    // Определение века
    const YEARS_IN_CENTURY = 100;

    return Math.ceil(year / YEARS_IN_CENTURY);
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
    if ((typeof hexColor) !== 'string') {
        throw new TypeError();
    }

    const hexColorRegex = /^#[\dA-F]{6}|[\da-f]{6}$/;

    if (!hexColorRegex.test(hexColor)) {
        throw new RangeError();
    }

    // Изоляция HEX-компонент
    const COLOR_COMPONENTS_AMOUNT = 3;
    const hexColorComponents = [
        hexColor.substring(1, 3),
        hexColor.substring(3, 5),
        hexColor.substring(5)
    ];

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
    if ((typeof n) !== 'number') {
        throw new TypeError();
    }
    if (!(Number.isInteger(n) && (n > 0))) {
        throw new RangeError();
    }

    let lastFibonacciNumbers = [1, 1]; // Последние вычисленные числа Фибоначчи

    // Нахождение n-го числа Фибоначчи
    for (let i = 3; i <= n; i++) {
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

    // Проверка того, что на входе двумерный массив
    if (!Array.isArray(matrix)) {
        throw new TypeError();
    }
    const M = matrix.length;
    if (M === 0) {
        throw new TypeError();
    }
    matrix.forEach(element => {
        if (!Array.isArray(element)) {
            throw new TypeError();
        }
    });

    // Проверка того, что у всех элементов массива одинаковая размерность
    const N = matrix[0].length;
    matrix.forEach(element => {
        if (element.length !== N) {
            throw new TypeError();
        }
    });

    // Создание основы для транспонированной матрицы
    let transposedMatrix = [];
    for (let i = 0; i < N; i++) {
        transposedMatrix.push([]);
    }

    // Транспонирование матрицы
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            transposedMatrix[j][i] = matrix[i][j];
        }
    }

    return transposedMatrix;
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

    // Проверка входных данных на валидность
    if (((typeof n) !== 'number') || ((typeof targetNs) !== 'number')) {
        throw new TypeError();
    }
    if ((targetNs < 2) || (targetNs > 36)) {
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

    const phoneRegex = /^8-800-\d{3}-\d{2}-\d{2}$/;

    return phoneRegex.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {

    // Проверка входных данных на валидность
    if ((typeof text) !== 'string') {
        throw new TypeError();
    }

    // Определение количества смайликов
    const smileyRegex = /(:-\))|(\(-:)/g;
    const matches = text.match(smileyRegex);

    if (matches === null) {
        return 0;
    }

    return matches.length;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {

    // Проверить строки на наличие победителя
    let winner = checkRowsForWinner(field);
    if (winner !== null) {
        return winner;
    }

    // Проверить столбцы на наличие победителя
    winner = checkColumnsForWinner(field);
    if (winner !== null) {
        return winner;
    }

    // Проверить главную диагональ на наличие победителя
    winner = checkMainDiagonalForWinner(field);
    if (winner !== null) {
        return winner;
    }

    // Проверить побочную диагональ на наличие победителя
    winner = checkAntidiagonalForWinner(field);
    if (winner !== null) {
        return winner;
    }

    // Иначе победила дружба
    return 'draw';
}

function checkRowsForWinner(field) {

    // Проверить, состоит ли некоторая строка из элементов только одного типа
    for (let rowIndex = 0; rowIndex < field.length; rowIndex++) {
        const currentRow = field[rowIndex];
        if (currentRow.every(element => {
            return (element === currentRow[0]);
        })) {
            // Если да, то победитель определён
            return currentRow[0];
        }
    }

    return null;
}

function checkColumnsForWinner(field) {

    // Проверить, состоит ли некоторый столбец из элементов только одного типа
    for (let columnIndex = 0; columnIndex < field.length; columnIndex++) {
        if (field.every(element => {
            return (element[columnIndex] === field[0][columnIndex]);
        })) {
            // Если да, то победитель определён
            return field[0][columnIndex];
        }
    }

    return null;
}

function checkMainDiagonalForWinner(field) {

    // Проверить, состоит ли главная диагональ из элементов только одного типа
    let winnerFound = true;
    for (let i = 1; i < field.length; i++) {
        if (field[i][i] !== field[0][0]) {
            winnerFound = false;
            break;
        }
    }
    if (winnerFound) {
        // Если да, то победитель определён
        return field[0][0];
    }

    return null;
}

function checkAntidiagonalForWinner(field) {

    const FIELD_SIZE = field.length;

    // Проверить, состоит ли побочная диагональ из элементов только одного типа
    let winnerFound = true;
    for (let i = 1; i < FIELD_SIZE; i++) {
        if (field[FIELD_SIZE - 1 - i][i] !== field[FIELD_SIZE - 1][0]) {
            winnerFound = false;
        }
    }
    if (winnerFound) {
        // Если да, то победитель определён
        return field[FIELD_SIZE - 1][0];
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
