'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */

function abProblem(a, b) {
    if (typeof a !== 'number' || !Number.isInteger(a)) {
        throw new TypeError('a не является целым числом');
    }
    if (typeof b !== 'number' || !Number.isInteger(b)) {
        throw new TypeError('b не является целым числом');
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
    if (typeof year !== 'number' || !Number.isInteger(year)) {
        throw new TypeError('year не является целым числом');
    }
    if (year <= 0) {
        throw new RangeError('year неположительное');
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
    if (typeof hexColor !== 'string') {
        throw new TypeError('hexColor не является строкой');
    }

    if (!(/^#[0-9a-fA-F]{6}$/.test(hexColor))) {
        throw new RangeError('hexColor представлен в неправильном диапазоне');
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
    if (typeof n !== 'number') {
        throw new TypeError('n не является числом');
    }
    if (n <= 0 || !Number.isInteger(n)) {
        throw new RangeError('n не является целым положительным числом');
    }
    let first = 0;
    let second = 1;
    for (let i = 2; i <= n; i++) {
        const temp = first + second;
        first = second;
        second = temp;
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
    if (!Array.isArray(matrix) || matrix.length === 0 || !Array.isArray(matrix[0])) {
        throw new TypeError('matrix не является двумерным массивом');
    }
    const matrixLen = matrix[0].length;
    if (matrix.some(x => !Array.isArray(x) || x.length !== matrixLen)) {
        throw new TypeError('matrix не является двумерным массивом');
    }

    return transposeMatrix(matrix);
}

function transposeMatrix(matrix) {
    const rowsCount = matrix.length;
    const columnsCount = matrix[0].length;
    let transposedMatrix = new Array(columnsCount);
    for (let i = 0; i < columnsCount; i++) {
        transposedMatrix[i] = new Array(rowsCount);
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
    if (typeof n !== 'number') {
        throw new TypeError('n не является числом');
    }
    if (typeof targetNs !== 'number' || !Number.isInteger(targetNs)) {
        throw new TypeError('targetNs не является целым числом');
    }
    if (targetNs < 2 || targetNs > 36) {
        throw new RangeError('targetNs выходит за допустимые пределы значений');
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
        throw new TypeError('phoneNumber не является строкой');
    }

    return /^8-800-\d{3}-\d{2}-\d{2}$/.test(phoneNumber);
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
    const rightSideSmiles = (text.match(/:-\)/) || []).length;
    const leftSideSmiles = (text.match(/\(-:/) || []).length;
    const bothSideSmiles = (text.match(/\(-:-\)/) || []).length;

    return rightSideSmiles + leftSideSmiles - bothSideSmiles;

    /*

    let smilesCount = 0;
    for (let i = 0; i < text.length - 2; i++) {
        if (text.substring(i, i + 3) === ':-)' || text.substring(i, i + 3) === '(-:') {
            smilesCount++;
        }
    }

    return smilesCount;

    */
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
