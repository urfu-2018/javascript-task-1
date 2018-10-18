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
        throw new TypeError('a и b должны быть числами');
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
        throw new TypeError('Год - число');
    }
    if (year <= 0) {
        throw new RangeError('Год - целое положительное число');
    }

    return (year / 100) + 1;
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
        throw new TypeError('Цвет - hex строка');
    }
    if (!RegExp.test('/#[0-9A-Fa-f]{6}/g')) {
        throw new RangeError('Цвета выходят за пределы допустимых');
    }

    return '(' + hexColor
        .substr(1)
        .match(/..?/g)
        .join(', ') + ')';
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
        throw new TypeError('n - число');
    }
    if (n < 0) {
        throw new RangeError('n - целое положительное число');
    }
    const fibNumbs = [0, 1];
    for (let i = 2; i <= n; ++i) {
        fibNumbs.push(fibNumbs[i - 1] + fibNumbs[i - 2]);
    }

    return fibNumbs.pop();
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (typeof matrix.constructor !== Array || typeof matrix[0].constructor !== Array) {
        throw new TypeError('не двумерный массив');
    }
    const create = (amount) => new Array(amount).fill(0);
    const createMatrix = (rows, cols) => create(cols).map((o, i) => create(rows));
    const newMatrix = createMatrix(matrix[0].length, matrix.length);
    for (let i = 0; i < matrix.length; ++i) {
        for (let j = 0; j < matrix[i].length; ++j) {
            newMatrix[j][i] = matrix[i][j];
        }
    }

    return newMatrix;
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
    if (typeof n !== 'number' || typeof targetNs !== 'number') {
        throw new TypeError('На вход подаются числа');
    }
    if (targetNs < 2 || targetNs > 36) {
        throw new RangeError('Очнование системы счисления - число от 2 до 36');
    }

    return toString(parseInt(toString(n), targetNs));
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    if (typeof phoneNumber !== 'string') {
        throw new TypeError('Номер телефона строка');
    }

    return RegExp.test(phoneNumber, '/8-800-[0-9]{3}-[0-9]{2}-[0-9]{2}/g');
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (typeof text !== 'string') {
        throw new TypeError('в качестве аргумента передаётся строка');
    }
    let cnt = 0;
    for (let i = 2; i < text.length; ++i) {
        if (text[i - 2] === '(' && text[i - 1] === '-' && text[i] === ':' ||
            text[i - 2] === ':' && text[i - 1] === '-' && text[i] === ')') {
            ++cnt;
        }
    }

    return cnt;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    let o = false;
    let x = false;
    const firstDiag = threeSame({ 'x': 0, 'y': 0 }, { 'x': 1, 'y': 1 }, field);
    const secondDiag = threeSame({ 'x': 0, 'y': 2 }, { 'x': 1, 'y': -1 }, field);
    o = o || oneIs(firstDiag, secondDiag, 'o');
    x = x || oneIs(firstDiag, secondDiag, 'x');
    for (let i = 0; i < 3; ++i) {
        const a = threeSame({ 'x': i, 'y': 0 }, { 'x': 1, 'y': 0 }, field);
        const b = threeSame({ 'x': 0, 'y': i }, { 'x': 0, 'y': 1 }, field);
        o = o || oneIs(a, b, 'o');
        x = x || oneIs(a, b, 'x');
    }
    if (o) {
        return 'o';
    }
    if (x) {
        return 'x';
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


function threeSame(start, shift, field) {
    const base = field[start.x][start.y];
    let cnt = 0;
    for (let i = 1; i < 3; ++i) {
        start.x += shift.x;
        start.y += shift.y;
        if (base === field[start.x][start.y]) {
            ++cnt;
        }
    }
    if (cnt === 3) {
        return base;
    }

    return null;
}

function oneIs(a, b, s) {
    return a === s || b === s;
}
