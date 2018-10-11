'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    checkIsNumber(a);
    checkIsNumber(b);

    return a + b;
}

function checkIsNumber(variable) {
    checkType(variable, 'number');
}

function checkIsString(variable) {
    checkType(variable, 'string');
}

function checkType(variable, type) {
    if (typeof variable !== type) {
        throw new TypeError(`typeof ${variable} != ${type}`);
    }
}

/**
 * Определяет век по году
 * @param {Number} year Год, целое положительное число
 * @throws {TypeError} Когда в качестве года передано не число
 * @throws {RangeError} Когда год – отрицательное значение
 * @returns {Number} Век, полученный из года
 */
function centuryByYearProblem(year) {
    checkIsNumber(year);
    checkIsNonNegative(year);

    if (year % 100 === 0) {
        return Math.trunc(year / 100);
    }

    return Math.trunc(year / 100) + 1;
}


function checkIsNonNegative(number) {
    if (number < 0) {
        throw new RangeError(`${number} должно быть больше нуля`);
    }
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
    checkIsString(hexColor);
    checkColor(hexColor);
    let colors = [];
    for (let i = 0; i < 3; i++) {
        const stringColor = hexColor.substr(2 * i + 1, 2);
        colors.push(parseInt(stringColor, 16));
    }

    return `(${colors.join(', ')})`;
}

function checkColor(color) {
    if (!color.match(/#[0-9a-f]{6}/i)) {
        throw new TypeError(`${color} - некорректное значение цвета`);
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
    checkIsNumber(n);
    checkIsInteger(n);
    checkIsPositive(n);

    let first = 0;
    let second = 1;
    for (let i = 0; i < n; i++) {
        const temp = first + second;
        first = second;
        second = temp;
    }

    return first;
}

function checkIsPositive(number) {
    if (number <= 0) {
        throw new RangeError(`${number} должен быть положительным`);
    }
}

function checkIsInteger(number) {
    if (!Number.isInteger(number)) {
        throw new RangeError(`${number} не целое`);
    }
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    checkIsMatrix(matrix);
    const transposedMatrix = [];
    const m = matrix.length;
    const n = matrix[0].length;
    for (let i = 0; i < n; i++) {
        transposedMatrix.push([]);
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            transposedMatrix[i][j] = matrix[j][i];
        }
    }

    return transposedMatrix;
}

function checkIsArray(variable) {
    if (!Array.isArray(variable)) {
        throw new TypeError(`${variable} должен быть массивом`);
    }
}

function checkIsMatrix(variable) {
    checkIsArray(variable);
    for (let i = 0; i < variable.length; i++) {
        checkIsArray(variable[i]);
    }
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
    checkIsNumber(n);
    checkIsNumber(targetNs);
    checkInRange(targetNs, 2, 36);

    return n.toString(targetNs);
}

function checkInRange(number, min, max) {
    if (number < min || number > max) {
        throw new RangeError(`${number} должно быть от ${min} до ${max}`);
    }
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    return Boolean(phoneNumber.match(/8-800-\d{3}-\d{2}-\d{2}/i));
}


/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    checkIsString(text);
    const firstSmiles = text.match(/\(-:/g);
    const secondSmiles = text.match(/:-\)/g);

    let smiles = 0;
    if (firstSmiles !== null) {
        smiles += firstSmiles.length;
    }
    if (secondSmiles !== null) {
        smiles += secondSmiles.length;
    }

    return smiles;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {

    return determineWinnerByRows(field) ||
        determineWinnerByColumns(field) ||
        determineWinner(field[0][0], field[1][1], field[2][2]) ||
        determineWinner(field[0][2], field[1][1], field[2][0]) ||
        'draw';
}

function determineWinnerByRows(field) {
    for (let row = 0; row < 3; row++) {
        let winner = determineWinner(field[row][0], field[row][1], field[row][2]);
        if (winner !== null) {
            return winner;
        }
    }

    return null;
}

function determineWinnerByColumns(field) {
    for (let column = 0; column < 3; column++) {
        let winner = determineWinner(field[0][column], field[1][column], field[2][column]);
        if (winner !== null) {
            return winner;
        }
    }

    return null;
}

function determineWinner(firstField, secondField, thirdField) {
    if (firstField === secondField && secondField === thirdField) {
        return firstField;
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
