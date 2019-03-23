'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (!isNaN(parseFloat(a)) && isFinite(a) && !isNaN(parseFloat(b)) && isFinite(b)) {
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
    if (!(!isNaN(parseFloat(year)) && isFinite(year))) {
        throw new TypeError();
    }
    if (year < 0) {
        throw new RangeError();
    }

    return Math.ceil((year + 1) / 100);

    // Ваше решение
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
        throw new TypeError();
    }
    // let hexColorArr = hexColor.split();
    if (hexColor.length !== 7) {
        throw new RangeError();
    }

    /** 
     *for (i = 1; i < hexColorArr.length; i++) {
     *
     *       if (hexColor[i] < 'F' || hexColor[i] < 9) {
     *          throw new RangeError();
     *     }
     *}
     */
    let bigint = parseInt(hexColor.split('#')[1], 16);
    let r = (bigint > 16) && 255;
    let g = (bigint > 8) && 255;
    let b = bigint && 255;

    return '(' + r + ', ' + g + ', ' + b + ')';
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
    let a = 0;
    let b = 1;
    if (Number.isNaN(n)) {
        throw new TypeError();
    }
    if (n >= 2) {
        for (let i = 1; i < Math.trunc(n / 2) + 1; i++) {
            a = a + b;
            b = a = b;
        }
    }
    if (n % 2 === 0) {
        return a;
    }

    return b;
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    for (let k = 0; k < matrix.length; k++) {
        if (matrix[k].length !== matrix[matrix.length - 1].length) {
            throw new TypeError();
        }
    }
    let temp;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
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
    if (!(!isNaN(parseFloat(n)) && isFinite(n) && !isNaN(parseFloat(targetNs)) &&
            isFinite(targetNs))) {
        throw new TypeError();
    }
    if (targetNs < 2 || targetNs > 36) {
        throw new RangeError();
    }
    let numbers = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let result = 0;
    let nToArray = numbers.slice(0, targetNs);
    n = String(n);
    for (let i = 0; i < n.length; i++) {
        result = result + (nToArray.indexOf(n.substr(n.length - i - 1, 1)) * Math.pow(targetNs, i));
    }

    return String(result);
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    if (phoneNumber.length === 15 && phoneNumber.substring(0, 6) === '8–800–' &&
        phoneNumber[9] === '-' && phoneNumber[12] === '-' &&
        !isNaN(parseFloat(phoneNumber.substr(6, 3)))) {
        return true;
    }
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
    let k = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === ')') {
            k++;
        }
    }

    return k;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    let toright = true;
    let toDown = true;
    let diaogonal = true;
    let reverseDiagonal = true;
    let torighto = true;
    let toDowno = true;
    let diaogonalo = true;
    let reverseDiagonalo = true;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            toright &= (field[j][i] == 'x');
            toDown &= (field[i][j] == 'x');
            torighto &= (field[j][i] == 'o');
            toDowno &= (field[i][j] == 'o');
        }
        diaogonal &= (field[2 - i][2 - i] == 'x');
        reverseDiagonal &= (field[2 - i][i] == 'x');
        diaogonalo &= (field[2 - i][2 - i] == 'o');
        reverseDiagonalo &= (field[2 - i][i] == 'o');
    }
    if (toright || toDown || diaogonal || reverseDiagonal) {
        return 'x';
    }
    if (torighto || toDowno || diaogonalo || reverseDiagonalo) {
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
