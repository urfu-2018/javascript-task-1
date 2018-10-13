'use strict';

function typeError() {
    throw new TypeError();
}

function rangeError() {
    throw new RangeError();
}

function isNumber(a) {
    return typeof a === 'number';
}

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (isNumber(a) && isNumber(b)) {
        return a + b;
    }
    typeError();
}

/**
 * Определяет век по году
 * @param {Number} year Год, целое положительное число
 * @throws {TypeError} Когда в качестве года передано не число
 * @throws {RangeError} Когда год – отрицательное значение
 * @returns {Number} Век, полученный из года
 */
function centuryByYearProblem(year) {
    if (isNumber(year)) {
        if (year >= 1) {
            return Math.cell(year / 100);
        }
        rangeError();
    }
    typeError();
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
        if ((/^#[0-9A-F]{6}$/i).test(hexColor)) {
            let rgbArray = new Array(3);
            rgbArray[0] = parseInt(hexColor.substr(1, 2), 16);
            rgbArray[1] = parseInt(hexColor.substr(3, 2), 16);
            rgbArray[2] = parseInt(hexColor.substr(5, 2), 16);

            return '(' + rgbArray[0] + ', ' + rgbArray[1] + ', ' + rgbArray[2] + ')';
        }
        rangeError();
    }
    typeError();
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    if (isNumber(n)) {
        if (n >= 1) {
            const root5 = Math.sqrt(5);
            let a = (1 + root5) / 2;
            let b = (1 - root5) / 2;

            return (Math.pow(a, n) - Math.pow(b, n)) / root5;
        }
        rangeError();
    }
    typeError();
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (Array.isArray(matrix) && matrix.forEach(element => {
        if (Array.isArray(element)) {
            typeError();
        }
    })) {
        let matrixT = [];
        let m = matrix.length;
        if (m === 0) {
            typeError();
        }
        let n = matrix[0].length;
        matrix.forEach(element => {
            if (element.length !== n) {
                typeError();
            }
        })
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                matrixT[j][i] = matrix[i][j];
            }
        }

        return matrixT;
    }
    typeError();
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
    if (isNumber(n) && isNumber(targetNs)) {
        if (targetNs >= 2 && targetNs <= 36) {
            return parseInt(n.toString, targetNs);
        }
        rangeError();
    }
    typeError();
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    return /^8-800-[0-9]{3}-[0-9]{2}-[0-9]{2}$/.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (typeof text === 'string') {
        return text.match(/\(-:|:-\)/g).length;
    }
    typeError();
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    let array = [0, 0, 0, 1, 0, 2, 0, 0, 1, 0, 2, 0, 0, 0, 1, 1, 2, 2, 0, 2,
        1, 1, 2, 0, 0, 1, 1, 1, 2, 1, 0, 2, 1, 2, 2, 2, 1, 0, 1, 1, 1, 2, 2, 0, 2, 1, 2, 2];
    let index;
    let draw = true;
    for (index = 0; index < array.length; index += 6) {
        if (field[array[index]][array[index + 1]] === field[array[index + 2]][array[index + 3]] ===
            field[array[index + 4]][array[index + 5]]) {
            draw = false;

            return field[array[index]][array[index + 1]];
        }
    }
    if (draw) {
        return 'draw';
    }
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
