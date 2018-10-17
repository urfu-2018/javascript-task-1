'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    // Ваше решение
    if (typeof a === 'number' && typeof b === 'number') {
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
    if (typeof year === 'number' && parseInt(year) === year) {
        if (year < 0) {
            throw new RangeError();
        }

        return Math.ceil(year / 100);
    }
    throw new TypeError();
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
    if (typeof hexColor === 'string') {
        var result = /^#([a-f\d]{6})$/i.test(hexColor);
        if (result) {
            return '(' + parseInt(hexColor.substr(1, 2), 16) +
            ', ' + parseInt(hexColor.substr(3, 2), 16) +
            ', ' + parseInt(hexColor.substr(5, 2), 16) + ')';
        }
        throw new RangeError();
    }
    throw new TypeError();
    // Ваше решение
}


/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    const result = [0, 1];
    let a = 0;
    if (typeof n !== 'number') {
        throw new TypeError();
    }
    if (n > 0 && parseInt(n) === n) {
        for (var i = 2; i <= n; i++) {
            a = result[1] + result[0];
            result[0] = result[1];
            result[1] = a;
        }

        return result[1];
    }
    throw new RangeError();

    // Ваше решение
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (arrayCheck(matrix)) {
        throw new TypeError();
    }
    var result = [];
    for (var i = 0; i < matrix[0].length; i++) {
        var line = [];
        for (var j = 0; j < matrix.length; j++) {
            line.push(matrix[j][i]);
        }
        result.push(line);
    }

    return result;
    // Ваше решение
}
function arrayCheck(matrix) {
    if (!Array.isArray(matrix)) {
        return true;
    }
    var len = matrix[0].length;
    for (var i = 0; i < matrix.length;) {
        if (Array.isArray(matrix[i]) && matrix[i].length === len) {
            i++;
        } else {
            return true;
        }
    }
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
    if (typeof n === 'number' && typeof targetNs === 'number') {
        if (targetNs >= 2 && targetNs <= 36) {
            return n.toString(targetNs);
        }
        throw new RangeError();
    }
    throw new TypeError();
    // Ваше решение
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    if (typeof phoneNumber !== 'string') {
        throw new TypeError();
    }
    if (/^8-800-\d{3}-\d{2}-\d{2}$/.test(phoneNumber)) {
        return true;
    }

    return false;
    // Ваше решение
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    var smiles = 0;
    if (typeof text !== 'string') {
        throw new TypeError();
    }
    for (var i = 0; i < text.length;) {
        if (text.substr(i, 3) === ':-)' || text.substr(i, 3) === '(-:') {
            smiles = smiles + 1;
            i = i + 3;
        } else {
            i++;
        }
    }

    return smiles;
    // Ваше решение
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    for (var i = 0; i < 3; i++) {
        if (field[i][0] === field[i][1] && field[i][0] === field[i][2]) {
            return field[i][0];
        }
        if (field[0][i] === field[1][i] && field[0][i] === field[2][i]) {
            return field[0][i];
        }
    }
    if (field[0][0] === field[1][1] && field[0][0] === field[2][2]) {
        return field[0][0];
    }
    if (field[0][2] === field[1][1] && field[0][2] === field[2][0]) {
        return field[0][2];
    }

    return 'draw';
    // Ваше решение
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
