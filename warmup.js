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
    // Ваше решение
    const yearStr = year.toString;
    if (yearStr.length === 4) {
        return parseInt(yearStr.substring(0, 1), 10) + 1;
}
    else return 1;
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
    // Ваше решение
    return rgbColor = '('+ parseInt(hexColor.substring(1, 2), 16) + parseInt(hexColor.substring(3, 4), 16) + parseInt(hexColor.substring(5, 6)) + ')';
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    // Ваше решение
    const fibSequence = [0, 1];
    for (let i = 2; i < 61; i++) {
        fibSequence[i].push(fibSequence[i - 1] + fibSequence[i - 2]);
    }
    
    return fibSequence[n];
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    // Ваше решение
    let transposedMatrix = [];
    for (let i = 0; i < matrix.length; i++){
        for (let j= 0; j < matrix.length; j++){
            transposedMatrix[j][i] = matrix[i][j];
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
    // Ваше решение
    return n.toString(targetNs);
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    // Ваше решение
    const dashsEntry = phoneNumber.charAt(1) == '-'&&phoneNumber.charAt(5) == '-' && phoneNumber.charAt(9) == '-' && phoneNumber.charAt(12) == '-';
    if (dashsEntry) return true
    else return false;
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    // Ваше решение
    let counter = 0;
    const element1 = ':-)';
    const element2 = '(-:';
    let index1 = array.indexOf(element1);
    let index2 = array.indexOf(element2)
    while(index1 != -1){
        counter++;
        index1 = array.indexOf(element1, index1 + 1);
    }
    while(index2 != -1){
        counter++;
        index2 = array.indexOf(element2, index2 + 1);
    }
    
    return counter;
}
   

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    // Ваше решение
    for(let i = 0; i < 3; i++)
        if(matrix[i][0] == matrix[i][1] && matrix[i][0] == matrix[i][2])
          return matrix[i][0];
     for(let i = 0; i < 3; i++)
        if(matrix[0][i] == matrix[i][1] && matrix[0][i] == matrix[i][2])
          return matrix[0][i];
     if(matrix[0][0] == matrix[1][1] && matrix[1][1] == matrix[2][2])
          return matrix[0][0];
     if(matrix[0][2] == matrix[1][1] && matrix[1][1] == matrix[2][0])
          return matrix[0][2]; 
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
