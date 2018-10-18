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
}

/**
 * Определяет век по году
 * @param {Number} year Год, целое положительное число
 * @throws {TypeError} Когда в качестве года передано не число
 * @throws {RangeError} Когда год – отрицательное значение
 * @returns {Number} Век, полученный из года
 */
function centuryByYearProblem(year) {
    if (!Number.isInteger(year)) {
        throw new TypeError();
    }
    if (year < 0) {
        throw new RangeError();
    }

    if (year % 100 === 0) {
        return year / 100;
    }

    return Math.floor(year / 100) + 1;
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
    if (typeof hexColor !== 'string' || hexColor.length !== 7) {
        throw new TypeError();
    }
    if (!/^#[0-9A-Fa-f]{6}$/.test(hexColor)) {
        throw new RangeError();
    }
    let fromHex = (x) => Number.parseInt(x, 16);
    let r = fromHex(hexColor.slice(1, 3));
    let g = fromHex(hexColor.slice(3, 5));
    let b = fromHex(hexColor.slice(5, 7));

    return `(${r}, ${g}, ${b})`;
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    if (typeof n !== 'number' || isNaN(n)) {
        throw new TypeError();
    }
    if (n < 1 || !Number.isInteger(n)) {
        throw new RangeError();
    }
    let a = 1;
    let b = 1;
    while (n > 2) {
        let t = b;
        b = a + b;
        a = t;
        --n;
    }

    return b;
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (!Array.isArray(matrix) || matrix.length === 0) {
        throw new TypeError();
    }

    let m = matrix.length;
    let n = matrix[0].length;

    for (let i = 0; i < m; ++i) {
        if (!Array.isArray(matrix[i]) || matrix[i].length !== n) {
            throw new TypeError();
        }
    }

    return logic(matrix);

    function logic() {
        if (n === 0) {
            throw new TypeError();
        }

        let arr = new Array(n);

        for (let i = 0; i < m; ++i) {
            arr[i] = new Array(m);
        }
        for (let i = 0; i < m; ++i) {
            for (let j = 0; j < n; ++j) {
                arr[j][i] = matrix[i][j];
            }
        }

        return arr;
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
    if (typeof n !== 'number' || !Number.isInteger(targetNs)) {
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
    if (typeof phoneNumber !== 'string') {
        throw new TypeError();
    }

    return /^8-800-[\d]{3}-[\d]{2}-[\d]{2}$/.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (typeof text !== 'string') {
        throw new TypeError ();
    }

    let m = text.match(/(\(-:|:-\))/g);

    return m === null ? 0 : m.length;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    let byRows = checkRows(field);
    let byCols = checkRows(matrixProblem(field));
    if (typeof byRows !== 'undefined' || typeof byCols !== 'undefined') {
        return byRows ? byRows : byCols;
    }

    return checkDiagonals(field);

    function checkRows(f) {
        for (let i = 0; i < 3; ++i) {
            if (f[i].reduce((x, y) => x && (y === f[i][0]), true)) {
                return f[i][0];
            }
        }

        return undefined;
    }

    function checkDiagonals(x) {
        if ((x[0][0] === x[1][1] && x[1][1] === x[2][2]) ||
            (x[2][0] === x[1][1] && x[1][1] === x[0][2])) {
            return x[1][1];
        }

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
