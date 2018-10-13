'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    throwsTypeErrorIfNumberIsNotInteger(a);
    throwsTypeErrorIfNumberIsNotInteger(b);

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
    throwsTypeErrorIfInputIsNotNumber(year);
    throwsRangeErrorIfNumberIsNotPositive(year);
    if (!Number.isInteger(year)) {
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
    throwsTypeErrorIfInputIsNotString(hexColor);
    let correctHexColor = /^#[A-Fa-f0-9]{6}$/;
    if (!correctHexColor.test(hexColor)) {
        throw new RangeError('hexColor is not in range');
    }
    let rgb = [];
    hexColor = hexColor.substring(1);
    for (let i = 0; i < 3; i ++) {
        rgb.push(parseInt(hexColor.substr(i * 2, 2), 16).toString());
    }

    return `(${rgb.join(', ')})`;
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    throwsTypeErrorIfInputIsNotNumber(n);
    throwsRangeErrorIfNumberIsNotPositive(n);
    if (!Number.isInteger(n)) {
        throw new RangeError();
    }
    let first = 1;
    let second = 1;

    for (let i = 2; i < n; i++) {
        let tmp = first;
        first = second;
        second += tmp;
    }

    return second;
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    throwsTypeErrorIfArrayIsNotMatrix(matrix);
    let result = [];
    for (let i = 0; i < matrix[0].length; i++) {
        result.push([]);
        for (let j = 0; j < matrix.length; j++) {
            result[i].push(matrix[j][i]);
        }
    }

    return result;
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
    throwsTypeErrorIfInputIsNotNumber(n);
    throwsTypeErrorIfNumberIsNotInteger(targetNs);
    throwsRangeErrorIfNumberNotInRange(targetNs, 2, 36);

    return n.toString(targetNs);
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    throwsTypeErrorIfInputIsNotString(phoneNumber);
    let regex = /^8-800-\d{3}-\d{2}-\d{2}$/;

    return regex.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    throwsTypeErrorIfInputIsNotString(text);
    let smilesCount = 0;
    for (let i = 0; i < text.length - 2; i++) {
        let substr = text.substr(i, 3);
        if (isSmileInSubstr(substr)) {
            smilesCount++;
            i += 2;
        }
    }

    return smilesCount;
}

function isSmileInSubstr(substr) {
    let smiles = [':-)', '(-:'];
    for (let j = 0; j < smiles.length; j++) {
        if (substr === smiles[j]) {
            return true;
        }
    }

    return false;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    let winLines = field.concat(getAllColumnsFromField(field));
    winLines.push(getDiagonalFromField(field, true));
    winLines.push(getDiagonalFromField(field, false));
    if (isOneOfTheLineContainsOnlySymbol('x', winLines)) {
        return 'x';
    }
    if (isOneOfTheLineContainsOnlySymbol('o', winLines)) {
        return 'o';
    }

    return 'draw';
}

function isOneOfTheLineContainsOnlySymbol(symbol, winLines) {
    for (let i = 0; i < winLines.length; i++) {
        if (isLineContainsOnlySymbol(symbol, winLines[i])) {
            return true;
        }
    }

    return false;
}

function isLineContainsOnlySymbol(symbol, line) {
    for (let j = 0; j < line.length; j++) {
        if (line[j] !== symbol) {
            return false;
        }
    }

    return true;
}

function getAllColumnsFromField(field) {
    let result = [];
    for (let i = 0; i < field[0].length; i++) {
        result.push(getColumnFromField(field, i));
    }

    return result;
}

function getColumnFromField(field, columnIndex) {
    let column = [];
    for (let i = 0; i < field.length; i++) {
        column.push(field[i][columnIndex]);
    }

    return column;
}

function getDiagonalFromField(field, isMainDiagonal) {
    let diagonal = [];
    for (let i = 0; i < field.length; i++) {
        if (isMainDiagonal) {
            diagonal.push(field[i][i]);
        } else {
            diagonal.push(field[i][field.length - i - 1]);
        }
    }

    return diagonal;
}

function throwsTypeErrorIfNumberIsNotInteger(number) {
    throwsTypeErrorIfInputIsNotNumber(number);
    if (!Number.isInteger(number)) {
        throw new TypeError(`${number.toString()} is not an integer`);
    }
}

function throwsRangeErrorIfNumberNotInRange(number, start, end) {
    if (start > number || number > end) {
        throw new RangeError(`${number.toString()} is not in range ${start} - ${end}`);
    }
}

function throwsTypeErrorIfArrayIsNotMatrix(array) {
    throwsTypeErrorIfInputIsNotArray(array);
    if (array.length === 0) {
        throw new TypeError(`${array.toString()} is not a matrix`);
    }
    for (let i = 0; i < array.length; i++) {
        throwsTypeErrorIfInputIsNotArray(array[i]);
        if (array[i].length !== array[0].length) {
            throw new TypeError(`${array.toString()} is not a matrix`);
        }
    }
}

function throwsTypeErrorIfInputIsNotArray(input) {
    if (!Array.isArray(input)) {
        throw new TypeError(`${input.toString()} is not array`);
    }
}

function throwsTypeErrorIfInputIsNotNumber(input) {
    if (typeof input !== 'number') {
        throw new TypeError(`${input.toString()} is not a number`);
    }
}

function throwsTypeErrorIfInputIsNotString(input) {
    if (typeof input !== 'string') {
        throw new TypeError (`${input.toString()} is not a string`);
    }
}

function throwsRangeErrorIfNumberIsNotPositive(number) {
    throwsTypeErrorIfInputIsNotNumber(number);
    if (number <= 0) {
        throw new RangeError(`${number} is negative`);
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
