'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
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
    if (typeof year !== 'number') {
        throw new TypeError();
    }
    if (typeof year < 0) {
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
    if (typeof hexColor !== 'string') {
        throw new TypeError();
    }
    if (hexColor.match(/^#[a-fA-F0-9]{6}$/i) === 0) {
        throw new RangeError();
    }

    let str = hexColor.substring(1);
    let newstr = str.match(/.{2}/g);
    const r = parseInt(newstr[0], 16);
    const g = parseInt(newstr[1], 16);
    const b = parseInt(newstr[2], 16);

    return ('(' + r + ', ' + g + ', ' + b + ')');
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
        throw new TypeError();
    }
    if (n < 0) {
        throw new RangeError();
    }
    let firstnum = 1;
    let secnum = 1;
    if (Number.isInteger(n)) {
        for (let i = 2; i < n; i++) {
            let currentnum = firstnum + secnum;
            firstnum = secnum;
            secnum = currentnum;
        }
    }

    return secnum;

}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */

// Ваше решение
function matrixProblem(a) {

    let w = a.length || 0;
    let h = a[0] instanceof Array ? a[0].length : 0;
    let t = [];

    if (!Array.isArray(a)) {
        throw new TypeError();
    }
    for (let i = 0; i < h; i++) {
        t[i] = [];
        for (let j = 0; j < w; j++) {
            t[i][j] = a[j][i];
        }
    }

    return t;
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
    if (typeof n !== 'number' || typeof targetNs !== 'number') {
        throw new TypeError ();
    } else if (targetNs < 2 || targetNs > 36) {
        throw new RangeError();
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
    if (typeof phoneNumber !== 'string') {
        throw new TypeError();
    }

    return /(^8-800-[0-9]{3}-[0-9]{2}-[0-9]{2}$)/.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (typeof text !== 'string') {
        throw new TypeError();
    }
    const happysmileis = text.match(/\(-:/g) || [];
    const sadsmileis = text.match(/:-\)/g) || [];

    return happysmileis.length + sadsmileis.length;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    if ((field[0][0] === field[1][1] && field[1][1] === field[2][2]) ||
        field[0][2] === field[1][1] && field[1][1] === field[2][0]) {
        return field[1][1];
    }
    for (let i = 0; i < 3; i++) {
        if (field[i][0] === field[i][1] && field[i][1] === field[i][2]) {
            return field[i][0];
        }
        if (field[0][i] === field[1][i] && field[1][i] === field[2][i]) {
            return field[0][i];
        }
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

