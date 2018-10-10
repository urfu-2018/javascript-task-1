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
        throw new TypeError('В аргументы переданы не числа!');
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
    const century = Number(year);
    if (Number.isNaN(century)) {
        throw new TypeError('В качестве года передано не число!');
    } else if (century < 0) {
        throw new RangeError('В качестве года передано отрицательное значение!');
    } else {
        return Math.trunc(century / 100) + 1;
    }
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
    const hexColorPattern = new RegExp('^#[A-Fa-f0-9]{6}');
    if (typeof hexColor !== 'string') {
        throw new TypeError('Передана не строка!');
    } else if (hexColorPattern.test(hexColor)) {
        const colorBytes = hexColor.substring(1);

        return '(' + [
            parseInt(colorBytes.slice(0, 2), 16),
            parseInt(colorBytes.slice(2, 4), 16),
            parseInt(colorBytes.slice(4, 6), 16)
        ].join(', ') + ')';
    } else {
        throw new RangeError('Значения цвета выходят за пределы допустимых!');
    }
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    const number = Number(n);
    if (Number.isNaN(number)) {
        throw new TypeError('Передано не число!');
    } else if (number <= 0) {
        throw new RangeError('Передано не целое положительное число!');
    } else {
        let a = 1;
        let b = 1;
        for (let i = 3; i <= number; i++) {
            let c = a + b;
            a = b;
            b = c;
        }

        return b;
    }
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (matrix[0].constructor === Array && matrix[0][0].constructor !== Array) {
        return matrix[0].map((column, i) => matrix.map(row => row[i]));
    }
    throw new TypeError('Передан не двумерный массив!');
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
    if (Number.isNaN(n) || Number.isNaN(targetNs)) {
        throw new TypeError('Переданы аргументы некорректного типа');
    } else if (Number(targetNs) < 2 && Number(targetNs) > 36) {
        throw new RangeError('Система счисления выходит за пределы значений!');
    } else {
        return Number(n).toString(targetNs);
    }
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    const phoneNumberPattern = new RegExp('^8-800-[0-9]{3}(-[0-9]{2}){2}');

    return phoneNumberPattern.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (typeof text !== 'string') {
        throw new TypeError('Передана не строка!');
    } else {
        const smiles = text.split(' ');

        return smiles.reduce(function (sum, current) {
            if ((current.startsWith('(') && current.endsWith(':')) ||
                (current.startsWith(':') && current.endsWith(')'))) {
                return sum + 1;
            }

            return sum;
        }, 0);
    }
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    const diagonal1 = field[0][0] === field[1][1] && field[1][1] === field[2][2];
    const diagonal2 = field[0][2] === field[1][1] && field[1][1] === field[2][0];
    if (diagonal1 || diagonal2) {
        return field[1][1];
    }
    for (let i = 0; i < field.length; i++) {
        const row = field[i][0] === field[i][1] && field[i][1] === field[i][2];
        const col = field[0][i] === field[1][i] && field[1][i] === field[2][i];
        if (row) {
            return field[i][0];
        }
        if (col) {
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
