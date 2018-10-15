'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        return (a + b);
    }
    throw TypeError;
}

/**
 * Определяет век по году
 * @param {Number} year Год, целое положительное число
 * @throws {TypeError} Когда в качестве года передано не число
 * @throws {RangeError} Когда год – отрицательное значение
 * @returns {Number} Век, полученный из года
 */
function centuryByYearProblem(year) {
    if (Number.isInteger(year) > 0) {
        return (Math.trunc(year / 100) + 1);
    }
    throw RangeError;
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
    if (typeof(hexColor) === 'string' && ((hexColor.length) = 6)) {
        const clearHex = hexColor.substring(1, 7);
        const r = parseInt(clearHex.substring(0, 2), 16);
        const g = parseInt(clearHex.substring(2, 4), 16);
        const b = parseInt(clearHex.substring(4, 6), 16);
        if ((r, g, b) <= 255 && (r, g, b) >= 0) {
            return (r + ',' + g + ',' + b);
        }
        throw RangeError;
    }
    throw TypeError;
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
        throw RangeError;
    }
    if (Number.isInteger(n) > 0) {
        if (n <= 2) {
            return 1;
        }
        const fn = 1;
        const fnmin1 = 0;
        for (let i = 1; i < n; i++) {
            fn += fnmin1;
            fnmin1 = fn - fnmin1;
        }

        return fnmin1;

        // return (fibonacciProblem(n-1)+fibonacciProblem(n-2));
    }
    throw RangeError;
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (!((Array.isArray(matrix) && Array.isArray(matrix[0])))) {
        throw TypeError;
    }
    const M = matrix.length;
    const N = matrix[0].length;
    const transpMatrix = [];
    for (let i = 0; i < N; i++) {
        transpMatrix[i] = [];
        for (let j = 0; j < M; j++) {
            transpMatrix[i][j] = matrix[j][i];
        }
    }

    return transpMatrix;
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
    if (!(typeof(n) === 'number' && typeof(targetNs) === 'number')) {
        throw TypeError;
    }
    if (targetNs <= 36 || targetNs >= 2) {
        const transfer = [];
        const i = 1;
        let rem = n / targetNs;
        transfer[0] = n % targetNs;
        while (rem !== 0) {
            rem /= targetNs;
            transfer[i] = rem % targetNs;
            i++;
        }

        return (toString((transfer.reverse()).join()));
    }
    throw RangeError;
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    if (phoneNumber.substring(0, 1) === '8' &&
    phoneNumber.substring(1, 2) === '–' &&
    phoneNumber.substring(2, 5) === '800' &&
    phoneNumber.substring(5, 6) === '–' &&
    (phoneNumber.substring(6, 9)).length === 3 &&
    typeof((phoneNumber.substring(6, 9))) === 'number' &&
    phoneNumber.substring(9, 10) === '–' &&
    typeof((phoneNumber.substring(10, 12))) === 'number' &&
    (phoneNumber.substring(10, 12)).length === 2 &&
    phoneNumber.substring(12, 13) === '–' &&
    typeof((phoneNumber.substring(13, 15))) === 'number' &&
    (phoneNumber.substring(13, 15)).length === 2) {

        return true;
    }

    return false;
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (!(typeof(text) === 'string')) {
        throw TypeError;
    }
    let numofSmile = 0;
    const currentPos = 0;
    const allSmile = 0;
    while (numofSmile !== -1) {
        numofSmile = text.indexOf('(-:' || ':-)', currentPos);
        currentPos = numofSmile + 1;
        allSmile += 1;
    }

    return allSmile;
}

/*
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function checkLineonField(str) {
    if (str[0] === str[1] === str[2]) {
        return str[0];
    }
}

function checkFieldonHorizontal(field) {
    for (let i = 0; i <= 2; i++) {
        if (checkLineonField(field[i]) === 'x' || checkLineonField(field[i]) === 'o') {
            return checkLineonField(field[i]);
        }
    }
}

function checkFieldonVertical(field) {
    field = matrixProblem(field);
    for (let i = 0; i <= 2; i++) {
        if (checkLineonField(field[i]) === 'x' || checkLineonField(field[i]) === 'o') {
            return checkLineonField(field[i]);
        }
    }
}

function ticTacToeProblem(field) {
    if (checkFieldonHorizontal(field)) {
        return checkFieldonHorizontal(field);
    }
    if (checkFieldonVertical(field)) {
        return checkFieldonVertical(field);
    }
    if (field[0][0] === field[1][1] === field[2][2]) {
        return field[1][1];
    }
    if (field[0][2] === field[1][1] === field[2][0]) {
        return field[1][1];
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
