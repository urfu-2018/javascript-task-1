'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (!isFinite(a) && !isFinite(b)) {
        throw new TypeError('В аргументы переданы не числа');
    }
    if (Number.isInteger(a) && Number.isInteger(b)) {
        return Number(a) + Number(b);
    }
}

/**
 * Определяет век по году
 * @param {Number} year Год, целое положительное число
 * @throws {TypeError} Когда в качестве года передано не число
 * @throws {RangeError} Когда год – отрицательное значение
 * @returns {Number} Век, полученный из года
 */
function centuryByYearProblem(year) {
    if (!isFinite(year)) {
        throw new TypeError('В качестве года передано не число');
    }
    if (year < 0) {
        throw new RangeError('Год – отрицательное значение');
    }
    if (Number.isInteger(year)) {
        let century = 0;
        if (!(year % 100)) {
            century = year / 100;
        } else {
            century = Math.floor(year / 100) + 1;
        }

        return century;
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
    if (typeof hexColor !== 'string' || hexColor.length !== 7) {
        throw new TypeError('Цвет передан не строкой');
    }
    const arrRGB = [];
    let colorNotSharp = hexColor.substring(1);
    for (let i = 0; i < 3; i++) {
        const hexNum = colorNotSharp.substr(0, 2);
        colorNotSharp = colorNotSharp.substring(2);
        const decNum = parseInt(hexNum, 16);
        if (decNum > 255 || isNaN(decNum)) {
            throw new RangeError('значения цвета выходят за пределы допустимых');
        } else {
            arrRGB.push(decNum);
        }
    }

    return '(' + arrRGB[0] + ', ' + arrRGB[1] + ', ' + arrRGB[2] + ')';
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    if (!isFinite(n)) {
        throw new TypeError('В качестве положения в ряде передано не число');
    }
    if (n < 0) {
        throw new RangeError('Положение в ряде не является целым положительным числом');
    }
    const arrFib = [];
    arrFib[0] = 1;
    arrFib[1] = 2;
    for (let i = 2; i < n; i++) {
        arrFib[i] = arrFib[i - 1] + arrFib[i - 2];
    }

    return arrFib[n - 1];
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (!matrix[0][0] || matrix[0][0].isArray) {
        throw new TypeError('В функцию передаётся не двумерный массив');
    }
    const matrixTranspon = [];
    for (let i = 0; i < matrix[0].length; i++) {
        const matrixTranLine = [];
        for (let j = 0; j < matrix.length; j++) {
            matrixTranLine[j] = matrix[j][i];
        }
        matrixTranspon.push(matrixTranLine);
    }

    return matrixTranspon;
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
    if (!isFinite(n) || !isFinite(targetNs)) {
        throw new TypeError('Переданы аргументы некорректного типа');
    }
    if (targetNs < 2 || targetNs > 36) {
        throw new RangeError('система счисления выходит за пределы значений [2, 36]');
    }
    const arrNumTarget = [];
    let remainder = n % targetNs;
    let quotient = (n - remainder) / targetNs;
    arrNumTarget.push(remainder);
    while (quotient >= targetNs) {
        remainder = quotient % targetNs;
        quotient = (quotient - remainder) / targetNs;
        arrNumTarget.push(remainder);
    }
    arrNumTarget.push(quotient);

    return arrNumTarget.reverse().join('');
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    const reg = /8-800-\d{3}-\d{2}-\d{2}/;

    return reg.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    const reg = /(:-\))|(\(-:)/g;

    return text.match(reg).length;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    for (let i = 0; i < field.length; i++) {
        if (field[i][0] === field[i][1] && field[i][1] === field[i][2]) {
            return field[i][0];
        }
        if (field[0][i] === field[1][i] && field[1][i] === field[2][i]) {
            return field[0][i];
        }
    }
    if ((field[0][0] === field[1][1] && field[1][1] === field[2][2]) ||
        (field[0][2] === field[1][1] && field[1][1] === field[2][0])) {
        return field[0][0];
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
