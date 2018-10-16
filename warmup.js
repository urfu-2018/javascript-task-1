'use strict';

function numberIsInteger(number) {
    return number % 1 === 0;
}

function range(size, startAt = 0) {
    return [...Array(size).keys()].map(i => i + startAt);
}

function isNumber(num) {
    return Number.isFinite(num);
}

function isString(str) {
    return typeof(str) === 'string' || str instanceof String;
}

function isArray(arr) {
    return Array.isArray(arr);
}

function assertIfTypesDoNotMatch(args, types) {
    for (let i = 0; i < args.length; ++i) {
        if (!(types[i](args[i]))) {
            throw new TypeError(`${args[i]} has incorrect type.`);
        }
    }
}


/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    assertIfTypesDoNotMatch([a, b], [isNumber, isNumber]);

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
    assertIfTypesDoNotMatch([year], [Number.isInteger]);
    if (year >= 0) {
        return Math.floor((year - 1) / 100) + 1;
    }
    throw new RangeError('Year is less than zero');
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
    const HEX_COLOR_RE = /^#[0-9a-fA-F]{6}$/;

    assertIfTypesDoNotMatch([hexColor], [isString]);
    if (HEX_COLOR_RE.test(hexColor)) {
        let color = [];
        for (let i = 1; i < 7; i += 2) {
            color.push(parseInt(hexColor.substr(i, 2), 16));
        }

        return `(${color.join(', ')})`;
    }
    throw new RangeError(`hexColor ${hexColor} contains not allowed symbols or has invalid length`);
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    assertIfTypesDoNotMatch([n], [isNumber]);
    if (numberIsInteger(n) && n > 0) {
        let current = 1;
        let next = 1;
        for (let i = 1; i < n; ++i) {
            let afterNext = current + next;
            current = next;
            next = afterNext;
        }

        return current;
    }
    throw new RangeError(`Number should be positive, given ${n}`);
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    assertIfTypesDoNotMatch([matrix], [isArray]);
    if (!matrix.every(arr => arr instanceof Array && arr.length === matrix[0].length)) {
        throw new TypeError('Matrix elements are not arrays of same lengths.');
    }
    let m = matrix.length;
    let n = matrix[0].length;
    let transposed = Array(n)
        .fill(0)
        // eslint-disable-next-line no-unused-vars
        .map(_ => Array(m).fill(0));
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            transposed[j][i] = matrix[i][j];
        }
    }

    return transposed;
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
    assertIfTypesDoNotMatch([n, targetNs], [isNumber, isNumber]);
    if (range(35, 2).findIndex(x => x === targetNs) === -1) {
        throw new RangeError('targetNs is not integet between 2 and 36');
    }

    return n.toString(targetNs);
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    assertIfTypesDoNotMatch([phoneNumber], [isString]);
    const PHONE_RE = /^8-800-\d{3}-\d{2}-\d{2}$/;

    return PHONE_RE.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    assertIfTypesDoNotMatch([text], [isString]);

    return (text.match(/:-\)/g) || []).length;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
// eslint-disable-next-line complexity
function ticTacToeProblem(field) {
    let transposed = matrixProblem(field);
    let winner;
    function winnerAtLine(index, game) {
        return (game[index].every(ch => ch === game[index][0])) ? game[index][0] : undefined;
    }
    function winnerAtMainDiagonal(game) {
        return (game[0][0] === game[1][1] && game[0][0] === game[2][2]) ? game[0][0] : undefined;
    }

    for (let index = 0; index < 3; ++index) {
        winner = winner || winnerAtLine(index, field) || winnerAtLine(index, transposed);
    }
    winner = winner || winnerAtMainDiagonal(field) || winnerAtMainDiagonal(transposed);

    return winner || 'draw';
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
