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
    if (typeof year !== 'number') {
        throw new TypeError('Invalid argument type');
    }

    if (year < 0 || !Number.isInteger(year)) {
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

    if (matchResult.length !== 4) {
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
    if (typeof n !== 'number') {
        throw new TypeError('Invalid argument type');
    }

    if (!Number.isInteger(n) || n < 0) {
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

function matrixProblem(matrix, shouldValidate = true) {
    function isCorrectMatrix(matrixArray) {
        if (!Array.isArray(matrixArray) || !Array.isArray(matrixArray[0])) {
            return false;
        }

        const n = matrixArray.length;
        if (n === 0) {
            return false;
        }
        const m = matrixArray[0].length;

        for (let i = 1; i < n; i++) {
            const currentRowLength = matrixArray[i].length;
            if (currentRowLength !== m) {
                return false;
            }
        }

        return true;
    }

    if (shouldValidate) {
        if (!isCorrectMatrix(matrix)) {
            throw new TypeError('expecting matrix as 2D array');
        }
    }

    return matrix[0].map((x, i) => matrix.map(y => y[i]));
}

function isCorrectNS(ns) {
    return Number.isInteger(ns) && ns >= 2 && ns <= 36;
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
        throw new TypeError('invalid argument\'s type');
    }

    if (!Number.isInteger(n) || !isCorrectNS(targetNs)) {
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

    return text.match(smileRegex).length;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    function distinctArray(array) {
        return array.filter(function (elem, pos) {
            return array.indexOf(elem) === pos;
        });
    }

    function checkRows(matrix) {
        for (let i = 0; i < 3; i++) {
            if (distinctArray(matrix[i]).length === 1) {
                return matrix[i][0];
            }
        }

        return false;
    }

    const rowWin = checkRows(field);
    if (rowWin) {
        return rowWin;
    }

    const columnWin = checkRows(matrixProblem(field, false));
    if (columnWin) {
        return columnWin;
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
