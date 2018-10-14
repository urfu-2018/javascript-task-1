'use strict';

function isNAN(param) {
    return (Number(param) !== param);
}

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (isNAN(a) || isNAN(b)) {
        throw new TypeError('Аргумент не является числом');
    }

    return a + b;
    // Ваше решение
}

/**
 * Определяет век по году
 * @param {Number} year Год, целое положительное число
 * @throws {TypeError} Когда в качестве года передано не число
 * @throws {RangeError} Когда год – отрицательное значение
 * @returns {Number} Век, полученный из года
 */
function centuryByYearProblem(year) {
    if (isNAN(year)) {
        throw new TypeError('Аргумент не является числом');
    } else if (year < 0) {
        throw new RangeError('Год отрицателен');
    }
    return Math.ceil(year / 100);
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
    if (String(hexColor) !== hexColor) {
        throw new TypeError('Цвет передан не строкой');
    }

    if (hexColor.match(/^#[a-fA-F0-9]{6}$/i) === null) {
        throw new RangeError('Недопустимое значение цвета');
    }

    var arr = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);
    const red =  parseInt(arr[1], 16);
    const green = parseInt(arr[2], 16);
    const blue = parseInt(arr[3], 16);
    return ('(' + red + ', ' + green  + ', ' + blue + ')');
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
    if (isNAN(n)) {
        throw new TypeError('Аргумент не является числом');
    } else if (n <= 0 || !Number.isInteger(n)) {
        throw new RangeError('Не является целым положительным числом');
    }
    let previous = 1;
    let next = 1;
    let temp = 0;
    for (let i=2; i<n; i++) {
        temp = next;
        next = next + previous;
        previous = temp;
    }
    return next;
    // Ваше решение
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (!(Array.isArray(matrix) && Array.isArray(matrix[0]))) {
        throw new TypeError('Аргумент  - не двумерный массив');
    }
    const transpMatrix = new Array(matrix[0].length);
    for (let i=0; i<matrix.length; i++) {
        transpMatrix[i] = new Array(matrix.length);
        for (let j=0; j<matrix[i].length; j++){
            transpMatrix[i][j] = matrix[j][i];
        }
    }
    return transpMatrix;    
    // Ваше решение
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
    if (isNAN(n) || isNAN(targetNs)) {
        throw new TypeError('Аргументы неверного типа');
    } else if(targetNs > 2 || targetNs > 36) {
        return new RangeError('Выходит за пределы от 2 до 36');
    }
    return n.toString(targetNs);
    // Ваше решение
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    return (/^8-800-\d{3}-\d{2}-\d{2}$/).test(phoneNumber);
    // Ваше решение
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (String(text) !== text) {
        throw new TypeError('Аргумент не строка');
    }
    let count = 0;
    for (let i=0; i<text.length; i++) {
        const temp = text.substr(i,1);
        if (temp === '(' || temp === ')')
            count++;
    }
    return count;
    // Ваше решение
}

function checkStrOfField(field){
    for (let i = 0; i<field.length; i++) {
        if (field[i][0] == field[i][1] && field[i][1] == field[i][2]) {
            return field[i][0];
        }
    }
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    if (checkStrOfField(field) !== null) {
        return checkStrOfField(field)
    }

    if (field[0][0] === field[1][1] === field[2][2]) {
        return field[0][0];
    }

    if (field[0][2] === field[1][1] === field[2][0]) {
        return field[0][0];
    }
    
    field = matrixProblem(field);

    if (checkStrOfField(field) !== null) {
        return checkStrOfField(field)
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
