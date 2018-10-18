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
        throw new TypeError('передан неверный тип данных');
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
        throw new TypeError('передан неверный тип данных');
    }
    if (year < 0) {
        throw new RangeError('год не может быть отрицательным');
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
        throw new TypeError('передан неверный тип данных');
    }
    if (!/^#(([0-9]|[A-F]){6})$/.test(hexColor)) {
        throw new RangeError('цвет должен быть в пределах #000000 - #FFFFFF');
    }
    let rgbValues = [];
    for (let i = 0; i < 3; i++) {
        let rgbStringValue = hexColor.slice(2 * i + 1, 2 * i + 3);
        rgbValues.push(parseInt(rgbStringValue, 16));
    }
    let rgbColor = `(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]})`;

    return rgbColor;
}

function fibonacciStuff(n) {
    if (n === 1 || n === 2) {
        return 1;
    }

    return fibonacciStuff(n - 1) + fibonacciStuff(n - 2);

}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    if (!Number.isInteger(n)) {
        throw new TypeError('передан неверный тип данных');
    }
    if (n < 1) {
        throw new RangeError('порядковый номер не может быть отрицательным');
    }

    return fibonacciStuff(n);
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        if (!Array.isArray(matrix[i]) || matrix[i].length !== matrix[0].length) {
            throw new TypeError('передан неверный тип данных');
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
    if (typeof n !== 'number' || !Number.isInteger(targetNs)) {
        throw new TypeError('передан неверный тип данных');
    }
    if (targetNs < 2 || targetNs > 36) {
        throw new RangeError('неверная система счисления [2,36]');
    }

    return n.toString(targetNs);
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
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
        throw new TypeError('передан неверный тип данных');
    }
    let matches = text.match(/:-\)|\(-:/g);

    return matches ? matches.length : 0;
}


function checkHorizontal(field) {
    let winner;
    for (let i = 0; i < 3; i++) {
        winner = field[i][0] === field[i][1] && field[i][0] === field[i][2] ? field[i][0] : false;
    }

    return winner;
}
function checkDiagonal(field) {
    return field[0][0] === field[1][1] && field[0][0] === field[2][2] ? field[0][0] : false;
}

function checkSecondDiagonal(field) {
    return field[2][0] === field[1][1] && field[2][0] === field[0][2] ? field[2][0] : false;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {


    return checkHorizontal(field) || checkHorizontal(matrixProblem(field)) ||
        checkDiagonal(field) || checkSecondDiagonal(field) || 'draw';
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
