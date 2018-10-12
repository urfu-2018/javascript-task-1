'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (typeof a === 'number' && typeof b === 'number' && !Number.isNaN(a) && !Number.isNaN(b)) {
        return a + b;
    }
    throw new TypeError('В функцию были переданы не целые числа');
}

/**
 * Определяет век по году
 * @param {Number} year Год, целое положительное число
 * @throws {TypeError} Когда в качестве года передано не число
 * @throws {RangeError} Когда год – отрицательное значение
 * @returns {Number} Век, полученный из года
 */
function centuryByYearProblem(year) {
    if (typeof year === 'number' && year === parseInt(year) && !Number.isNaN(year)) {
        if (year >= 0) {
            return year % 100 ? parseInt(year / 100) + 1 : parseInt(year / 100);
        }
        throw new RangeError('Введите положительный год!');
    }
    throw new TypeError('Вы должны ввести число!');
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
    const rangeRegexp = /#[A-F0-9]{6}\b/gi;

    if (typeof hexColor === 'string' && hexColor[0] === '#' && hexColor.length === 7) {
        if (hexColor.match(rangeRegexp)) {
            return (
                `(${parseInt(hexColor.slice(1, 3), 16)}, ` +
                `${parseInt(hexColor.slice(3, 5), 16)}, ` +
                `${parseInt(hexColor.slice(5, 7), 16)})`
            );
        }
        throw new RangeError('значения цвета выходят за пределы допустимых');
    }
    throw new TypeError('цвет передан не строкой');
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    let firstFib = 0;
    let secondFib = 1;
    let accumulator = 1;

    if (typeof n !== 'number' || Number.isNaN(n)) {
        throw new TypeError('Введите число!');
    }
    if (n > 0 && n === parseInt(n)) {
        for (let i = 2; i <= n; i++) {
            accumulator = firstFib + secondFib;
            firstFib = secondFib;
            secondFib = accumulator;
        }

        return accumulator;
    }
    throw new RangeError('Введите целое положительное число');
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    const transparentMatrix = [];

    if (matrix.length && checkMatrix(matrix)) {
        for (let i = 0; i < matrix[0].length; i++) {
            const newLine = [];

            matrix.forEach(line => newLine.push(line[i]));
            transparentMatrix.push(newLine);
        }

        return transparentMatrix;
    }
    throw new TypeError('Матрица кривая!');
}

function checkMatrix(matrix) {
    for (let i = 0; i < matrix.length - 1; i++) {
        if (
            !Array.isArray(matrix[i]) ||
            !Array.isArray(matrix[i + 1]) ||
            matrix[i].length !== matrix[i + 1].length ||
            !matrix[i].length
        ) {
            return false;
        }
    }

    return true;
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
    if (
        typeof n === 'number' &&
        typeof targetNs === 'number' &&
        !Number.isNaN(n) &&
        !Number.isNaN(targetNs)
    ) {
        if (targetNs >= 2 && targetNs <= 36 && targetNs === parseInt(targetNs)) {
            return n.toString(targetNs);
        }
        throw new RangeError('система счисления выходит за пределы значений [2, 36]');
    }
    throw new TypeError('переданы аргументы некорректного типа');
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    return /8-800-\d{3}-\d{2}-\d{2}$/gi.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    let smilesCounter = 0;

    if (typeof text === 'string') {
        [].forEach.call(text, (_, i) => {
            if (
                (text.slice(i, 3 + i) === ':-)' && text.slice(i - 2, i + 1) !== '(-:') ||
                text.slice(i, 3 + i) === '(-:'
            ) {
                smilesCounter += 1;
            }
        });

        return smilesCounter;
    }
    throw new TypeError('в качестве аргумента передаётся не строка');
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    const horizontalWinner = findLineWinner(field);
    const verticalWinner = findLineWinner(matrixProblem(field));
    const diagonalWinner = findDiagonalWinner(field);

    return horizontalWinner || verticalWinner || diagonalWinner || 'draw';
}

function findDiagonalWinner(field) {
    if (field[0][0] === field[1][1] && field[1][1] === field[2][2]) {
        return field[0][0];
    } else if (field[0][2] === field[1][1] && field[1][1] === field[2][0]) {
        return field[0][2];
    }

    return false;
}

function findLineWinner(field) {
    for (const line of field) {
        if (line[0] === line[1] && line[1] === line[2]) {
            return line[0];
        }

        return false;
    }
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
