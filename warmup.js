'use strict';

function fibonacci(n) {
    if (n <= 2) {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

function isTypeOf(variable, type) {
    return typeof variable === type;
}


/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (!isTypeOf(a, 'number') || !isTypeOf(b, 'number')) {
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
    if (!isTypeOf(year, 'number')) {
        throw new TypeError();
    }
    if (year < 0) {
        throw new RangeError();
    }
    let century = Math.floor(year / 100);
    if (year % 100 !== 0) {
        century += 1;
    }

    return century;
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
    if (!isTypeOf(hexColor, 'string')) {
        throw new TypeError();
    }
    const temp = hexColor.match(/^#[0-9a-f]{6}$/i);
    if (temp === null) {
        throw new RangeError();
    }
    const rgb = [hexColor.slice(1, 3), hexColor.slice(3, 5), hexColor.slice(5)];
    rgb.forEach(function (part, index, theArray) {
        theArray[index] = parseInt(theArray[index], 16);
    });

    return `(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    if (!isTypeOf(n, 'number')) {
        throw new TypeError();
    }
    if (n < 0) {
        throw new RangeError();
    }

    return fibonacci(n);
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (matrix.constructor !== Array || matrix[0].constructor !== Array) {
        throw new TypeError();
    }
    if (matrix[0].length === 0) {
        return [[]];
    }
    const transMatrix = new Array(matrix[0].length);
    for (let n = 0; n < matrix[0].length; n++) {
        transMatrix[n] = new Array(matrix.length);
        for (let m = 0; m < matrix.length; m++) {
            transMatrix[n][m] = matrix[m][n];
        }
    }

    return transMatrix;
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
    if (!isTypeOf(n, 'number') || !isTypeOf(targetNs, 'number')) {
        throw new TypeError();
    }
    if (targetNs < 2 || targetNs > 36) {
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
    const temp = phoneNumber.match(/^8-800-\d{3}-\d{2}-\d{2}$/);

    return temp !== null;
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (!isTypeOf(text, 'string')) {
        throw new TypeError();
    }

    return (text.match(/\(-:/g) || []).length + (text.match(/:-\)/g) || []).length;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    function getWinner(combination) {
        const containsX = combination.includes('x');
        const containsO = combination.includes('o');
        if (containsO && !containsX) {
            return 'o';
        }
        if (containsX && !containsO) {
            return 'x';
        }
    }

    const combinations = [];
    field.forEach(x => combinations.push(x.reduce((t, s) => t + s)));
    matrixProblem(field).forEach(x => combinations.push(x.reduce((t, s) => t + s)));
    combinations.push(field[0][0] + field[1][1] + field[2][2]);
    combinations.push(field[0][2] + field[1][1] + field[2][0]);

    for (let i = 0; i < combinations.length; i++) {
        const winner = getWinner(combinations[i]);
        if (winner !== undefined) {
            return winner;
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
