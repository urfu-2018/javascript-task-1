'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new TypeError();
    }

    return a + b;
    // Ваше решение
}

/**
 * Определяет век по году
 * @param {Number} year Год, целое положительное число
 * @throws {TypeError} Когда в качестве года передано не число
 * @throws {RangeError} Когда год – отрицательное значение
 * @returns {Number} Век, полученный из года
 */
function centuryByYearProblem(year) {
    // Ваше решение
    if (!Number.isInteger(year)) {
        throw new TypeError ('Переданный параметр не является числом');
    } else if (year < 0) {
        throw new RangeError ('Значение года не может быть отрицательным числом!');
    } else {
        const result = Math.ceil(year / 100);

        return result;
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
    // Ваше решение
    if (typeof(hexColor) !== 'string') {
        throw new TypeError('Переданный параметр не является строкой');
    }
    checkColor(hexColor);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);
    const r = parseInt(result[1], 16);
    const g = parseInt(result[2], 16);
    const b = parseInt(result[3], 16);
    const answer = '(' + r + ', ' + g + ', ' + b + ')';
    if (r > 255 || g > 255 || b > 255) {
        throw new RangeError();
    }

    return answer;
}

function checkColor(hexColor) {
    if (hexColor.match(/#[\dA-Fa-f]{6}$/i) === null) {
        throw new RangeError();
    }
    if (hexColor.length > 7) {
        throw new RangeError();
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
    // Ваше решение
    if (!Number.isInteger(n)) {
        throw new TypeError ('Переданный параметр не является числом');
    } else if (n <= 0) {
        throw new RangeError('n не является целым положительным числом');
    }
    let fib1 = 1;
    let fib2 = 1;
    let fibSum = 1;
    let i = 2;
    while (i < n) {
        fibSum = fib1 + fib2;
        fib1 = fib2;
        fib2 = fibSum;
        i++;
    }

    return fibSum;
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (!Array.isArray(matrix) || matrix.length === 0) {
        throw new TypeError('Матрица не двумерна');
    }
    var res = [];
    for (var i = 0; i < matrix[0].length; i++) {
        res[i] = [];
        for (var j = 0; j < matrix.length; j++) {
            checkArray(matrix[j]);
            res[i][j] = matrix[j][i];
        }
    }

    return res;
}

function checkArray(matrix) {
    if (!Array.isArray(matrix)) {
        throw new TypeError('Матрица должна быть двумерной');
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
    // Ваше решение
    if (typeof(n) !== 'number') {
        throw new TypeError();
    }
    if (!isFinite(n) || !Number.isInteger(targetNs)) {
        throw new TypeError ('Переданныe параметры не являются числом');
    } else if (targetNs < 2 || targetNs > 36) {
        throw new RangeError('недопустимое значение системы счисления');
    } else {
        return n.toString(targetNs);
    }
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    // Ваше решение
    if (typeof(phoneNumber) !== 'string') {
        throw new TypeError('не строка');
    }
    let res = null;
    if (phoneNumber.length === 15) {
        res = phoneNumber.match(/8-800-[\d]{3}-[\d]{2}-[\d]{2}/);
    }

    return res !== null;
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    // Ваше решение
    if (typeof(text) !== 'string') {
        throw new TypeError ('Переданный параметр не является строкой');
    }
    let countOfSmiles = 0;
    for (let i = 0; i < text.length - 1; i++) {
        if (text[i] === ':' && text[i - 1] !== '-' && text[i + 1] === '-' && text[i + 2] === ')') {
            countOfSmiles++;
        }
        if (text[i] === '(' && text[i + 1] === '-' && text[i + 2] === ':') {
            countOfSmiles++;
        }
    }

    return countOfSmiles;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    // Ваше решение
    let result = '';
    const diagCheck = diagonalCheck(field);
    const lineCheck = linesCheck(field);
    const colCheck = columnCheck(field);
    if (diagCheck !== '') {
        result = diagCheck;
    }
    if (lineCheck !== '') {
        result = lineCheck;
    }
    if (colCheck !== '') {
        result = colCheck;
    }

    return result;
}

function diagonalCheck(field) {
    let dCh = '';
    if (field[0][0] === field[1][1] && field[0][0] === field[2][2]) {
        dCh = field[0][0];
    } else if (field[0][2] === field[1][1] && field[0][2] === field[2][0]) {
        dCh = field[0][2];
    } else {
        dCh = '';
    }

    return dCh;
}

function linesCheck(field) {
    let lCh = '';
    if (field[0][0] === field[0][1] && field[0][0] === field[0][2]) {
        lCh = field[0][0];
    } else if (field[1][0] === field[1][1] && field[1][0] === field[1][2]) {
        lCh = field[1][0];
    } else if (field[2][0] === field[2][1] && field[2][0] === field[2][2]) {
        lCh = field[2][0];
    } else {
        lCh = '';
    }

    return lCh;
}

function columnCheck(field) {
    let cCh = '';
    if (field[0][0] === field[1][0] && field[0][0] === field[2][0]) {
        cCh = field[0][0];
    } else if (field[0][1] === field[1][1] && field[0][1] === field[2][1]) {
        cCh = field[0][1];
    } else if (field[0][2] === field[1][2] && field[0][2] === field[2][2]) {
        cCh = field[0][2];
    } else {
        cCh = '';
    }

    return cCh;
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
