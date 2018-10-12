'use strict';

function isNotNumberNotFiniteNotInteger(elem) {
    return (typeof elem !== 'number' || !isFinite(elem) || elem % 1 !== 0);
}

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */

function abProblem(a, b) {
    if (isNotNumberNotFiniteNotInteger(a)) {
        throw new TypeError('a не является числом');
    }
    if (isNotNumberNotFiniteNotInteger(b)) {
        throw new TypeError('b не является числом');
    }

    return a + b;
}

/*

function abProblem(a, b) {
    if (typeof a !== 'number' || !isFinite(a) || a % 1 !== 0) {
        throw new TypeError('a не является числом');
    }
    if (typeof b !== 'number' || !isFinite(b) || b % 1 !== 0) {
        throw new TypeError('b не является числом');
    }

    return a + b;
}*/

/**
 * Определяет век по году
 * @param {Number} year Год, целое положительное число
 * @throws {TypeError} Когда в качестве года передано не число
 * @throws {RangeError} Когда год – отрицательное значение
 * @returns {Number} Век, полученный из года
 */
function centuryByYearProblem(year) {
    if (typeof year !== 'number' || !isFinite(year)) {
        throw new TypeError('year не является числом');
    }
    if (year <= 0) {
        throw new RangeError('year неположительное');
    }
    if (year % 1 !== 0) {
        throw new RangeError('year не целое');
    }

    return Math.trunc((year - 1) / 100) + 1;
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
        throw new TypeError('hexColor не является строкой');
    }
    if (hexColor.length !== 7) {
        throw new RangeError('hexColor неправильной длины');
    }
    if (hexColor[0] !== '#') {
        throw new RangeError('hexColor не является кодом цвета');
    }
    for (let i = 1; i < hexColor.length; i++) {
        const hex = hexColor[i];
        if (isNaN(parseInt(hex)) && !(hex >= 'A' && hex <= 'F') && !(hex >= 'a' && hex <= 'f')) {
            throw new RangeError('значения hexColor находятся вне валидного диапазона');
        }
    }

    return hexToRgb(hexColor);
}

function hexToRgb(hexColor) {
    let rgbArr = [];
    for (let i = 1; i < hexColor.length; i += 2) {
        rgbArr.push(parseInt(hexColor.substring(i, i + 2).toUpperCase(), 16));
    }

    return '(' + rgbArr.join(', ') + ')';
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    if (typeof n !== 'number' || !isFinite(n)) {
        throw new TypeError('n не является числом');
    }
    if (n < 0 || n % 1 !== 0) {
        throw new RangeError('n is not positive integer');
    }
    let fibTable = [0, 1];
    for (let i = 2; i <= n; i++) {
        fibTable[i] = fibTable[i - 1] + fibTable[i - 2];
    }

    return fibTable[n];
    // Ваше решение
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (!Array.isArray(matrix)) {
        throw new TypeError('matrix не является двумерным массивом');
    }
    let matrixLen;
    for (let i = 0; i < matrix.length; i++) {
        if (!Array.isArray(matrix[i])) {
            throw new TypeError('matrix не является двумерным массивом');
        }
        if (i === 0) {
            matrixLen = matrix[i].length;
        }
        if (matrix[i].length !== matrixLen) {
            throw new TypeError('matrix не является двумерным массивом');
        }
    }

    return transposeMatrix(matrix);
}

function transposeMatrix(matrix) {
    const columnsCount = matrix.length;
    const rowsCount = matrix[0].length;
    let transposedMatrix = new Array(rowsCount);
    for (let i = 0; i < matrix.length; i++) {
        transposedMatrix[i] = new Array(columnsCount);
        for (let j = 0; j < rowsCount; j++) {
            transposedMatrix[i][j] = matrix[j][i];
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
    if (isNInvalid(n)) {
        throw new TypeError('n не является числом');
    }
    if (isTargetNsNotNumber(targetNs)) {
        throw new TypeError('targetNs не является числом');
    }
    if (isTargetNsNotInRange(targetNs)) {
        throw new RangeError('targetNs выходит за допустимые пределы значений');
    }

    return convertNumToTargetNs(n, targetNs);
}

function isNInvalid(n) {
    return (typeof n !== 'number' || !isFinite(n));
}

function isTargetNsNotNumber(targetNs) {
    return (typeof targetNs !== 'number' || !isFinite(targetNs));
}

function isTargetNsNotInRange(targetNs) {
    const minValue = 2;
    const maxValue = 36;

    return (targetNs % 1 !== 0 || targetNs < minValue || targetNs > maxValue);
}

function convertNumToTargetNs(n, targetNs) {
    const unicodeOfA = 65;
    const shift = 10;
    let converted = '';
    while (n >= targetNs) {
        let remainder = n % targetNs;
        if (remainder > 9) {
            remainder = String.fromCharCode(unicodeOfA + remainder - shift);
        }
        converted = remainder + converted;
        n = Math.trunc(n / targetNs);
    }
    if (n > 9) {
        n = String.fromCharCode(unicodeOfA + n - shift);
    }
    converted = n + converted;

    return converted;
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    const hyphensIndices = [1, 5, 9, 12];
    const immutableDigitsIndices = [0, 2, 3, 4];
    const immutableDigits = ['8', '8', '0', '0'];
    const mutableDigitsIndices = [6, 7, 8, 10, 11, 13, 14];
    const isCorrectLength = phoneNumber.length === 15;
    const hyphensInPlaces = areHyphensInPlaces(phoneNumber, hyphensIndices);
    const correctImmutableDigits =
        areCorrectImmutableDigits(phoneNumber, immutableDigitsIndices, immutableDigits);
    const validMutableDigits = areValidNutableDigits(phoneNumber, mutableDigitsIndices);

    return hyphensInPlaces && isCorrectLength &&
           correctImmutableDigits && validMutableDigits;
}

function areHyphensInPlaces(phoneNumber, hyphensIndices) {
    let result = true;
    for (let i = 0; i < hyphensIndices.length; i++) {
        const index = hyphensIndices[i];
        if (phoneNumber[index] !== '-') {
            result = false;
            break;
        }
    }

    return result;
}

function areCorrectImmutableDigits(phoneNumber, immutableDigitsIndices,
    immutableDigits) {
    let result = true;
    for (let i = 0; i < immutableDigitsIndices.length; i++) {
        const index = immutableDigitsIndices[i];
        if (phoneNumber[index] !== immutableDigits[i]) {
            result = false;
            break;
        }
    }

    return result;
}

function areValidNutableDigits(phoneNumber, mutableDigitsIndices) {
    let result = true;
    for (let i = 0; i < mutableDigitsIndices.length; i++) {
        const index = mutableDigitsIndices[i];
        if (phoneNumber[index] < '0' || phoneNumber[index] > '9') {
            result = false;
            break;
        }
    }

    return result;
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (typeof text !== 'string') {
        throw new TypeError('text не является строкой');
    }
    let smilesCount = 0;
    for (let i = 0; i < text.length - 2; i++) {
        if (text.substring(i, i + 3) === ':-)' || text.substring(i, i + 3) === '(-:') {
            smilesCount++;
        }
    }

    return smilesCount;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    const horizontalWinner = getHorizontalWinner(field);
    if (horizontalWinner !== undefined) {
        return horizontalWinner;
    }
    const verticalWinner = getVerticalWinner(field);
    if (verticalWinner !== undefined) {
        return verticalWinner;
    }
    const diagonalWinner = getDiagonalWinner(field);
    if (diagonalWinner !== undefined) {
        return diagonalWinner;
    }

    return 'draw';
}

function getHorizontalWinner(field) {
    let winner;
    for (let i = 0; i < 3; i++) {
        if (field[i][0] === field[i][1] && field[i][1] === field[i][2]) {
            winner = field[i][0];
            break;
        }
    }

    return winner;
}

function getVerticalWinner(field) {
    let winner;
    for (let i = 0; i < 3; i++) {
        if (field[0][i] === field[1][i] && field[1][i] === field[2][i]) {
            winner = field[0][i];
            break;
        }
    }

    return winner;
}

function getDiagonalWinner(field) {
    let winner;
    if (field[0][0] === field[1][1] && field[1][1] === field[2][2]) {
        winner = field[0][0];
    }
    if (field[0][2] === field[1][1] && field[1][1] === field[2][0]) {
        winner = field[0][2];
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
