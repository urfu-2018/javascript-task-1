'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (!isNumber(a) || !isNumber(b)) {
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
    if (!isNumber(year) || !Number.isInteger(year)) {
        throw new TypeError();
    }
    if (year < 0) {
        throw new RangeError();
    }
    let century = Math.floor(year / 100);
    if (year % 100 !== 0) {
        century += 1;
    }

    return century;

}

function isTypeOf(obj, type) {
    return obj && typeof obj === type;
}

function isNumber(obj) {
    return isTypeOf(obj, 'number');
}

function isString(obj) {
    return isTypeOf(obj, 'string');
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
    if (!isString(hexColor) || hexColor.length !== 7 || !hexColor.startsWith('#')) {
        throw new TypeError();
    }
    hexColor = hexColor.substring(1);
    const correctHexColor = /[A-Fa-f\d]{6}/;
    if (!correctHexColor.test(hexColor)) {
        throw new RangeError();
    }

    let rgbColor = {
        R: 0,
        G: 0,
        B: 0
    };
    rgbColor.R = parseInt(hexColor[0] + hexColor[1], 16);
    rgbColor.G = parseInt(hexColor[1] + hexColor[2], 16);
    rgbColor.B = parseInt(hexColor[3] + hexColor[4], 16);

    return `(${rgbColor.R}, ${rgbColor.G}, ${rgbColor.B})`;
}

const fibCache = {
    0: 0,
    1: 1
};

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    if (!isNumber(n)) {
        throw new TypeError();
    }
    if (!Number.isInteger(n) || n < 0) {
        throw new RangeError();
    }

    if (n in fibCache) {
        return fibCache[n];
    }
    fibCache[n] = fibCache[n - 1] + fibCache[n - 2];

    return fibCache[n];

}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (isUndefined(matrix) ||
        matrix[0].constructor !== Array || matrix[0][0].constructor === Array) {
        throw new TypeError();
    }
    const M = matrix.length;
    const N = matrix[0].length;
    var transported = new Array(N);
    for (let i = 0; i < N; i++) {
        transported[i] = new Array(M);
        for (let j = 0; j < M; j++) {
            transported[i][j] = matrix[j][i];
        }
    }

    return transported;
}

function isUndefined(matrix) {
    return !matrix || !matrix[0];
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
    if (!isNumber(n) || !isNumber(targetNs) || !Number.isInteger(targetNs)) {
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
    const regexp = /^8-800-\d{3}-\d{2}-\d{2}$/;
    const match = phoneNumber.match(regexp);

    return match && match.index === 0;
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (!isString(text)) {
        throw new TypeError();
    }
    const regexp = /(\(-:|:-\))+/g;
    const match = text.match(regexp);

    return match ? match.length : 0;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    let {
        crossWin,
        circleWin
    } = checkWinningSequences(field);

    if (crossWin === circleWin) {
        return 'draw';
    }
    if (circleWin) {
        return 'o';
    }

    return 'x';
}

function checkWinningSequences(field) {
    const transported = matrixProblem(field);
    const allFields = [field, transported];
    let {
        crossWin,
        circleWin
    } = checkRowsAndColumns(allFields);

    for (let j = 0; j < 2; j++) {
        crossWin = crossWin || checkMainDiagonal(allFields[j], 'x');
        circleWin = circleWin || checkMainDiagonal(allFields[j], 'o');
    }

    return {
        crossWin: crossWin,
        circleWin: circleWin
    };
}

function checkRowsAndColumns(allFields) {
    let {
        crossWin,
        circleWin
    } = false;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 2; j++) {
            let field = allFields[j];
            crossWin = crossWin || checkRow(field, i, 'x');
            circleWin = circleWin || checkRow(field, i, 'o');
        }
    }

    return {
        crossWin: crossWin,
        circleWin: circleWin
    };
}

function checkRow(field, i, player) {
    if ((field[i][0] === field[i][1]) && (field[i][1] === field[i][2])) {
        return field[i][0] === player;
    }

    return false;
}

function checkMainDiagonal(field, player) {
    if ((field[0][0] === field[1][1]) && (field[1][1] === field[2][2])) {
        return field[0][0] === player;
    }

    return false;
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
