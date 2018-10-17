'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */

function abProblem(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
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
    if (!Number.isInteger(year)) {
        throw new TypeError();
    }
    if (year > 0) {
        let result = Math.floor(year / 100);
        if (year % 100 === 0) {
            return result;
        }

        return result + 1;
    }

    throw new RangeError();
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
    }
    if (!(/^#[0-9A-Fa-f]{6}$/).test(hexColor)) {
        throw new RangeError();
    }
    let result = '(';
    let j = 0;
    for (let i = 0; i < 3; i++) {
        const x = parseInt(hexColor.substring(1 + j, 3 + j), 16) + ', ';
        result = result + x;
        j = j + 2;
    }
    result = result.substring(0, result.length - 2) + ')';

    return result;
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */

function fibonacciProblem(n) {
    let array = [0, 1];
    if (typeof(n) !== 'number') {

        throw new TypeError();
    }
    if (Number.isInteger(n) && n > 0) {
        for (let i = 2; i <= n; i++) {
            array[i] = array[i - 1] + array[i - 2];
        }

        return array[array.length - 1];
    }

    throw new RangeError();
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
    let val = 0;
    for (let i = 0; i < matrix.length; i++) {
        const arAr = matrix[i];
        if (!Array.isArray(arAr)) {
            throw new TypeError();
        }
        for (let j = 0 + val; j < matrix[i].length; j++) {
            const x = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = x;
        }
        val++;
    }

    return matrix;
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
    if ((!Number.isInteger(n)) || !(Number.isInteger(targetNs))) {

        throw new TypeError();
    }
    if (targetNs >= 2 && targetNs <= 36) {
        const result = n.toString(targetNs);

        return result;
    }

    throw new RangeError();
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */

function phoneProblem(phoneNumber) { // плохое решение
    if (typeof(phoneNumber) !== 'string') {

        throw new TypeError();
    }
    if ((/^8-800-[0-9]{3}-[0-9]{2}-[0-9]{2}$/).test(phoneNumber)) {

        return true;
    }

    return false;
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */

function smilesProblem(text) {
    let num = 0;
    if (typeof(text) !== 'string') {

        throw new TypeError();
    }
    let skip = 0;
    let find = '(-:';
    for (let i = 0; i < 2; i++) {
        let sign = text.indexOf(find);
        skip = sign;
        while (sign !== -1) {
            num = num + 1;
            sign = text.indexOf(find, skip + 1);
            skip = sign;
        }
        find = ':-)';
    }

    return num;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */

function ticTacToeProblem(field) {
    const hz = horizontal(field);
    if (hz !== -1) {
        return hz;
    }
    const vc = vertical(field);
    if (vc !== -1) {
        return vc;
    }
    if (field[0][0] === field[1][1] && field[1][1] === field[2][2]) {
        return field[0][0];
    }
    if (field[2][0] === field[1][1] && field[1][1] === field[0][2]) {
        return field[1][0];
    }

    return 'draw';
}

function horizontal(field) {
    if (field[0][0] === field[0][1] && field[0][1] === field[0][2]) {
        return field[0][0];
    }
    if (field[1][0] === field[1][1] && field[1][1] === field[1][2]) {
        return field[1][0];
    }
    if (field[2][0] === field[2][1] && field[2][1] === field[2][2]) {
        return field[2][0];
    }

    return -1;
}

function vertical(field) {
    if (field[0][0] === field[1][0] && field[1][0] === field[2][0]) {
        return field[0][0];
    }
    if (field[0][1] === field[1][1] && field[1][1] === field[2][1]) {
        return field[1][1];
    }
    if (field[0][1] === field[1][2] && field[1][2] === field[2][2]) {
        return field[2][1];
    }

    return -1;
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
