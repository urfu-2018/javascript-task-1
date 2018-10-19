/* eslint-disable space-infix-ops,no-trailing-spaces */
'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (typeof(a) !== 'number' || typeof(b) !== 'number') {
        throw new TypeError ();
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
    if (typeof(year) !== 'number' || !Number.isInteger((year))) {
        throw new TypeError();
    }
    if (year < 0) {
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
    const expression = new RegExp(/^#[0-9A-Fa-f]{6}$/g);
    if (typeof(hexColor) !== 'string') {
        throw new TypeError();
    }
    if (!expression.test(hexColor)) {
        throw new RangeError();
    }

    return ('(' + parseInt(hexColor.substring(1, 3), 16) + ', ' +
    parseInt(hexColor.substring(3, 5), 16) + ', ' +
    parseInt(hexColor.substring(5, 7), 16) + ')');
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
        throw new TypeError();
    }
    if (n < 1 || n !== Math.trunc(n)) {
        throw new RangeError();
    }
    let last = 1;
    let current = 1;
    let next = 1;
    if (n > 2) {
        for (let i = 3; i <= n; i++) {
            next = current + last;
            last = current;
            current = next;
        }
    }

    return current;
}


function matrixProblem(matrix) {
    if (!Array.isArray(matrix) || matrix.length === 0) {
        throw new TypeError();
    }
    let m = matrix.length;
    let n = matrix[0].length;
    const ans = [];
    for (let i = 0; i < n; i++) {
        ans[i] = [];
        for (let j = 0; j < m; j++) {
            ans[i][j] = matrix[j][i];
        }
    }

    return ans;
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
    if (!Number.isInteger(targetNs) || typeof(targetNs) !== 'number' || typeof(n) !== 'number') {
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
    const expression = new RegExp(/^8-800-[0-9]{3}-[0-9]{2}-[0-9]{2}$/g);

    return (typeof(phoneNumber) === 'string' && phoneNumber.length === 15 &&
    expression.test(phoneNumber));
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
    let count = 0;
    for (let i = 0; i < text.length - 2; i++) {
        if (text[i] === '(' && text[i + 1] === '-' && text[i + 2] === ':') {
            count++;
            i += 2;
        }
        if (text[i] === ':' && text[i + 1] === '-' && text[i + 2] === ')') {
            count++;
            i += 2;
        }
    }

    return count;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    const winner = 'draw';
    if (check(field) !== 'draw') {
        return (check(field));
    } else if (check(matrixProblem(field)) !== 'draw') {
        return check(matrixProblem(field));
    } else if (field[0][0] === field[1][1] && field[1][1] === field[2][2]) {
        return field[0][0];
    } else if (field[2][0] === field[1][1] && field[1][1] === field[0][2]) {
        return field[2][0];
    }

    return winner;
}
function check(field) {

    for (let i = 0; i < 3; i++) {
        if (line(field[i]) !== 'draw') {
            return line(field[i]);
        }
    }

    return 'draw';
}
function line(field) {
    if (field[0] === field[1] && field[1] === field[2]) {
        return field[0];
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
