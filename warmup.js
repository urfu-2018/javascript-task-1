'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (!isNumber(a) || !isNumber(b)) {
        throw new TypeError();
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
    if (!isNumber(year)) {
        throw new TypeError();
    }
    if (!isPositiveInteger(year)) {
        throw new RangeError();
    }

    return Math.floor((year - 1) / 100) + 1;
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
    const hexRegexPattern = /^#[1234567890abcdefABCDEF]{6}$/;
    if (!hexRegexPattern.test(hexColor)) {
        throw new RangeError();
    }

    if (hexColor.length === 7) {
        let rComponent = hexColor.substr(1, 2);
        let gComponent = hexColor.substr(3, 2);
        let bComponent = hexColor.substr(5, 2);

        return '(' + parseInt(rComponent, 16) + ', ' +
            parseInt(gComponent, 16) + ', ' +
            parseInt(bComponent, 16) + ')';
    }
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    if (!isNumber(n)) {
        throw new TypeError();
    }
    if (!isPositiveInteger(n)) {
        throw new RangeError();
    }
    const KNOWN_SEQUENCE_VALUES_COUNT = 2;
    if (n <= KNOWN_SEQUENCE_VALUES_COUNT) {
        return 1;
    }
    let previousValue = 1;
    let value = 1;

    for (let i = 0; i < n - KNOWN_SEQUENCE_VALUES_COUNT; i++) {
        const newValue = value + previousValue;
        previousValue = value;
        value = newValue;
    }

    return value;
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (isEmptyArray(matrix)) {
        throw new TypeError();
    }

    const lengthY = matrix.length;
    const lengthX = matrix[0].length;
    if (lengthX === 0) {
        throw new TypeError();
    }

    for (let i = 0; i < lengthY; i++) {
        let matrixRow = matrix[i];

        if (isEmptyArray(matrixRow) || matrixRow.length !== lengthX) {
            throw new TypeError();
        }
    }

    return transposeMatrix(matrix, lengthX, lengthY);
}

function isEmptyArray(array) {
    return !(array instanceof Array) || !array.length;
}

function transposeMatrix(matrix, lengthX, lengthY) {
    let transposedMatrix = [];
    for (let y = 0; y < lengthX; y++) {
        transposedMatrix.push([]);
        for (let x = 0; x < lengthY; x++) {
            transposedMatrix[y].push(matrix[x][y]);
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
    if (!isNumber(n) || !isInteger(targetNs)) {
        throw new TypeError();
    }
    if (targetNs < 2 || targetNs > 36) {
        throw new RangeError();
    }

    return n.toString(targetNs);
}

function isNumber(number) {
    return typeof(number) === 'number';
}

function isInteger(number) {
    return isNumber(number) &&
        Number.isInteger(number);
}

function isPositiveInteger(number) {
    return isInteger(number) &&
        number > 0;
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    let phoneRegex = /^8-800-\d{3}-\d{2}-\d{2}$/;

    return phoneRegex.test(phoneNumber);
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
    const SMILES_REGEX = /(:-\))|(\(-:)/g;

    let matches = text.match(SMILES_REGEX);

    return matches === null
        ? 0
        : matches.length;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    const SQUARE_LENGTH = 3;
    const horizontalLines = field;
    let verticalLines = transposeMatrix(field, SQUARE_LENGTH, SQUARE_LENGTH);
    let diagonalLines = getDiagonalLines();
    function getDiagonalLines() {
        let lines = [[], []];
        for (let i = 0; i < SQUARE_LENGTH; i++) {
            lines[0].push(field[i][i]);
            lines[1].push(field[i][SQUARE_LENGTH - 1 - i]);
        }

        return lines;
    }

    let allLines = horizontalLines.concat(verticalLines, diagonalLines);

    for (let i = 0; i < allLines.length; i++) {
        let sum = 0;
        for (let j = 0; j < allLines.length; j++) {
            sum = sum + getValueBySymbol(allLines[i][j]);
        }
        if (sum === SQUARE_LENGTH) {
            return 'x';
        } else if (sum === -SQUARE_LENGTH) {
            return 'o';
        }
    }

    return 'draw';
}

function getValueBySymbol(symbol) {
    if (symbol === 'x' || symbol === 'X') {
        return 1;
    }
    if (symbol === 'o' || symbol === 'O') {
        return -1;
    }

    return 0;
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
