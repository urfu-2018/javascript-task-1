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
    if (!Number.isInteger(year) || Math.floor(year) !== year) {
        throw new TypeError();
    } else if (year < 0) {
        throw new RangeError();
    }

    const remainder = year % 100;
    const century = Math.floor(year / 100);

    return remainder === 0 ? century : century + 1;
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
    if (typeof hexColor !== 'string' || hexColor.length !== 7) {
        throw new TypeError();
    }

    let colorInRGB = '(';

    for (let i = 1; i < hexColor.length - 1; i += 2) {
        const currentHexColor = hexColor.substring(i, i + 2);
        const currentColor = parseInt(currentHexColor, 16);

        if (currentHexColor.search('^[0-9,a-fA-F]{2}$') === -1) {
            throw new RangeError();
        }

        colorInRGB += currentColor + ', ';
    }

    return colorInRGB.substring(0, colorInRGB.length - 2) + ')';
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
        throw new TypeError();
    } else if (n < 1 || Math.floor(n) !== n) {
        throw new RangeError();
    }

    return fibonacciResolve(n);
}

function fibonacciResolve(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }

    return fibonacciResolve(n - 1) + fibonacciResolve(n - 2);
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (!Array.isArray(matrix)) {
        throw new TypeError();
    }

    return matrix[0].map(function (col, colIndex) {
        return matrix.map(function (row, rowIndex) {
            return matrix[rowIndex][colIndex];
        });
    });
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
    if (!Number.isInteger(n) || !Number.isInteger(targetNs)) {
        throw new TypeError();
    } else if (targetNs < 2 || targetNs > 36) {
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
        throw new TypeError();
    }

    return (text.match(/:-\)/g) || []).length + (text.match(/\(-:/g) || []).length;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    let diag = '';
    let reverseDiag = ' ';
    let checkedFieldInRow = ' ';
    for (let i = 0; i < field.length; i++) {
        const row = field[i][0] + field[i][1] + field[i][2] + ' ';
        const col = field[0][i] + field[1][i] + field[2][i] + ' ';

        diag += field[i][i];
        reverseDiag += field[i][field.length - (i + 1)];

        checkedFieldInRow += row + col;
    }
    checkedFieldInRow += diag + reverseDiag;

    if (checkedFieldInRow.includes('xxx')) {
        return 'x';
    } else if (checkedFieldInRow.includes('ooo')) {
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
