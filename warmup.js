'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (typeof(a) === 'number' && typeof(b) === 'number') {
        return a + b;
    }
    throw new TypeError();
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
    if (typeof(hexColor) === 'string' || hexColor.length !== 7) {
        if ((/^#[0-9,A-F,a-f]{6}/).test(hexColor)) {
            let redColor = parseInt(hexColor.substr(1, 2), 16);
            let greeenColor = parseInt(hexColor.substr(3, 2), 16);
            let blueColor = parseInt(hexColor.substr(5, 2), 16);

            return '(' + redColor + ', ' + greeenColor + ', ' + blueColor + ')';
        }
        throw new RangeError();
    }
    throw new TypeError();
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
        throw new TypeError();
    } else if (!Number.isInteger(n) || n <= 0) {
        throw new RangeError();
    }
    let firstAddend = 1;
    let secondAddend = 1;
    while (n > 2) {
        let i = secondAddend;
        secondAddend += firstAddend;
        firstAddend = i;
        n--;
    }

    return secondAddend;
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    let lengthMatrix = matrix.length;
    if (!Array.isArray(matrix) || lengthMatrix === 0 ||
    !matrix.every(x => Array.isArray(x) && x.length === matrix[0].length)) {
        throw new TypeError();
    }
    let lengthArr = matrix[0].length;
    let newMatrix = [];
    for (let i = 0; i < lengthArr; i++) {
        newMatrix[i] = [];
        for (let j = 0; j < lengthMatrix; j++) {
            newMatrix[i][j] = matrix[j][i];
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
    if (typeof(n) === 'number' && typeof(targetNs) === 'number' && Number.isInteger(targetNs)) {
        if (targetNs >= 2 && targetNs <= 36) {
            return n.toString(targetNs);
        }
        throw new RangeError();
    }
    throw new TypeError();
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    if (typeof(phoneNumber) !== 'string') {
        throw new TypeError();
    }

    return (/^8-800-[0-9]{3}-[0-9]{2}-[0-9]{2}$/).test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (typeof(text) !== 'string') {
        throw new TypeError();
    }

    let smiles = text.match(/\(-:|:-\)/);

    return smiles === null ? 0 : smiles.length;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    if ((field[0][0] === field[1][1] && field[2][2] === field[1][1]) ||
    (field[0][2] === field[1][1] && field[1][1] === field[2][0])) {
        return field[1][1];
    }
    for (let i = 0; i < field.length; i++) {
        if ((field[i][0] === field[i][1] && field[i][2] === field[i][1]) ||
        (field[0][i] === field[1][i] && field[2][i] === field[0][i])) {
            return field[i][i];
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
