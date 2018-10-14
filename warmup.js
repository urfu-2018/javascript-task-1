'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (!(typeof a === 'number' && typeof b === 'number' &&
        Math.trunc(a) === a && Math.trunc(b) === b)) {
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
    if (!(typeof year === 'number' && (Math.trunc(year) === year))) {
        throw new TypeError();
    }
    if (year <= 0) {
        throw new RangeError();
    }

    const century = Math.trunc(year / 100);
    if (year % 100 === 0) {
        return century;
    }

    return century + 1;
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */

function colorsProblem(hexColor) {
    if (!(typeof hexColor === 'string')) {
        throw new TypeError();
    }
    if (!(/^#[a-f0-9]{6}$/i.test(hexColor))) {
        throw new RangeError();
    }
    const red = parseInt(hexColor.slice(1, 3), 16);
    const green = parseInt(hexColor.slice(3, 5), 16);
    const blue = parseInt(hexColor.slice(5, 7), 16);

    return `(${red}, ${green}, ${blue})`;
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    if (!(typeof n === 'number')) {
        throw new TypeError();
    }
    if (!(n > 0 && Math.trunc(n) === n)) {
        throw new RangeError();
    }
    let current = 1;
    let previous = 1;
    for (let i = 2; i < n; i++) {
        const storage = current;
        current = previous + current;
        previous = storage;
    }

    return (current);
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function transpose(matrix) {
    const result = new Array(matrix[0].length);
    for (let i = 0; i < matrix[0].length; i++) {
        result[i] = new Array(matrix.length);
        for (let j = 0; j < matrix.length; j++) {
            result[i][j] = matrix[j][i];
        }
    }

    return result;
}

function matrixProblem(matrix) {
    if (!Array.isArray(matrix) || matrix.length === 0) {
        throw new TypeError();
    }
    if (matrix[0].length === 0) {
        return [[]];
    }
    for (let i = 0; i < matrix.length; i++) {
        if (!(Array.isArray(matrix[i]) && matrix[i].length === matrix[0].length)) {
            throw new TypeError();
        }
    }

    return transpose(matrix);
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
    if (!(typeof n === 'number' && typeof targetNs === 'number' &&
        Math.trunc(targetNs) === targetNs)) {
        throw new TypeError();
    }

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
    if (!(typeof phoneNumber === 'string')) {
        throw new TypeError('Ожидается строка');
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
    if (!(typeof text === 'string')) {
        throw new TypeError();
    }
    const matchLeftSmile = text.match(/:-\)/g);
    const matchRightSmile = text.match(/\(-:/g);
    let result = 0;
    if (!(matchRightSmile === null)) {
        result += matchRightSmile.length;
    }
    if (!(matchLeftSmile === null)) {
        result += matchLeftSmile.length;
    }

    return result;
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

    return checkDiagonalsOrDraw(field);
}

function checkDiagonalsOrDraw(field) {
    let leftDiagonal = 0;
    let rightDiagonal = 0;
    const diagonal = field[1][1];
    for (let i = 0, j = 2; i < 3 && j >= 0; i++, j--) {
        if (diagonal === field[i][i]) {
            leftDiagonal += 1;
        }
        if (diagonal === field[i][j]) {
            rightDiagonal += 1;
        }
    }
    if (leftDiagonal === 3 || rightDiagonal === 3) {
        return diagonal;
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
