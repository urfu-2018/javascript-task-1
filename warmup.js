'use strict';

/**
 * Проверяет тип аргумента
 * @param {Object} arg Аргумент
 * @param {String} argName Ммя аргумента
 * @param {String} expectedTypeName Имя ожидаемого типа
 * @throws {TypeError} Если тип другой или тип аргументов неверный
 */
function checkType(arg, argName, expectedTypeName) {
    checkTypeUnsafe(argName, 'arg', 'string');
    checkTypeUnsafe(expectedTypeName, 'expectedTypeName', 'string');
    checkTypeUnsafe(arg, argName, expectedTypeName);
}

/**
 * Проверяет тип аргумента
 * @param {Object} arg Аргумент
 * @param {String} argName Ммя аргумента
 * @param {String} expectedTypeName Имя ожидаемого типа
 * @throws {TypeError} Если тип другой
 */
function checkTypeUnsafe(arg, argName, expectedTypeName) {
    if (typeof arg !== expectedTypeName) {
        throw new TypeError(`Expected ${argName} to be a ${expectedTypeName},
         got ${typeof arg}`);
    }
}

/**
 * Проверяет, что число целое
 * @param {Number} arg Число
 * @param {String} argName Название числа
 * @throws {TypeError} Если arg не число или не целое
 */
function checkInteger(arg, argName) {
    checkFiniteNumber(arg, argName);
    if (arg % 1 !== 0) {
        throw new TypeError(argName + ' must be integer');
    }
}

/**
 * Проверяет, что число не NaN
 * @param {Number} arg Проверяемое число
 * @param {String} argName Название числа
 * @throws {TypeError} Если arg не число или NaN
 */
function checkNotNaN(arg, argName) {
    checkType(arg, argName, 'number');
    if (Number.isNaN(arg)) {
        throw new TypeError(`${argName} is NaN`);
    }
}

/**
 * Проверяет, что число конечное
 * @param {Number} arg Число
 * @param {String} argName Название числа
 * @throws {TypeError} Если arg не число или не конечное
 */
function checkFiniteNumber(arg, argName) {
    checkType(arg, argName, 'number');
    checkType(argName, 'argName', 'string');
    if (!Number.isFinite(arg)) {
        throw new TypeError(argName + ' is not finite');
    }
}

/**
 * Проверяет, что число не больше заданного
 * @param {Number} value Проверяемое значение
 * @param {Number} max Максимальное допустимое значение
 * @param {String} valueName Имя проверяемого числа
 * @throws {RangeError} Если value больше
 */
function checkMaxUnsafe(value, max, valueName) {
    if (value > max) {
        throw new RangeError(`${valueName} (${value}) must be less than or equal to ${max}`);
    }
}

/**
 * Проверяет, что число не меньше заданного
 * @param {Number} value Проверяемое значение
 * @param {Number} min Минимальное допустимое значение
 * @param {String} valueName Имя проверяемого числа
 * @throws {RangeError} Если value меньше
 */
function checkMinUnsafe(value, min, valueName) {
    if (min > value) {
        throw new RangeError(`${valueName} (${value}) must be greater than or equal to ${min}`);
    }
}

/**
 * Проверяет, что число соответствует диапазону
 * @param {Number} min Минимальное допустимое значение
 * @param {Number} value Проверяемое значение
 * @param {Number} max Максимальное допустимое значение
 * @param {String} valueName Имя проверяемого числа
 * @throws {RangeError} Если value не входит в диапазон
 */
function checkRangeUnsafe(min, value, max, valueName) {
    checkMinUnsafe(value, min, valueName);
    checkMaxUnsafe(value, max, valueName);
}

/**
 * Проверяет, что число соответствует диапазону
 * @param {Number} min Минимальное допустимое значение
 * @param {Number} value Проверяемое значение
 * @param {Number} max Максимальное допустимое значение
 * @param {String} valueName Имя проверяемого числа
 * @throws {TypeError} Если тип аргументов неверный
 * @throws {RangeError} Если min > max или value не входит в диапазон
 */
function checkRange(min, value, max, valueName = 'value') {
    checkNotNaN(min, 'min');
    checkNotNaN(value, 'value');
    checkNotNaN(max, 'max');
    checkType(valueName, 'valueName', 'string');
    if (min > max) {
        throw new RangeError(`min must be less or equal than max, got min (${min}) > max (${max})`);
    }
    checkRangeUnsafe(min, value, max, valueName);
}

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    checkNotNaN(a, 'a');
    checkNotNaN(b, 'b');

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
    checkFiniteNumber(year, 'year');
    checkRange(0, year, Infinity, 'year');

    return Math.floor(year / 100) + (year % 100 !== 0 ? 1 : 0);
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
    checkType(hexColor, 'hexColor', 'string');
    if (!hexColor.match(/^#[a-f\d]{6,}$/i)) {
        throw new TypeError('Invalid HEX color string');
    }
    checkRange(7, hexColor.length, 7, 'hexColor string length');
    const red = parseInt(hexColor.slice(1, 3), 16);
    const green = parseInt(hexColor.slice(3, 5), 16);
    const blue = parseInt(hexColor.slice(5, 7), 16);

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
    checkInteger(n, 'n');
    checkRange(1, n, Number.MAX_VALUE, 'n');

    return n === 1 || n === 2 ? 1 : fibonacciProblem(n - 1) + fibonacciProblem(n - 2);
}

/**
 * Проверяет, что array - двумерный массив
 * @param {Object} array Проверяемая переменная
 * @param {String} arrayName Имя проверяемой переменной
 * @throws [TypeError} Если array - не двумерный массив
 */
function checkTwoDimArray(array, arrayName) {
    if (!Array.isArray(array)) {
        throw new TypeError(`${arrayName} is not an array`);
    }
    const notTwoDimArrayMessage = `Array ${arrayName} is not a two-dimensional array`;
    if (array.length === 0) {
        throw new TypeError(notTwoDimArrayMessage);
    }
    for (let i = 0; i < array.length; i++) {
        if (!Array.isArray(array[i])) {
            throw new TypeError(notTwoDimArrayMessage);
        }
    }
}

/**
 * Возвращает размеры двумерного массива
 * @param {(Any[])[]} array двумерный массив
 * @throws {TypeError} Если array - не двумерный массив или размеры варьируются
 * @returns {Number[]} Размеры массива
 */
function getTwoDimArraySize(array) {
    checkTwoDimArray(array, 'array');
    const size1 = array.length;
    const size2 = array[0].length;
    for (let i = 1; i < size1; i++) {
        if (array[i].length !== size2) {
            throw new TypeError('Second size must not vary');
        }
    }

    return [size1, size2];
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    const matrixSize = getTwoDimArraySize(matrix);
    const resultMatrix = [];

    for (let i = 0; i < matrixSize[1]; i++) {
        resultMatrix[i] = [];
        for (let j = 0; j < matrixSize[0]; j++) {
            resultMatrix[i][j] = matrix[j][i];
        }
    }

    return resultMatrix;
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
    checkType(n, 'n', 'number');
    checkType(targetNs, 'targetNs', 'number');
    checkRange(2, targetNs, 36, 'targetNs');

    return n.toString(targetNs);
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    return phoneNumber.match(/^8-800-\d\d\d-\d\d-\d\d$/) !== null;
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    checkType(text, 'text', 'string');
    const searchResult = text.match(/(\(-:|:-\))/g);

    return searchResult === null ? 0 : searchResult.length;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    for (let i = 0; i < 3; i++) {
        if (field[i][0] === field[i][1] && field[i][1] === field[i][2]) {
            return field[i][0];
        }

        if (field[0][i] === field[1][i] && field[1][i] === field[2][i]) {
            return field[0][i];
        }
    }

    if (field[0][0] === field[1][1] && field[1][1] === field[2][2]) {
        return field[1][1];
    }

    if (field[0][2] === field[1][1] && field[1][1] === field[2][0]) {
        return field[1][1];
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
