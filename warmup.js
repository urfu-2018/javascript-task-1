'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
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
    if (typeof year === 'number') {
        if (year >= 0 && year === parseInt(year)) {
            return year % 100 ? Math.floor(year / 100) + 1 : Math.floor(year / 100);
        }
        throw new RangeError();
    }
    throw new TypeError();
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
        throw new TypeError();
    }
    if (!/#[A-F0-9a-f]{6}/.test(hexColor)) {
        throw new RangeError();
    }
    var result = '(' + parseInt(hexColor.slice(1, 3), 16) + ', ' +
    parseInt(hexColor.slice(3, 5), 16) + ', ' +
    parseInt(hexColor.slice(5, 7), 16) + ')';

    return result;
    // Ваше решение
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
        throw new TypeError();
    }
    if (Number.isInteger(n)) {
        if (n === 1 || n === 2) {
            return 1;
        }
    } else {
        throw new RangeError();
    }
    let firstValue = 1;
    let secondValue = 1;
    let timeValue;
    for (var i = 2; i < n; i++) {
        timeValue = secondValue;
        secondValue = firstValue + secondValue;
        firstValue = timeValue;
    }
    return secondValue;
}


function fibonacci(n) {
    return fibonacci(n - 1) + fibonacci(n - 2);
}


/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    var newMatrix = [];
    if (!Array.isArray(matrix) || checked(matrix)) {
        throw new TypeError();
    }
    for (var i = 0; i < matrix[0].length; i++) {
        newMatrix[i] = [];
        for (var j = 0; j < matrix.length; j++) {
            newMatrix[i][j] = matrix[j][i];
        }
    }

    return newMatrix;
}

function checked(matrix) {
    for (var i = 0; i < matrix.length; i++) {
        if (!Array.isArray(matrix[i]) || matrix[i].length !== matrix[0].length) {
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
    if (typeof n === 'number' && typeof targetNs === 'number') {
        if (targetNs > 1 && targetNs < 37 && Number.isInteger(targetNs)) {
            return n.toString(targetNs);
        }
        throw new RangeError();
    }
    throw new TypeError();
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    if (typeof phoneNumber !== 'string') {
        throw new TypeError();
    }

    return /8-800-\d{3}-\d{2}-\d{2}/.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (typeof text !== 'string') {
        throw new TypeError();
    }
    const results = text.match(/\(-:|:-\)/);

    return results === null ? 0 : results.length;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    if (goToMatrixDiagonal(field) === 'draw') {
        return (goToMatrix(field) === 'draw')
            ? goToMatrix(matrixProblem(field)) : goToMatrix(field);
    }

    return goToMatrixDiagonal(field);

    // Ваше решение
}

function goToMatrixDiagonal(matrix) {
    if (matrix[0][0] === matrix[1][1] && matrix[2][2] === matrix[0][0]) {
        return matrix[0][0];
    }
    if (matrix[0][2] === matrix[1][1] && matrix[2][0] === matrix[0][2]) {
        return matrix[0][2];
    }

    return 'draw';
}

function goToMatrix(matrix) {
    for (var i = 0; i < matrix.length; i++) {
        if (matrix[i][0] === matrix[i][1] && matrix[i][0] === matrix[i][2]) {
            return matrix[i][0];
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
