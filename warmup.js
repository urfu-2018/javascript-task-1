'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (Number.isInteger(a) === false || Number.isInteger(b) === false) {
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
    if (Number.isInteger(year) === false) {
        throw new TypeError();
    } else if (year < 0) {
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
    const regexpHex = /^#([A-Fa-f\d]{2})([A-Fa-f\d]{2})([A-Fa-f\d]{2})$/;

    if (typeof hexColor !== 'string') {
        throw new TypeError();
    } else if (!regexpHex.test(hexColor)) {
        throw new RangeError();
    }

    let rgb = regexpHex.exec(hexColor);
    rgb[1] = parseInt(rgb[1], 16);
    rgb[2] = parseInt(rgb[2], 16);
    rgb[3] = parseInt(rgb[3], 16);

    return `(${rgb[1]}, ${rgb[2]}, ${rgb[3]})`;
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    if (Number.isInteger(n) === false) {
        throw new TypeError();
    } else if (n <= 0) {
        throw new RangeError();
    }

    let a = 1;
    let b = 1;

    for (let i = 3; i <= n; i++) {
        const c = a + b;
        a = b;
        b = c;
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
    const m = matrix.length;
    const n = matrix[0].length;
    const transposedMatrix = [];

    let i = 0;
    let j = 0;

    for (i = 0; i < m; i++) {
        if (!Array.isArray(matrix[i]) || matrix[i].length !== n) {
            throw new TypeError();
        }
    }

    for (i = 0; i < n; i++) {
        transposedMatrix[i] = [];
        for (j = 0; j < m; j++) {
            transposedMatrix[i][j] = transposedMatrix[j][i];
        }
    }

    return transposedMatrix;
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
    if (Number.isInteger(n) === false || Number.isInteger(targetNs) === false) {
        throw new TypeError();
    } else if (targetNs < 2 || targetNs > 36) {
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
    const regexpPhone = /^8-800-[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

    return regexpPhone.test(phoneNumber);
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

    const left = /:-\)/g;
    const right = /\(-:/g;

    let count = (text.match(left) || []).length + (text.match(right) || []).length;

    return count;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    const transposedMatrix = matrixProblem(field);
    
    if (field[0][0] === field[1][1] && field[0][0] === field[2][2]) {
        return field[0][0];
    } else if (field[0][2] === field[1][1] && field[0][2] === field[2][0]) {
        return field[0][2];
    }

    let win = checkWinner(field);
    if (win) {
        return win;
    }

    win = checkWinner(transposedMatrix);
    if (win) {
        return win;
    }

    function checkWinner(fieldMatrix) {
        for (let i = 0; i < fieldMatrix; i++) {
            if (oneCharacterInRow[fieldMatrix[i]]) {
                return fieldMatrix[i][0];
            }
        }
    }

    function oneCharacterInRow(row) {
        return new Set(row).size === 1;
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
