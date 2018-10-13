'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (typeof (a) !== 'number' || typeof (b) !== 'number' ||
     !Number.isInteger(a) || !Number.isInteger(b)) {
        throw new TypeError('Аргументы должны быть целыми числами');
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
    if (typeof(year) !== 'number' || !Number.isInteger(year)) {
        throw new TypeError('Аргументы должен быть целым числом');
    }
    if (year <= 0) {
        throw new RangeError('Год должен быть положительным значением');
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
    if (typeof(hexColor) !== 'string') {
        throw new TypeError('Ожидается строка');
    }
    const hexRegex = new RegExp('^#[A-Fa-f0-9]{6}$');
    const matchRes = hexColor.match(hexRegex);
    if (matchRes === null) {
        throw new RangeError('Ожидается строка');
    }

    const red = parseInt(hexColor.slice(1, 3), 16);
    const green = parseInt(hexColor.slice(3, 5), 16);
    const blue = parseInt(hexColor.slice(5), 16);

    return `(${red}, ${green}, ${blue})`;

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
        throw new TypeError('Аргумент должен быть целым числом');
    }
    if (n <= 0 || !Number.isInteger(n)) {
        throw new RangeError('n должно быть положительным значением');
    }
    let f = 1;
    let s = 1;

    for (var i = 0; i < n - 2; i++) {
        var curr = f + s;
        f = s;
        s = curr;
    }

    return s;
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (!Array.isArray(matrix) || matrix.length === 0) {
        throw new TypeError('Передана не матрица');
    }
    const rowLen = matrix[0].length;
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i].length !== rowLen || !Array.isArray(matrix[i])) {
            throw new TypeError('Строки должны быть одинакового размера!');
        }
    }

    return matrix[0].map((col, b) => matrix.map(row => row[b]));
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
    if (typeof(n) !== 'number' || typeof(targetNs) !== 'number' || !Number.isInteger(targetNs)) {
        throw new TypeError('Аргументы должны быть числами');
    }
    if (targetNs < 2 || targetNs > 36) {
        throw new RangeError('Система счисления должна быть в промежутке [2, 36]');
    }

    return n.toString(targetNs);
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    const phoneRegex = new RegExp('8[–-]800[–-][0-9]{3}[–-][0-9]{2}[–-][0-9]{2}');
    if (typeof(phoneNumber) !== 'string') {
        throw new TypeError('Ожидается строка');
    }

    return phoneNumber.length === 15 && phoneRegex.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (typeof(text) !== 'string') {
        throw new TypeError('Ожидается строка');
    }
    const smile1Regex = new RegExp(':-\\)');
    const smile2Regex = new RegExp('\\(-:');

    return (text.match(smile1Regex) || []).length + (text.match(smile2Regex) || []).length;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    const rowCheck = existsRowWithSameSymbols(field);
    if (rowCheck !== false) {
        return rowCheck;
    }

    const columnCheck = existsColumnWithSameSymbols(field);
    if (columnCheck !== false) {
        return columnCheck;
    }
    if (isEquals(field[0][0], field[1][1], field[2][2]) ||
        isEquals(field[2][0], field[1][1], field[0][2])) {
        return field[1][1];
    }

    return 'draw';
}

function isEquals(a, b, c) {
    return a === b && b === c;
}

function existsRowWithSameSymbols(field) {
    for (let i = 0; i < field.length; i++) {
        if (isEquals(field[i][0], field[i][1], field[i][2])) {
            return field[i][0];
        }
    }

    return false;
}

function existsColumnWithSameSymbols(field) {
    for (let i = 0; i < 3; i++) {
        if (isEquals(field[0][i], field[1][i], field[2][i])) {
            return field[0][i];
        }
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
