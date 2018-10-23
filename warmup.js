'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if ((isNaN(parseFloat(a)) && isFinite(a)) || (isNaN(parseFloat(b)) && isFinite(b)))
    {
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
    if (isNaN(parseFloat(year)) && isFinite(year)){
        throw new TypeError();
    }

    if (year < 0){
        throw new  RangeError();
    }
    if (year % 100 === 0){

        return year / 100;
    }

    return year / 100 + 1;
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
    if (typeof hexColor !== 'string'){ 
    	throw new TypeError();
    }
    var R = hexColor.substring(1, 3);
    var G = hexColor.substring(3, 5);
    var B = hexColor.substring(5, 7);
    if (R > 'FF' || G > 'FF' || B > 'FF'){
    	throw new RangeError();
    }

    return '(' + parseInt(R, 16) + ', ' + parseInt(G, 16) + ', ' + parseInt(B, 16) + ')';
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    if (isNaN(parseFloat(n)) && isFinite(n)){
    
    	throw new TypeError();
    }
    if (n <= 0 || !Number.isInteger(n)){
    	throw new RangeError();
    }
    var f = 1;
    var s = 1;
    for (let i = 1; i <= n; i++) {
    	var now = f + s;
    	f = s;
    	s = now;
    }

    return right;
}	
/*++ * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (!matrix.every(Array.isArray)||!Array.isArray(matrix)){
    	throw new TypeError();
    }
    let tempMatr = matrix;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++){
            tempMatr[j][i] = matrix[i][j];
        }
    }

    return tempMatr;
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
    if (isNaN(parseFloat(year)) && isFinite(year)){
        throw new TypeError();
    }
    if (targetNs<=2 || targetNs>=36) {
        throw new  RangeError();
    }
    
    return parseInt(n.toString, targetNs);
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    const template = /8-800-[0-9]{3}-[0-9]{2}-[0-9]{2}/;

    return template.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (typeof(text)!=='string'){
        throw new TypeError();
    }
    var count = 0 ;
    for (var i = 0; i < text.length; i++){
    var smile = text.substr(i, 3);
    if(smile === ':-)'|| smile === '(-:'){
        count++;
    }
    }

    return count;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
     if (!Array.isArray(field) || field.length !== 3){
        throw new TypeError();
    }

    if (field[0][0] === field[1][1] && field[1][1] === field[2][2]){
        return field[0][0];
    }

    if (field[0][2] === field[1][1] && field[1][1] === field[2][0]) {
        return field[0][2];
    }

    for (var i = 0; i < 3; i++) {
        if (field[i][0] === field[i][1] && field[i][1] === field[i][2]) {
            return field[i][0];
        }

        if (field[0][i] === field[1][i] && field[1][i] === field[2][i]) {
            return field[0][i];
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
