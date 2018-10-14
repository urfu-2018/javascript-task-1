'use strict';

// /**
//  * Складывает два целых числа
//  * @param {Number} a Первое целое
//  * @param {Number} b Второе целое
//  * @throws {TypeError} Когда в аргументы переданы не числа
//  * @returns {Number} Сумма аргументов
//  */
function abProblem(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
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

    return Math.ceil(year / 100);// Ваше решение
}

function colorsProblem(hexColor) {
    if (typeof hexColor !== 'string') {
        throw new TypeError();
    }
    if (!(/#[0-9A-Fa-f]{6}/g.test(hexColor))) {
        throw new RangeError();
    }
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);
    const r = parseInt(result[1], 16);
    const g = parseInt(result[2], 16);
    let b = parseInt(result[3], 16);

    return `(${r}, ${g}, ${b})`;
}

// /**
//  * Находит n-ое число Фибоначчи
//  * @param {Number} n Положение числа в ряде Фибоначчи
//  * @throws {TypeError} Когда в качестве положения в ряде передано не число
//  * @throws {RangeError} Когда положение в ряде не является целым положительным числом
//  * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
//  */
function fibonacciProblem(n) {
    if (!Number.isInteger(n)) {
        throw new TypeError();
    }
    if (n <= 0) {
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
    if (!Array.isArray(matrix) || !Array.isArray(matrix[0]) || matrix.length === 0) {
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
    if (typeof n !== 'number' || !Number.isInteger(targetNs)) {
        throw new TypeError();
    }
    if (targetNs < 2 || targetNs > 36) {
        throw new RangeError();
    }

    return n.toString(targetNs);
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
    for (let i = 0; i < 3; i++) {
        if (field[i][0] === field[i][1] && field[i][1] === field[i][2]) {
            return field[i][0];
        }
        if (field[0][i] === field[1][i] && field[1][i] === field[2][i]) {
            return field[0][i];
        }
    }
    if (field[0][0] === field[1][1] && field[1][1] === field[2][2] ||
        field[0][2] === field[1][1] && field[1][1] === field[2][0]) {
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
