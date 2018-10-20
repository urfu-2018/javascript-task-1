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
        return 'TypeError';
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
        return 'TypeError';
    }
    if (year < 0) {
        return 'RangeError';
    }
    const str = String(year);
    const alienCentury = str.length - 2;
    const notCentury = Number(str.substring(alienCentury, str.length + 1));
    let century = Number(str.substring(0, str.length - 2));
    if (notCentury !== 0) {
        return century + 1;
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
    if (typeof(hexColor) !== 'string') {
        return 'TypeError';
    }
    let hex = hexColor.substr(1, hexColor.length - 1);
    hex = hex.toLowerCase();
    for (let i = 0; i < hex.length; i++) {
        if (hex.length !== 6 || !(hex[i] <= 'f' && hex[i] >= 'a')) {
            return 'RangeError';
        }
    }
    const hex1 = hex.substr(0, 2);
    const hex2 = hex.substr(2, 2);
    const hex3 = hex.substr(4, 2);

    return '(' + Number('0x' + hex1) + ', '+ Number('0x' + hex2) + ', '
    + Number('0x' + hex3) + ')';
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
        return 'TypeError';
    }
    if (!Number.isInteger(n)) {
        return 'RangeError';
    }
    let fibFirst = 1;
    let fibSecond = 1;
    let fib = 0;
    if (n === 1 || n === 2) {
        return fib + 1;
    }
    for (let i = 2; i < n; i++) {
        fib = fibFirst + fibSecond;
        fibFirst = fibSecond;
        fibSecond = fib;
    }

    return fib;
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (!Array.isArray(matrix)) {
        return 'TypeError';
    }
    const M = matrix.length;
    for (let i = 0; i < M; i++) {
        if (!Array.isArray(matrix[i])) {
            return 'TypeError';
        }
    }
    const arr = matrix[1];
    const N = arr.length;
    const matrixT = [];
    for (let i = 0; i < N; i++) {
        matrixT.push([]);
        for (let j = 0; j < M; j++) {
            matrixT[i].push(matrix[j][i])
        }
    }

    return matrixT;
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
    if (typeof(n) !== 'number' || typeof(targetNs) !== 'number') {
        return 'TypeError';
    }
    if (targetNs < 2 || targetNs > 36) {
        return 'RangeError';
    }

    return n.toString(targetNs);
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    if (typeof(phoneNumber) !== 'string') {
        return 'TypeError';
    }
    if (phoneNumber.length !== 15) {
        return 'RangeError';
    }
    phoneNumber = phoneNumber.replace(/-/g, '');
    const unchangedDefault = '8800';
    const unchanged = phoneNumber.slice(0, 4);
    const changed = phoneNumber.slice(4, 11);
    for (let i = 0; i < changed; i++) {
        if (changed[i] <= '9' && changed[i] >= '0' && unchanged === unchangedDefault) {
            return true;
        }
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
    if (typeof(text) !== 'string') {
        return 'TypeError';
    }
    const regExp1 = /(\(-:)/g;
    const regExp2 = /(:-\))/g;
    const search1 = text.match(regExp1);
    const search2 = text.match(regExp2);
    if (search1 === null && search2 === null) {
        return 'No matches found';
    }
    if (search1 === null && search2 !== null) {
        return search2.length;
    }
    if (search1 !== null && search2 === null) {
        return search1.length;
    }

    return search1.length + search2.length;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    let strResult1 = '';
    let strResult2 = '';
    let strResult3 = '';
    strResult1 = field[0].join(strResult1);
    strResult2 = field[1].join(strResult2);
    strResult3 = field[2].join(strResult3);
    let strResult = strResult1 + strResult2 + strResult3;
    for (let i = 0; i < 9; i = i + 3) {
        if (strResult[i] === 'x' && strResult[i + 1] === 'x' && strResult[i + 2] === 'x') {
            return 'x';
        } else if (strResult[i] === 'o' && strResult[i + 1] === 'o' && strResult[i + 2] === 'o') {
            return 'o';
        }
    }
    for (let i = 0; i < 3; i++) {
        if (strResult[i] === 'x' && strResult[i + 3] === 'x' && strResult[i + 6] === 'x') {
            return 'x';
        } else if (strResult[i] === 'o' && strResult[i + 3] === 'o' && strResult[i + 6] === 'o') {
            return 'o';
        }
    }
    if ((strResult[0] === 'x' && strResult[4] === 'x' && strResult[8] === 'x')
    || (strResult[2] === 'x' && strResult[4] === 'x' && strResult[6] === 'x')) {
        return 'x';
    }
    if ((strResult[0] === 'o' && strResult[4] === 'o' && strResult[8] === 'o')
    || (strResult[2] === 'o' && strResult[4] === 'o' && strResult[6] === 'o')) {
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
