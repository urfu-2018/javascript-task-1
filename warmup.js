'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (typeof(a) !== 'number' || typeof(b) !== 'number') {
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
    if (typeof(year) !== 'number') {
        throw new TypeError();
    } else if (year <= 0) {
        throw new RangeError();
    }

    return Math.floor(year / 100) + 1;
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
        throw new TypeError();
    } else if (!/^#(\d|[a-fA-F]){6}$/.test(hexColor)) {
        throw new RangeError();
    }

    return `(${parseInt(hexColor.substr(1, 2), 16)}, ` +
            `${parseInt(hexColor.substr(3, 2), 16)}, ` +
            `${parseInt(hexColor.substr(5, 2), 16)})`;
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
    } else if (n <= 0 || Math.floor(n) !== n) {
        throw new RangeError();
    }
    let recurceFib = currentN => {
        return currentN < 3 ? 1 : recurceFib(currentN - 1) + recurceFib(currentN - 2);
    };

    return recurceFib(n);
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (!Array.isArray(matrix) || !(() => {
        for (let i = 0; i < matrix.length; i++) {
            if (!Array.isArray(matrix[i]) || matrix[i].length !== matrix[0].length) {
                return false;
            }
        }

        return true;
    })) {
        throw new TypeError();
    }
    let transposedMatrix = new Array(matrix[0].length);
    for (let i = 0; i < matrix[0].length; i++) {
        transposedMatrix[i] = new Array(matrix.length);
        for (let j = 0; j < matrix.length; j++) {
            transposedMatrix[i][j] = matrix[j][i];
        }
    }

    return transposedMatrix;
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
    return n.toString(targetNs);
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    const REG = /^8-800-\d{3}-\d{2}-\d{2}$/;

    return REG.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    const COUNT_LEFT_SMILES = text.match(/:-\)/g) || [];
    const COUNT_RIGHT_SMILES = text.match(/\(-:/g) || [];
    const COUNT_STITCHED_SMILES = text.match(/\(-:-\)/g) || [];

    return COUNT_LEFT_SMILES.length +
        COUNT_RIGHT_SMILES.length -
        COUNT_STITCHED_SMILES.length;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    for (let i = 0; i < field.length; i++) {
        if (field[0][i] === field[1][i] && field[1][i] === field[2][i] ||
            field[i][0] === field[i][1] && field[i][1] === field[i][2]) {

            return field[i][i];
        }
    }

    return field[0][0] === field[1][1] && field[1][1] === field[2][2] ||
        field[2][0] === field[1][1] && field[1][1] === field[0][2]
        ? field[1][1] : 'draw';
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
