'use strict';

function checkInt(obj) {
    return [
        typeof obj === 'number' && Number.isInteger(obj),
        new TypeError(`${obj} should be int`)
    ];
}

function checkUint(obj) {
    const [isInt, err] = checkInt(obj);

    return isInt ? [obj >= 0, new RangeError(`${obj} should be > 0`)] : [isInt, err];
}

const TYPE_CHECKERS = {
    int: checkInt,
    uint: checkUint
};

function checkArgsTypes(signature, args) {
    if (signature.length !== args.length) {
        throw new RangeError('signature and args should be equal length');
    }

    for (let i = 0; i < signature.length; i++) {
        const typeIsCorrect = signature[i] in TYPE_CHECKERS
            ? TYPE_CHECKERS[signature[i]]
            : e => [typeof e === signature[i],
                new TypeError(`${args[i]} should be ${signature[i]}`)];

        const [isCorrect, err] = typeIsCorrect(args[i]);
        if (!isCorrect) {
            throw err;
        }
    }
}


const HEX_COLOR_RE = /^#[\da-fA-F]{6}$/;
const SMILES_RE = /(:-\))|(\(-:)/g;
const PHONE_RE = /^8-800-\d{3}(-\d{2}){2}$/;

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    checkArgsTypes(['int', 'int'], [a, b]);

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
    checkArgsTypes(['uint'], [year]);

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
    checkArgsTypes(['string'], [hexColor]);

    if (!HEX_COLOR_RE.test(hexColor)) {
        throw new RangeError();
    }

    const [r, g, b] = hexColor.slice(1)
        .match(/.{1,2}/g)
        .map(e => parseInt(e, 16));

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
    checkArgsTypes(['uint'], [n]);
    if (n === 0) {
        throw new RangeError();
    }

    let [u, v] = [1, 1];
    for (let i = 0; i < n - 2; i++) {
        [u, v] = [v, u + v];
    }

    return v;
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

    if (!matrix.every(e => Array.isArray(e) && e.length === matrix[0].length)) {
        throw new TypeError();
    }

    const result = [];

    for (let i = 0; i < matrix.length; i++) {
        result.push([]);

        for (let j = 0; j < matrix[i].length; j++) {
            result[i].push(matrix[j][i]);
        }
    }

    return result;
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
    checkArgsTypes(['number', 'uint'], [n, targetNs]);

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
    checkArgsTypes(['string'], [phoneNumber]);

    return PHONE_RE.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    checkArgsTypes(['string'], [text]);
    const smiles = text.match(SMILES_RE);

    return smiles === null ? 0 : smiles.length;
}


function isLineWithOneSymbol(a, b, c) {
    return a === b && b === c;
}

function getDiagonalWinner(field) {
    if (isLineWithOneSymbol(field[0][0], field[1][1], field[2][2])) {
        return field[0][0];
    }

    if (isLineWithOneSymbol(field[0][2], field[1][1], field[2][0])) {
        return field[0][2];
    }

    return 'draw';
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    for (let i = 0; i < 3; i++) {
        if (isLineWithOneSymbol(field[i][0], field[i][1], field[i][2])) {
            return field[i][0];
        }
    }

    for (let j = 0; j < 3; j++) {
        if (isLineWithOneSymbol(field[0][j], field[1][j], field[2][j])) {
            return field[0][j];
        }
    }


    return getDiagonalWinner(field);
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
