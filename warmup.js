/*eslint-disable*/
'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (typeof(a) !== 'number'||typeof(b) !== 'number')
        throw new TypeError;

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
    if (typeof(year) !== 'number')
        throw new TypeError;
    const century = 100;
    const answer = Math.trunc(year / century);

    return (year % 100 === 0) ? answer : answer + 1;
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
    function isHex(number) {
        if (!isNaN(number)){

        }
    }
    if (typeof(hexColor)!=='string') throw new TypeError;
    if (hexColor[0]!=='#') throw new RangeError;
    let result = '(';
    for (let i = 1; i < hexColor.length; i++){
        const firstPart = hexColor[i];
        const secondPart = hexColor[i+1];
        if (typeof (firstPart) !== 0){
        result += parseInt(hexColor[i] + hexColor[i+1], 16) + ',';
        }
    }
    result = result.replace(result.lastIndexOf(','),'')

    return result + ')';
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    if (typeof(n) !== 'number') throw new TypeError;
    if (n < 0 || n % 1 !== 0) throw new RangeError;
    if (n === 1 || n === 2) return 1;
    let a = b = 1;
    for (let i = 0; i < n - 2; i++){
        if (a >= b)
            b += a;
        else a += b;
    }

    return a > b ? a : b;
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (!Array.isArray(matrix) || !Array.isArray(matrix[0])) throw new TypeError;
    let transposedMatrix = new Array(matrix.length);
    for (let i = 0; i < transposedMatrix.length; i++){
        transposedMatrix[i] = new Array(matrix[0].length);
    }
    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[0].length; j++){
            transposedMatrix[i][j] = matrix[j][i];
        }
    }

    return transposedMatrix;
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

}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {

    return /8-800-[0-9]{3}-[0-9]{2}-[0-9]{2}/.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (typeof(text)!=="string") throw new TypeError;
    const leftSideSmile = /:-\)/ig;
    const rightSideSmile = /\(-:/ig;
    function countOfSmiles(regExp) {
        const arrayOfMatchedSmiles = text.match(regExp);
        const countOfSmiles =  (arrayOfMatchedSmiles !== null) ? arrayOfMatchedSmiles.length : 0;

        return countOfSmiles;
    }

    return countOfSmiles(leftSideSmile) + countOfSmiles(rightSideSmile);
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
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
