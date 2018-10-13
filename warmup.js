'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' ||
        !Number.isInteger(a) || !Number.isInteger(b)) {
        throw new TypeError('Invalid argument type');
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
    if (typeof year !== 'number' || !Number.isInteger(year)) {
        throw new TypeError('Invalid argument type');
    }

    if (year <= 0) {
        throw new RangeError('Year must be positive');
    }

    const yearsInCentury = 100;

    return Math.ceil(year / yearsInCentury);
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
        throw new TypeError('expecting hexColor as String');
    }

    const hexColorRegex = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i;
    const matchResult = hexColor.match(hexColorRegex);

    if (matchResult === null || matchResult.length !== 4) {
        throw new RangeError('invalid hexColor string format!');
    }

    const red = parseInt(matchResult[1], 16);
    const green = parseInt(matchResult[2], 16);
    const blue = parseInt(matchResult[3], 16);

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
    if (typeof n !== 'number' || !Number.isInteger(n)) {
        throw new TypeError('Invalid argument type');
    }

    if (n <= 0) {
        throw new RangeError('n must be positive');
    }

    let count = 2;
    let first = 1;
    let second = 1;
    while (count < n) {
        let temp = first + second;
        second = first;
        first = temp;
        count++;
    }

    return first;
}

function matrixProblem(matrix) {
    function isCorrectMatrix(matrixArray) {
        if (!Array.isArray(matrixArray) || matrixArray.length === 0) {
            return false;
        }

        for (let i = 0; i < matrixArray.length; i++) {
            if (!Array.isArray(matrix[i]) || matrix[i].length !== matrixArray[0].length) {
                return false;
            }
        }

        return true;
    }

    if (!isCorrectMatrix(matrix)) {
        throw new TypeError('expecting matrix as 2D array');
    }

    return matrix[0].map((x, i) => matrix.map(y => y[i]));
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
    function checkType(num, ns) {
        if (typeof num !== 'number' || typeof ns !== 'number' ||
            !Number.isInteger(num) || !Number.isInteger(ns)) {
            throw new TypeError('invalid argument\'s type');
        }
    }

    checkType(n, targetNs);

    if (targetNs < 2 || targetNs > 36) {
        throw new RangeError('invalid targetNs range');
    }

    return n.toString(targetNs);
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    const phoneRegex = /^8-800-\d{3}-\d{2}-\d{2}$/;

    return phoneRegex.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (typeof text !== 'string') {
        throw new TypeError('expected \'text\' as string');
    }

    const smileRegex = /:-\)|\(-:/g;
    const matchResult = text.match(smileRegex);

    if (matchResult === null) {
        return 0;
    }

    return matchResult.length;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    if ((field[0][0] === field[1][1] && field[1][1] === field[2][2]) ||
        (field[0][2] === field[1][1] && field[1][1] === field[2][0])) {
        return field[1][1];
    }

    for (let i = 0; i < 3; i++) {
        if (field[i][0] === field[i][1] && field[i][1] === field[i][2]) {
            return field[i][0];
        }

        if (field[0][i] === field[1][i] && field[1][i] === field[2][i]) {
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
