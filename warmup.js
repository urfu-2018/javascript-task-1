'use strict';

function isNotNum(number) {
    return typeof number !== 'number';
}

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new TypeError('В аргументы переданы не числа');
    }

    return Number(a) + Number(b);
}

/**
 * Определяет век по году
 * @param {Number} year Год, целое положительное число
 * @throws {TypeError} Когда в качестве года передано не число
 * @throws {RangeError} Когда год – отрицательное значение
 * @returns {Number} Век, полученный из года
 */
function centuryByYearProblem(year) {
    if (isNotNum(year) || !Number.isInteger(year)) {
        throw new TypeError('В качестве года передано не число');
    }
    if (year < 0) {
        throw new RangeError('Год – отрицательное значение');
    }
    const century = Math.floor(year / 100);
    if (year % 100) {
        return century + 1;
    }

    return century;
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
    const regCheck = /^#[0-9a-fA-F]{6}$/;
    if (typeof hexColor !== 'string') {
        throw new TypeError('Не строка');
    }
    if (!regCheck.test(hexColor)) {
        throw new RangeError('значения цвета выходят за пределы допустимых');
    }
    const arrRGB = [];
    let colorNotSharp = hexColor.substring(1);
    for (let i = 0; i < 3; i++) {
        const hexNum = colorNotSharp.substr(0, 2);
        colorNotSharp = colorNotSharp.substring(2);
        const decNum = parseInt(hexNum, 16);
        arrRGB.push(decNum);
    }

    return '(' + arrRGB[0] + ', ' + arrRGB[1] + ', ' + arrRGB[2] + ')';
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    if (isNotNum(n)) {
        throw new TypeError('В качестве положения в ряде передано не число');
    }
    if (n <= 0 || !Number.isInteger(n)) {
        throw new RangeError('Положение в ряде не является целым положительным числом');
    }
    const arrFib = [];
    arrFib[0] = 1;
    arrFib[1] = 1;
    for (let i = 2; i < n; i++) {
        arrFib[i] = arrFib[i - 1] + arrFib[i - 2];
    }

    return arrFib[n - 1];
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (!Array.isArray(matrix) ||
        !Array.isArray(matrix[0])) {
        throw new TypeError('В функцию передаётся не двумерный массив');
    }
    const matrixTranspon = [];
    for (let i = 0; i < matrix[0].length; i++) {
        const matrixTranLine = [];
        for (let j = 0; j < matrix.length; j++) {
            matrixTranLine[j] = matrix[j][i];
        }
        matrixTranspon.push(matrixTranLine);
    }
    if (!matrix[0].length) {
        matrixTranspon[0] = [];
    }

    return matrixTranspon;
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
    if (isNotNum(n) || isNotNum(targetNs)) {
        throw new TypeError('Переданы аргументы некорректного типа');
    }
    if (targetNs < 2 || targetNs > 36) {
        throw new RangeError('система счисления выходит за пределы значений [2, 36]');
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
        throw new TypeError('Не строка');
    }
    const reg = /^8-800-\d{3}-\d{2}-\d{2}$/;

    return reg.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (typeof text !== 'string') {
        throw new TypeError('Not string');
    }
    const regSmile = /:-\)/g;
    const regSmileRvs = /\(-:/g;
    let countSmiles = 0;
    const smiles = text.match(regSmile);
    const smilesRevers = text.match(regSmileRvs);
    if (smiles !== null) {
        countSmiles += smiles.length;
    }
    if (smilesRevers !== null) {
        countSmiles += smilesRevers.length;
    }

    return countSmiles;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    const winners = [];
    for (let i = 0; i < field.length; i++) {
        if (field[i][0] === field[i][1] && field[i][1] === field[i][2]) {
            winners.push(field[i][0]);
        }
        if (field[0][i] === field[1][i] && field[1][i] === field[2][i]) {
            winners.push(field[0][i]);
        }
    }
    if ((field[0][0] === field[1][1] && field[1][1] === field[2][2]) ||
        (field[0][2] === field[1][1] && field[1][1] === field[2][0])) {
        winners.push(field[1][1]);
    }

    return checkWin(winners);
}

function checkWin(winners) {
    if (winners.indexOf('o') !== -1 && winners.indexOf('x') !== -1) {
        return 'draw';
    }
    if (winners.indexOf('o') !== -1) {
        return 'o';
    }
    if (winners.indexOf('x') !== -1) {
        return 'x';
    }
    if (winners.indexOf('o') === -1 && winners.indexOf('x') === -1) {
        return 'draw';
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
