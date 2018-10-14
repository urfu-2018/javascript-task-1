'use strict';

// /**
//  * Складывает два целых числа
//  * @param {Number} a Первое целое
//  * @param {Number} b Второе целое
//  * @throws {TypeError} Когда в аргументы переданы не числа
//  * @returns {Number} Сумма аргументов
//  */
function abProblem(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError();
    }

    return a + b;// Ваше решение
}

// /**
//  * Определяет век по году
//  * @param {Number} year Год, целое положительное число
//  * @throws {TypeError} Когда в качестве года передано не число
//  * @throws {RangeError} Когда год – отрицательное значение
//  * @returns {Number} Век, полученный из года
//  */
function centuryByYearProblem(year) {
    if (typeof year !== 'number') {
        throw new TypeError();
    }

    if (!Number.isInteger(year) || year < 0) {
        throw new RangeError();
    }

    return Math.trunc((year - 1) / 100) + 1;// Ваше решение
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
    if (typeof hexColor !== 'string' || !(/#[0-9A-Fa-f]{6}/g.test(hexColor))) {
        throw new TypeError();
    }
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);
    const r = parseInt(result[1], 16);
    const g = parseInt(result[2], 16);
    let b = parseInt(result[3], 16);
    if (!isValid(r, g, b)) {
        throw new RangeError();
    }

    return '(' + r + ', ' + g + ', ' + b + ')';
}

function isValid(r, g, b) {
    if (r > 255 || g > 255 || b > 255) {
        return false;
    }

    return true;
}

// /**
//  * Находит n-ое число Фибоначчи
//  * @param {Number} n Положение числа в ряде Фибоначчи
//  * @throws {TypeError} Когда в качестве положения в ряде передано не число
//  * @throws {RangeError} Когда положение в ряде не является целым положительным числом
//  * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
//  */
function fibonacciProblem(n) {
    if (typeof n !== 'number') {
        throw new TypeError();
    }
    if (!Number.isInteger(n) || n <= 0) {
        throw new RangeError();
    }

    let a = 1;
    let b = 1;
    let temp;
    for (let i = 2; i <= n; i++) {
        temp = a;
        a = a + b;
        b = temp;
    }

    return b;
}

// /**
//  * Транспонирует матрицу
//  * @param {(Any[])[]} matrix Матрица размерности MxN
//  * @throws {TypeError} Когда в функцию передаётся не двумерный массив
//  * @returns {(Any[])[]} Транспонированная матрица размера NxM
//  */
function matrixProblem(matrix) {
    if (!Array.isArray(matrix) || !Array.isArray(matrix[0])) {
        throw new TypeError();
    }

    return matrix[0].map((col, i) => matrix.map(row => row[i]));
}

// /**
//  * Переводит число в другую систему счисления
//  * @param {Number} n Число для перевода в другую систему счисления
//  * @param {Number} targetNs Система счисления, в которую нужно перевести (Число от 2 до 36)
//  * @throws {TypeError} Когда переданы аргументы некорректного типа
//  * @throws {RangeError} Когда система счисления выходит за пределы значений [2, 36]
//  * @returns {String} Число n в системе счисления targetNs
//  */
function numberSystemProblem(n, targetNs) {
    if (!Number.isInteger(n) || !Number.isInteger(targetNs)) {
        throw new TypeError();
    }
    if (targetNs < 2 || targetNs > 36) {
        throw new RangeError();
    }

    return parseInt(n)
        .toString(targetNs);
}

// /**
//  * Проверяет соответствие телефонного номера формату
//  * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
//  * @returns {Boolean} Если соответствует формату, то true, а иначе false
//  */
function phoneProblem(phoneNumber) {
    if (typeof phoneNumber !== 'string') {
        throw new TypeError();
    }

    return /^8-800-[0-9]{3}-[0-9]{2}-[0-9]{2}$/.test(phoneNumber);
}

// /**
//  * Определяет количество улыбающихся смайликов в строке
//  * @param {String} text Строка в которой производится поиск
//  * @throws {TypeError} Когда в качестве аргумента передаётся не строка
//  * @returns {Number} Количество улыбающихся смайликов в строке
//  */
function smilesProblem(text) {
    if (typeof text !== 'string') {
        throw new TypeError();
    }
    let count = 0;
    for (let i = 0; i < text.length - 2; i++) {
        if (text[i] === '(' && text[i + 1] === '-' && text[i + 2] === ':') {
            count++;
            i += 2;
            continue;
        }
        if (text[i] === ':' && text[i + 1] === '-' && text[i + 2] === ')') {
            count++;
            i += 2;
            continue;
        }
    }

    return count;
}

// /**
//  * Определяет победителя в игре "Крестики-нолики"
//  * Тестами гарантируются корректные аргументы.
//  * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
//  * @returns {'x' | 'o' | 'draw'} Результат игры
//  */
function ticTacToeProblem(field) {
    function checkRow(pos, i) {
        for (let j = 1; j < field[i].length; j++) {
            if (field[i][j] !== pos) {
                break;
            }

            return true;
        }

        return false;
    }

    let count = 0;
    let pos = '';


    for (let i = 0; i < field.length; i++) {
        if (pos === field[i][0]) {
            count++;
        }
        pos = field[i][0];

        if (checkRow(pos, i)) {
            return pos;
        }
    }
    if (count === 3) {
        return pos;
    }

    return checkDiag(field);
}

function checkDiag(field) {
    if (field[0][0] === field[1][1] && field[0][0] === field[2][2] ||
        field[0][2] === field[1][1] && field[0][2] === field[2][0]) {
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
    ticTacToeProblem,
    checkDiag,
    isValid
};
