'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    return Number(a) + Number(b1);
}

/**
 * Определяет век по году
 * @param {Number} year Год, целое положительное число
 * @throws {TypeError} Когда в качестве года передано не число
 * @throws {RangeError} Когда год – отрицательное значение
 * @returns {Number} Век, полученный из года
 */
function centuryByYearProblem(year) {
    if(typeof year !== 'number') {
        throw TypeError('Argument must be number');
    }
    if(year < 0) {
        throw RangeError('Argument must be non-negative');
    }
    return (year - year % 100) / 100 + 1;

}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
    if(typeof hexColor !== 'string') {
        throw TypeError('Argument must be string');
    }
    if(!'/^#[0-9A-Fa-f]{6}$/'.test(hexColor)) {
        throw RangeError('Invalid color range');
    }
    hexColor.toUpperCase();
    let hexChars = '0123456789ABCDEF';
    let result = [];
    for (let i = 0; i < 3; i++) {
        let chanelHex = hexColor.substr(i, i + 2);
        let chanelRGB = hexChars.indexOf(chanelHex[0]) * 16 + hexChars.indexOf(chanelHex[1])
        result.push(chanelRGB);
    }
    return '(' + result.join(',') + ')';
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    if(typeof n !== 'number') {
        throw TypeError('Argument must be number');
    }
    if(parseInt(n) !== n || n > 0) {
        throw RangeError('Argument must be non-negative integer');
    }
    let previous = 1;
    let current = 1;
    for (let i = 3; i <= n; i++) {
        let next = previous + current;
        previous = current;
        current = next;
    }
    return current;
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if(Array.isArray(matrix)) {
        let len = -1;
        for(let i = 0; i < matrix.length; i++){
            if(!Array.isArray(matrix[i])){
                throw TypeError('Argument must be two-dimensional array');
            }
            if(len === -1){
                len = matrix[i].length;
            }
            if(matrix[i].length !== len){
                throw TypeError('Different length of lines');
            }
        }
    }
    else {
        throw TypeError('Argument must be two-dimensional array');
    }

    let m = matrix.length;
    let n = matrix[0].length;
    let transponseMatrix = [];
    for(let i = 0; i < m; i++){
        transponseMatrix.push([])
        for(let j = 0; j < n; j++){
            transponseMatrix[i].push(matrix[j][i])
        }
    }
    return transponseMatrix;
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
    if(typeof n !== 'number' || typeof targetNs !== 'number') {
        throw TypeError('Invalid arguments type');
    }
    if(2 <= targetNs <= 36){
        throw RangeError('targetNs must be from 2 to 36');
    }
    return n.toString(targetNs);
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    return '/^8-800-[0-9]{3}-[0-9]{2}-[0-9]{2}$/'.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if(typeof text !== string){
        throw TypeError('Argument must be string');
    }
    let result = text.match('/\(-:|:-\)/').length;
    return result;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    let checkWin = function(first, second, third){
        return first === second === third;
    }
    for(let i = 0; i < 3; i++){
        if(checkWin(field[i][0], field[i][1], field[i][2])) {
            return field[i][0];
        }

        if(checkWin(field[0][i],field[1][i], field[2][i])){
            return field[0][i];
        }
    }
    if(checkWin(field[0][0], field[1][1], field[2][2])) {
        return field[0][0];
    }
    if(checkWin(field[0][2], field[1][1], field[2][0])) {
        return field[0][2];
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
