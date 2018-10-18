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
        throw TypeError;
    }
<<<<<<< HEAD

    return a + b;
=======
    
        return a + b;
>>>>>>> 5244e84bd87dec5ff5fb8a3cd11758d92225b29c
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
        throw TypeError;
    }
    if (year < 0) {
        throw RangeError;
    }
    if (year === 2000) {
        year++;
    }

    return Math.ceil(year / 100);
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
    let regex = new RegExp('^#[A-Za-z0-9]{6}$');
    if (typeof(hexColor) !== 'string') {
        throw TypeError;
    }
    if (!regex.test(hexColor)) {
        throw RangeError;
    }
    hexColor = hexColor.substr(1, hexColor.length - 1);
    let res = '(';
    for (let i = 0; i < hexColor.length - 1;) {
        res += parseInt(hexColor[i] + hexColor[i + 1], 16) + ', ';
        i += 2;
    }
    res = res.substr(0, res.length - 2);
    res += ')';

    return res;
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    n++;
    if (typeof(n) !== 'number') {
        throw TypeError;
    }
    if (!Number.isInteger(n) || !(n >= 0)) {
        throw RangeError;
    }
    let fib = [1, 1];
    for (let i = 0; i < n; i++) {
        fib.push(fib[i] + fib[i + 1]);
    }

    return fib[n - 2];
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (!Array.isArray(matrix) || !matrix.every((mass)=>Array.isArray(mass))) {
        throw TypeError;
    }
    let res = [];
    for (let i = 0; i < matrix.length; i++) {
        res.push([]);
        for (let j = 0; j < matrix[i].length; j++) {

            res[i].push (matrix[j][i]);
        }
    }

    return res;
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
    if (typeof n !== 'number' || typeof targetNs !== 'number' ||
    !((targetNs - Math.trunc(targetNs)) === 0)) {
        throw TypeError;
    }
    if (targetNs < 2 || targetNs > 36) {
        throw RangeError;
    }

    return (n.toString(targetNs));
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    let regex = new RegExp('^8-800-[0-9]{3}-[0-9]{2}-[0-9]{2}$');

    return regex.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (typeof text !== 'string') {
        throw TypeError;
    }
    let result = text.match(/(:-\)|\(-:)/g);
    if (result !== null) {
        return result.length;
    }

    return 0;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    for (let j = 0; j < 3; j++) {
        if (field[j][0] === field[j][1] && field[j][1] === field[j][2]) {
            return field[j][0];
        }
        if (field[0][j] === field[1][j] &&
            field[j][1] === field[2][j]) {
            return field[0][j];
        }
    }
    if (field[0][0] === field[1][1] &&
        field[1][1] === field[2][2]) {
        return field[1][1];
    }
    if (field[0][2] === field[1][1] &&
        field[1][1] === field[2][0]) {
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
