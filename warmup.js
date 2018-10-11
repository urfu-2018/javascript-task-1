'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    function checkNumber(x) {
        if (typeof x !== 'number') {
            throw new TypeError();
        }
    }

    checkNumber(a);
    checkNumber(b);

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
    if (typeof year !== 'number' || !Number.isInteger(year)) {
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
    if (typeof hexColor !== 'string') {
        throw new TypeError();
    }
    if (!/^#[0-9A-Fa-f]{6}$/g.test(hexColor)) {
        throw new RangeError();
    }

    const getColor = colorString => {
        return parseInt(colorString, 16);
    };

    const r = getColor(hexColor.slice(1, 3));
    const g = getColor(hexColor.slice(3, 5));
    const b = getColor(hexColor.slice(5, 7));

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
    if (typeof n !== 'number') {
        throw new TypeError();
    }
    if (n < 1 || !Number.isInteger(n)) {
        throw new RangeError();
    }

    let current = 1;
    let previous = 1;
    for (let i = 0; i < n - 2; i++) {
        const sum = current + previous;
        previous = current;
        current = sum;
    }

    return current;
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (!(matrix instanceof Array) || matrix.length === 0) {
        throw new TypeError();
    }

    const firstRowLength = matrix[0].length;
    for (let i = 0; i < matrix.length; i++) {
        if (!(matrix[i] instanceof Array) || matrix[i].length !== firstRowLength) {
            throw new TypeError();
        }
    }

    return matrix[0].map((col, i) => matrix.map(row => row[i]));
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
    if (typeof n !== 'number' || typeof targetNs !== 'number' || !Number.isInteger(targetNs)) {
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

    return /^8-800-\d{3}-\d{2}-\d{2}$/.test(phoneNumber);
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

    const smiles = text.match(/(\(-:|:-\))/g);
    if (smiles !== null) {
        return smiles.length;
    }

    return 0;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    const columnsAndRowsCheckResult = checkRowsAndColumns(field);
    if (columnsAndRowsCheckResult.gameIsFinished) {
        return columnsAndRowsCheckResult.winner;
    }

    const diagonalCheckResult = checkDiagonals(field);
    if (diagonalCheckResult.gameIsFinished) {
        return diagonalCheckResult.winner;
    }

    return 'draw';
}

function checkDiagonals(field) {
    const diagonalOneIsStrike = field[0][0] === field[1][1] && field[1][1] === field[2][2];
    const diagonalTwoIsStrike = field[0][2] === field[1][1] && field[1][1] === field[2][0];
    if (diagonalOneIsStrike || diagonalTwoIsStrike) {
        return { gameIsFinished: true, winner: field[1][1] };
    }

    return { gameIsFinished: false, winner: undefined };
}

function checkRowsAndColumns(field) {
    for (let i = 0; i < field.length; i++) {
        const rowStart = field[i][0];
        const rowIsStrike = rowStart === field[i][1] && field[i][1] === field[i][2];
        const columnStart = field[0][i];
        const columnIsStrike = columnStart === field[1][i] && field[1][i] === field[2][i];
        if (rowIsStrike) {
            return { gameIsFinished: true, winner: rowStart };
        }
        if (columnIsStrike) {
            return { gameIsFinished: true, winner: columnStart };
        }
    }

    return { gameIsFinished: false, winner: undefined };
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
