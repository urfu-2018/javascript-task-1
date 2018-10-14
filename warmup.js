'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        return a + b;
    }
    const argumentsError = new TypeError();
    argumentsError.message = 'в аргументы переданы не числа';
    throw argumentsError;
}

/**
 * Определяет век по году
 * @param {Number} year Год, целое положительное число
 * @throws {TypeError} Когда в качестве года передано не число
 * @throws {RangeError} Когда год – отрицательное значение
 * @returns {Number} Век, полученный из года
 */
function centuryByYearProblem(year) {
    if (Number.isInteger(year) || Math.floor(year) !== year) {
        if (year < 0) {
            throw new RangeError('год – отрицательное значение');
        }
        if (year.toString().length < 3) {
            return 1;
        }
        const century = year.toString().slice(0, -2);

        return parseInt(century, 10) + 1;
    }
    throw new TypeError('в качестве года передано не число');
    // Ваше решение
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
    const HEXRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
    if (typeof hexColor !== 'string') {
        throw new TypeError('цвет передан не строкой');
    }
    if (!HEXRegex.test(hexColor)) {
        throw new RangeError('значения цвета выходят за пределы допустимых');
    }

    return hexColor.replace(HEXRegex, (m, r, g, b) => {
        return '(' + parseInt(r, 16) + ', ' + parseInt(g, 16) + ', ' + parseInt(b, 16) + ')';
    });
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
        throw new TypeError('передано не число');
    }
    if (n < 0 || Math.floor(n) !== n) {
        throw new RangeError('n-отрицательное число');
    }
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
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
    if (Array.isArray(matrix) && Array.isArray(matrix[0])) {
        return matrix[0].map((number, indexColumn) => matrix.map((line) => line[indexColumn]));
    }
    throw new TypeError('в функцию передаётся не двумерный массив');
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
        throw new TypeError('аргументы некорректного типа');
    }
    if (targetNs < 2 || targetNs > 36) {
        throw new RangeError('система счисления выходит за пределы значений [2, 36]');
    }

    return n.toString(targetNs);
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    return phoneNumber.search('^8-800-[0-9]{3}-[0-9]{2}-[0-9]{2}$') !== -1;
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (typeof text !== 'string') {
        throw new TypeError('аргумент не строка');
    }

    return (text.match(/:-\)/g) || []).length;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    let diagonal = '';
    let answer = '';
    let invertedDiagonal = '';
    for (let i = 0; i < field.length; i++) {
        const row = field[i][0] + field[i][1] + field[i][2];
        const col = field[0][i] + field[1][i] + field[2][i];
        diagonal += field[i][i];
        invertedDiagonal += field[i][field.length - (i + 1)];
        answer += row + col;
    }
    answer += diagonal + invertedDiagonal;
    if (answer.indexOf('xxx') !== -1) {
        return 'x';
    }
    if (answer.indexOf('ooo') !== -1) {
        return 'o';
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
